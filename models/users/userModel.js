// Hämtar mongoose, user, bcrypt, auth
const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');

// Skapar en användare och kollar först om det redan finns en
exports.registerUser = (req, res) => {

    User.exists({ email: req.body.email }, (err, result) => {
      if(err) {
        return res.status(400).json(err)
      } else {
  
        if(result) {
          return res.status(400).json({
            statusCode: 400,
            status: false,
            message: 'Email address is already taken'
          })
        }
        else {
            
        // Saltar(krypterar) lösenordet 10 rundor
          const salt = bcrypt.genSaltSync(10);
        // Callback-funktion med möjligt fel eller en hash
          bcrypt.hash(req.body.password, salt, (err, hash) => {
        // Om något går fel när lösenordet ska hashas skcikas en statuskod på 500
            if(err) {
              return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed when encrypting user password'
              })
            }
        // En ny user skapas med ett hashat lösenord
  
            const newUser = new User({
              firstName:    req.body.firstName,
              lastName:     req.body.lastName,
              email:        req.body.email,
              passwordHash: hash
            })
        // Spara till databasen 
            newUser.save()
              .then(() => {
                res.status(201).json({
                  statusCode: 201,
                  status: true,
                  message: 'User was created successfully'
                })
              })
              .catch(() => {
                res.status(500).json({
                  statusCode: 500,
                  status: false,
                  message: 'Failed to create user'
                })
              })
          })
        }
      }
    })
  }
  // Logga in en användare och kollar först om det finns en användare och om rätt uppgifter anges

  exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
      if(user === null) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Inccorect email or password'
        })
      }
      // bcrypt används både för att kryptera och dekryptera. 
      // Här kollar vi om lösenordet som skcikas med i body matchar med det krypterade lösenordet som finns i databasen
      try {
        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
          if(err) {
            return res.status(400).json(err)
          }
          else {
            // Om lösenordet stämmer blir autentiseringen lyckad
            if(result) {
              return res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Authentication was successful',
                // Token fungerar som en biljett som talar om att användaren är inloggad
                token: auth.generateToken(user)
              })
            }
            // Om vi får false får vi en 401 (unauthorized)
            return res.status(401).json({
              statusCode: 401,
              status: false,
              message: 'Incorrect email or password'
            })
  
          }
        })
      }
      // Om autentiseringen inte fungerar har vi ett server-fel med statuskod 500
      catch {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Unable to authenticate user. Please contact the system administrator'
        })
      }
    })
}