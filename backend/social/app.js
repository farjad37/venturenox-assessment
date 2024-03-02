const express = require('express');
const sequelize = require('./utilities/database');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');
const Tenant  = require('./entity/tenant.entity');
const  User  = require('./entity/user.entity');
const routes = require('./route');


//console.log(createConnection())
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// app.use(databaseConfig.initializeDB());

sequelize.sync()
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('Error synchronizing models:', err);
  });


app.use('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});

app.listen(process.env.PORT || 4000, async () => {

	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});