const mysql = require('mysql2');

const config = {
  host: process.env.DB_HOST,      
  user: process.env.DB_USER,     
  password: process.env.DB_PASSWORD,  
  database: process.env.DB_DATABASE    
};

const connection = mysql.createConnection(config);

module.exports = connection;
