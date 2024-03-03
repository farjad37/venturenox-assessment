const { DataTypes } = require('sequelize');
const db = require('../utilities/database');
const commonAttributes = require('../base/base.entity');
const Tenant = require('./tenant.entity'); 

const User = db.define('User', {
  ...commonAttributes,  
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name'
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false
  },
  designation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'image_url'
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true
  },
  socialLinks: {
    type: DataTypes.JSON,
    allowNull: true,
    field: 'social_links'
  },
  employeeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'employee_id'
  },
  tenantId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'tenant_id'
  }
}, {
  tableName: 'users', 
  timestamps: true 
});

// Define the One-to-Many relationship between User and Tenant
User.belongsTo(Tenant, {
    foreignKey: 'tenant_id',
    onDelete: 'CASCADE', 
    as:"tenant",
  });

module.exports = User;