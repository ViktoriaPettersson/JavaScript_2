const mongodb = require('mongoose');
// const Schema = mongodb.Schema

// Uppbyggnaden av ordern. Cart och Userinfo tas in som objekt
const orderSchema = mongodb.Schema({
    // user:   {type: Schema.Types.ObjectId, ref: 'User'},
    cart: { type: Object, required: true },
    userInfo: {type: Object, required: true },

    created: { type: Date, default: Date.now },
    modified: { type: Date, default: Date.now }
});

module.exports = mongodb.model('Order', orderSchema)