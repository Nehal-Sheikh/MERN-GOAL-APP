const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../Model/users') 

//  @desc        get user   
//  @route       GET api/users/user
//  @access      Private
const getUser = async(req, res, next) => {
    res.status(200).json({message: 'display a User'})
}

//  @desc        Register user   
//  @route       POST api/users/
//  @access      Public
const RegisterUser = async(req, res, next) => {
    const { name, email, password } = req.body
    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    //check if user exists in the db
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already Exits')
    }

    //hash the password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }
}

//  @desc        Authenticate a user   
//  @route       GET api/users/login
//  @access      Public
const loginUser = (req, res, next) => {
    res.status(200).json({message:'login user'})
}

module.exports = {
    getUser,
    RegisterUser,
    loginUser
} 