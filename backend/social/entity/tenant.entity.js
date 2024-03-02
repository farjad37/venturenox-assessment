const { DataTypes } = require('sequelize');
const db = require('../utilities/database');
const commonAttributes = require('../base/base.entity');


const Tenant = db.define('Tenant', {
  ...commonAttributes,
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'tenant_name'
  },
  address: {
    type: DataTypes.JSON,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'zip_code'
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  webUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'web_url'
  }
}, 
{
  tableName: 'tenants', 
  timestamps: false 
});


module.exports = Tenant;