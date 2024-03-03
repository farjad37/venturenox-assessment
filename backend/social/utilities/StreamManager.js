const tenantService = require('../service/tenant.service');
const userService = require('../service/user.service');

const processMessage = async (kafkaMessage) => {
  // Destructure event_name and properties from kafkaMessage
  const { event_name, properties } = kafkaMessage;

  try {
	
    if (event_name === "tenant_created") {
      await tenantService.createTenant(properties);
    } 

    if (event_name === "user_created") {
      await userService.createUser({ ...properties, tenantId: properties.tenant_id });
    } 
  } catch (error) {
    // Log any errors that occur during processing
    console.error("Error processing message:", error.message);
  }
};

module.exports = { processMessage };
