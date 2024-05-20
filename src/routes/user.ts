import express from 'express';
import {CreateUser} from '../Controllers/user'
const router = express.Router();


router.post('/CreateRole', CreateUser);

module.exports = router;