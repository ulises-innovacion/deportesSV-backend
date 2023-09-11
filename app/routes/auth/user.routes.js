const { Router } = require('express');
const { getAllUser, get1UserbyID, createUser, updateUser, deleteUser } = require('../../controller/auth/user.controller');

const router = Router();

router.get('/', getAllUser);
router.get('/:id', get1UserbyID);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;