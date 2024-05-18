import express from 'express';
import {GetAllRole,CreateRole, GetOneRol, DeleteRole, UpdateRole} from '../Controllers/role';
const router = express.Router();

router.get('/GetAllRole', GetAllRole);
router.get('/GetOneRol/:id', GetOneRol);
router.post('/CreateRole', CreateRole);
router.delete('/DeleteRole/:id',DeleteRole);
router.put('/UpdateRole/:id', UpdateRole);

module.exports = router;