import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';
import db from './db';

// Config
const APP_PORT = 3000;

// Start
const app = Express();

// GraphQL
app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));



// app.use('/info', function(){
//   db.create
// });

app.listen(APP_PORT, ()=> {
  console.log(`App listening on port ${APP_PORT}`);
});
