import express from 'express';
import {CreateUser, GetRolPErmissionByID} from '../Controllers/user'
const router = express.Router();

router.get('/GetRolPErmissionByID/:id', GetRolPErmissionByID);
router.post('/CreateRole', CreateUser);

module.exports = router;