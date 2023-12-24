const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs');


const signup = async (req, res, next)  =>{
    const {username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password || '', 10)
    const newUser = User ({ username, email , password: hashedPassword})
    try {
        await newUser.save()
        res.status(201).json({ success: true, message: 'User criado com sucesso!' });
    } catch (error) {
        next(error)
    }
   
   
}

module.exports = {signup}