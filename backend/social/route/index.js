const express = require('express');
const router = express.Router();


const tenantRoutes = require('./tenant.route');
const userRoutes = require('./user.route')

router.use('/users', userRoutes);
router.use('/tenants', tenantRoutes);

module.exports = router;