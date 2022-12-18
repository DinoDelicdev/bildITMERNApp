const asyncHandler = require('express-async-handler');
// Get all users
// GET/api/users
const getUsers = asyncHandler(async (req, res) => {
        res.status(200);
        res.json({ message: 'All users' });
})

// Get all users
// POST/api/users
const createUser = asyncHandler(async (req, res) => {
    console.log(req.body);
    res.status(200);
    res.json({ message: 'User created' });
})

// Update user
// PUT /api/user/:id
const updateUser = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({ message: `User ${req.params.id} updated` });
})

// Delete user
// DELETE /api/users
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200);
    res.json({ message: `User ${req.params.id} deleted` });
})

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};