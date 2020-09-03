const express = require('express');
const router = express.Router();
const auth = require('./controllers/user');
 
router.post('/signup', auth.signup);
 
router.post('/login', auth.login);
 
router.get('/user/:userId', auth.allowIfLoggedin, auth.getUser);
 
router.get('/users', auth.allowIfLoggedin, auth.grantAccess('readAny', 'profile'), auth.getUsers);
 
router.put('/user/:userId', auth.allowIfLoggedin, auth.grantAccess('updateAny', 'profile'), auth.updateUser);
 
router.delete('/user/:userId', auth.allowIfLoggedin, auth.grantAccess('deleteAny', 'profile'), auth.deleteUser);
 
module.exports = router;