const asyncHandler = require('express-async-handler');
const User = require('../models/usersModel');

// Get all users
// GET /api/users
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200);
    res.json(users);
})

// Get one user
// GET /api/users/:id
const getOneUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200);
    res.json(user);
})

// Create user
// POST /api/users
const createUser = asyncHandler(async (req, res) => {
    if (!req.body.firstName || !req.body.firstName || !req.body.username || !req.body.email || !req.body.password) {
        res.status(400);
        res.json({ message: 'Please fill the firstName' });
    } else {

        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        console.log(req.body);
        res.status(200);
        res.json(user);
    } 
})

// Update user
// PUT /api/user/:id
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        res.json({ message: 'No user wit this ID' });
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200);
    res.json(updatedUser);
})

// Delete user
// DELETE /api/users/:id
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(400);
        res.json({ message: 'No user with this ID' });
    }
    await user.remove();
    res.status(200);
    res.json({ message: `User with id ${req.params.id} is deleted` });
})

module.exports = {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
};