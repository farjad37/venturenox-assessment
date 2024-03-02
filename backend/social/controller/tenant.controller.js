const tenantService = require('../service/tenant.service');

class TenantController {
    async createTenant(req, res){
  try {
    const tenant = await tenantService.createTenant(req.body);
    res.status(200).json(tenant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async getTenants(req, res){
    try {
      const tenants = await tenantService.getTenants();
      res.json(tenants);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getTenantById(req, res){
    try {
      const tenantId = req.params.id;
      const tenant = await tenantService.getTenantById(tenantId);
      if (!tenant) {
        return res.status(404).json({ error: 'Tenant not found' });
      }
      res.json(tenant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateTenantById(req, res){
    try {
      const tenantId = req.params.id;
      const updatedTenant = await tenantService.updateTenantById(tenantId, req.body);
      res.json(updatedTenant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  deleteTenantById = async (req, res) => {
    try {
      const tenantId = req.params.id;
      const tenant = await tenantService.deleteTenantById(tenantId);
      res.json(tenant);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new TenantController
