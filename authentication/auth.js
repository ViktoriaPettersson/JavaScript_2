// Hämtar hem jsonwebtoken som genererar en token
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Hämtar secretkey från dotenv-fil
const secretKey = process.env.SECRET_KEY;

// Funktion som genererar token.
// Skickar med user i token
// Skickar med secretkey
// Skickar med option som innebär att token är giltig en timme
exports.generateToken = (user) => {
  return jwt.sign({id: user._id}, secretKey, { expiresIn: '1h' })
}

// Verifiera token
exports.verifyToken = (req, res, next) => {
  try {
    // Token blir skickad som: Bearer <token> därför splittar vi för att bara få token delen
    const token = req.headers.authorization.split(" ")[1]
    // verify som verifierar och använder token och secretkey
    req.userData = jwt.verify(token, secretKey)
    // gå vidare
    next();
  }
  // om det går dåligt hamnar vi i catch
  catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: 'Access Restricted! Please Login'
    })
  }
}