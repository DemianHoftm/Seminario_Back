import express from 'express';
import {GetAllRole} from '../Controllers/role';
const router = express.Router();

router.get('/GetAllRole', GetAllRole);


module.exports = router;