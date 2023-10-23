const UserActivity = require('../Model/userActivity')

//  @desc        get Activity
//  @route       GET api/UserActivity
//  @access      Private
const getUserActivity = async(req, res, next) => {
    const users = await User.find()
    res.status(200).json(users)
}

//  @desc        Set Activity
//  @route       POST api/UserActivity
//  @access      Private
const postUserActivity = async(req, res, next) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Plaese add all fields')
    }

    const user = await UserActivity.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }) 
    res.status(200).json(user)
}

//  @desc        update Activity
//  @route       PUT api/UserActivity/:userId
//  @access      Private
const updateUserActivity = async(req, res, next) => {
    const user = await User.findById(req.params.userId)
    if(!user){
        res.status(400)
        console.log('user not found')
    }

    const updatedUser = await UserActivity.findByIdAndUpdate(req.params.userId, req.body,{new: true})
    //     $set : {
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.password
    //     }
    // })

    res.status(200).json(updatedUser)
}

//  @desc        delte Activity
//  @route       DELETE api/UserActivity/:userId
//  @access      Private
const deleteUserActivity = async(req, res, next) => {
    const user = await UserActivity.findById(req.params.userId)
    if(!user){
        res.status(400)
        console.log('user not found')
    }

    await UserActivity.findByIdAndRemove(req.params.userId)

    res.status(200).json({id: req.params.userId})
}

module.exports = {
    getUserActivity,
    postUserActivity,
    updateUserActivity,
    deleteUserActivity
}