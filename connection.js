//connection.js
import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';

// he assumes we already have a DB named relay
const Conn = new Sequelize(
  'nexus', //relay',  this is the name of the database
  'root',//'postgres', username
  'root',//'postgres', password
  {
    dialect: 'mysql', //'postgres',
    host: 'localhost'
  }
);

export default Conn;