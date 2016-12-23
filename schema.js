 import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import Db from './db';


const Job = new GraphQLObjectType({
  name: 'Job',
  description: 'This represents a Job',
  fields: () => {
      return {
      id: {
        type: GraphQLInt,
        resolve (job) {
          return job.id;
        }
      },
      job_title: {
        type: GraphQLString,
        resolve (job) {
          return job.job_title;
        }
      },
      company: {
        type: GraphQLString,
        resolve (job) {
          return job.company;
        }
      },
      snippet: {
        type: GraphQLString,
        resolve (job) {
          return job.snippet;
        }
      },
      person: {
        type: Person,
        resolve (job) {
          return job.getPerson();
        }
      }
    };
  }
});

const Person = new GraphQLObjectType({
  name: 'Person',
  description: 'This represents a Person',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve (person) {
          return person.id;
        }
      },
      firstName: {
        type: GraphQLString,
        resolve (person) {
          return person.firstName;
        }
      },
      lastName: {
        type: GraphQLString,
        resolve (person) {
          return person.lastName;
        }
      },
      email: {
        type: GraphQLString,
        resolve (person) {
          return person.email;
        }
      },
      jobs: {  
        type: new GraphQLList(Job),
        resolve (person) {
          return person.getJobs();  // we can use this, because it is provided to us from Sequalize when we set the 
          // relationships of the dbs.
        }
      }
    };
  }
});


// these are the public API methods
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query object',
  fields: () => {
    return {
      people: {
        type: new GraphQLList(Person),
        args: {
          id: {
            type: GraphQLInt
          },
          email: {
            type: GraphQLString
          }
        },
        resolve (root, args) {
          return Db.models.person.findAll({ where: args });
        }
      },
      jobs: {
        type: new GraphQLList(Job),
        args: {
          id: {
            type: GraphQLInt
          },
          job_title: {
            type: GraphQLString
          },
          company: {
            type: GraphQLString
          }
        },
        resolve (root, args) {
          return Db.models.job.findAll({ where: args });
        }
      }
    };
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Functions to set stuff',
  fields () {
    return {
      addPerson: {
        type: Person,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          lastName: {
            type: new GraphQLNonNull(GraphQLString)
          },
          email: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve (source, args) {
          return Db.models.person.create({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email.toLowerCase()
          });
        }
      }
    };
  }
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;
