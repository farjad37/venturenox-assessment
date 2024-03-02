
const Tenant = require('../entity/tenant.entity');

class TenantService {
    async createTenant(tenantData) {
        try {
          const tenant = await Tenant.create({
            name: tenantData.name,
            address: tenantData.address,
            city: tenantData.city,
            state: tenantData.state,
            country: tenantData.country,
            zipCode: tenantData.zipCode,
            phone: tenantData.phone,
            webUrl: tenantData.webUrl,
          });
          return tenant.id;
        } catch (error) {
          throw new Error(error.message);
        }
      }

  async getTenants() {
    return await Tenant.findAll();
  }

  async getTenantById(tenantId) {
    return await Tenant.findByPk(tenantId);
  }

  async updateTenantById(tenantId, tenantData) {
    const tenant = await Tenant.findByPk(tenantId);
    if (!tenant) {
      throw new Error('Tenant not found');
    }
    await tenant.update(tenantData);
    return tenant;
  }

  async deleteTenantById(tenantId) {
    const tenant = await Tenant.findByPk(tenantId);
    if (!tenant) {
      throw new Error('Tenant not found');
    }
    const deleteTenant = await tenant.destroy();
    if(deleteTenant)
    return {message:`Tenant successfully deleted`}
  }

}

module.exports = new TenantService();
