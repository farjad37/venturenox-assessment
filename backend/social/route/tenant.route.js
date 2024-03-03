const express = require('express');
const router = express.Router();
const tenantController = require('../controller/tenant.controller');

router.post('/', tenantController.createTenant);
router.get('/', tenantController.getTenants);
router.get('/:id', tenantController.getTenantById);
router.patch('/:id', tenantController.updateTenantById);
router.delete('/:id', tenantController.deleteTenantById);

module.exports = router;