import express from 'express';
import {GetAllRole,CreateRole, GetOneRol} from '../Controllers/role';
const router = express.Router();

router.get('/GetAllRole', GetAllRole);
router.get('/GetOneRol/:id', GetOneRol);
router.post('/CreateRole', CreateRole);

module.exports = router;