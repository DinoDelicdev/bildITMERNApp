const express = require('express');
const router = express.Router();
const {getUsers, createUser, updateUser, deleteUser, getOneUser} = require('../controllers/usersController')

router.get('/', getUsers);

router.get('/:id', getOneUser);

router.post('/', createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);


module.exports = router;