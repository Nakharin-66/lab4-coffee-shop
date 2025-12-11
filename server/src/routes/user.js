const express = require('express')
const router = express.Router()
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController')

router.get('/user', getAllUsers)
router.get('/user/:userId', getUserById)
router.post('/user', createUser)
router.put('/user/:userId', updateUser)
router.delete('/user/:userId', deleteUser)

module.exports = router
