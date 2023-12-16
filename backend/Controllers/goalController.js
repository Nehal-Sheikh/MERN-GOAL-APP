const Goal = require('../Model/goal')
const User = require('../Model/users')

//  @desc        get Goals
//  @route       GET api/goals
//  @access      Private
const getGoals = async(req, res, next) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals)
}


//  @desc        Set Goal
//  @route       POST api/goals
//  @access      Private
const postGoal = async(req, res, next) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Plaese add all fields')
    }

    const goal = await Goal.create({
        user: req.user.id,
        text: req.body.text
    }) 
    res.status(200).json(goal)
}


//  @desc        update Activity
//  @route       PUT api/UserActivity/:userId
//  @access      Private
const updateGoal = async(req, res, next) => {
    const goal = await Goal.findById(req.params.goalId)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    const user = await User.findById(req.user.id)

    //Check for User Exists
    if(!user){
        res.status(401)
        throw new Error('User Not Found')
    }

    //checking logged in user matches goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.goalId, req.body, {new: true})
    //     $set : {
    //         name: req.body.name,
    //         email: req.body.email,
    //         password: req.body.password
    //     }
    // })

    res.status(200).json(updatedGoal)
}


//  @desc        delte Activity
//  @route       DELETE api/UserActivity/:userId
//  @access      Private
const deleteGoal = async(req, res, next) => {
    const goal = await Goal.findById(req.params.goalId)
    if(!goal){
        res.status(400)
        console.log('goal not found')
    }

    const user = await User.findById(req.user.id)

    //Check for User Exists
    if(!user){
        res.status(401)
        throw new Error('User Not Found')
    }

    //checking logged in user matches goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await Goal.findByIdAndRemove(req.params.goalId)

    res.status(200).json({id: req.params.goalId})
}

module.exports = {
    getGoals,
    postGoal,
    updateGoal,
    deleteGoal
}