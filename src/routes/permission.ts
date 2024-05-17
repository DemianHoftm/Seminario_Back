import express from 'express';
import {getAllPermissions} from '../Controllers/permission';
const router = express.Router();


router.get('/getAllPermissions', getAllPermissions);


module.exports = router;