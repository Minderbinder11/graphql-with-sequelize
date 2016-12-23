//job.js
import Conn from './connection';
import Sequelize from 'sequelize';

const Job = Conn.define('job', {
  job_title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  snippet: {
    type:Sequelize.TEXT,
    allowNull: false
  },
  applicant: {
    type: Sequelize.STRING,
    allowNull: false
  }
  // will add more fileds later
});

export default Job;