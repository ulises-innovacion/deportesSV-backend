const { Router } = require('express');
const {login} = require('../../controller/auth/login.controller')
const router = Router();

router.post('/', login);

module.exports = router;