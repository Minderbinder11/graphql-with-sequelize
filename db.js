import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';
import Conn from './connection';
import Person from './person';
import Job from './job';


// // he assumes we already have a DB named relay
// const Conn = new Sequelize(
//   'nexus', //relay',  this is the name of the database
//   'root',//'postgres', username
//   'root',//'postgres', password
//   {
//     dialect: 'mysql', //'postgres',
//     host: 'localhost'
//   }

//   // what does pool mean???
// );

// // this defines the tables in the DB
// const Person = Conn.define('person', {
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     validate: {
//       isEmail: true
//     }
//     // check out sequalize validate functions
//     // later will add address, password hash, and other stuff like that
//   }
// });

// const Contact = Conn.define('contact', {
//   company: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   email: {
//     type: Sequelize.STRING,
//     validate: {
//       isEmail: true
//     }
//   },
//   phone: {
//     type: Sequelize.STRING,
//     allowNUll: true
//   }
// });

// const Job = Conn.define('job', {
//   job_title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   company: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   snippet: {
//     type:Sequelize.TEXT,
//     allowNull: false
//   },
//   applicant: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
//   // will add more fileds later
// });


// Relations
Person.hasMany(Job);
Job.belongsTo(Person);

// Job.hasMany(Contact);
// Contact.belongsTo(Job);

// Conn.sync({ force: true }).then(()=> {
//   _.times(10, ()=> {
//     return Person.create({
//       firstName: Faker.name.firstName(),
//       lastName: Faker.name.lastName(),
//       email: Faker.internet.email()
//     }).then(person => {
//     // return _.times(5, () => {
//          return person.createJob({
//           applicant: person.firstName,
//           job_title: Faker.lorem.words(),
//           company: Faker.company.companyName(),
//           snippet: Faker.company.catchPhrase()
//         });
//       //});
//     }).then( job => {
//       //console.log("job: ", job);
//       return job.createContact({
//         company: Faker.name.firstName(),  //job.company 
//         name: Faker.name.firstName(),
//         email: Faker.internet.email(),
//         phone: Faker.internet.email()
//       });
//     })
//     .catch( (error) => {
//       console.log(error);
//     });   // this is where its going to get complicated
//   });
// });

Person.create({
  firstName: 'Ted',
  lastName: 'Bernardo',
  email: 'ted@gmail.com'
}).then(function(user){
  console.log(user);
});

// export default Conn;
