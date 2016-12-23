//person.js
import Conn from './connection';
import Sequelize from 'sequelize';



// const Conn = new Sequelize(
//   'nexus', //relay',  this is the name of the database
//   'root',//'postgres', username
//   'root',//'postgres', password
//   {
//     dialect: 'mysql', //'postgres',
//     host: 'localhost'
//   }
// );

// this defines the tables in the DB
const Person = Conn.define('person', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
    // check out sequalize validate functions
    // later will add address, password hash, and other stuff like that
  }
});

export default Person;