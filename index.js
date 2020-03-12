require('dotenv').config(); // read from a .env file located at the root of the project
// and merge the key/value pairs into process.env

const server = require('./api/server.js');


// want port to be assigned by the Server 
//  Heroku will place the .PORT environment value on their server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
