require('dotenv').config({ path: './config/.env' });
const http = require('http');
const mongoose = require('mongoose');
const app = require('./app.js');

const server = http.createServer(app);

const port = process.env.PORT;

const start = async () => {
  try {
    //await mongoose.connect('mongodb://localhost:27017/test', {
    //  useNewUrlParser: true,
    //  useUnifiedTopology: true,
    //});

    server.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed to start the server on port ${port}, check .env file`);
    process.exit(1);
  }
};

start();
