import express from 'express';
import schema from './data/graphql/schema';
import GraphQLHTTP from 'express-graphql';
import {MongoClient} from 'mongodb';

let app = express();
app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
	schema: schema,
	graphiql: true
}));

let db;
console.log('process.env.MONGO_URL',process.env.MONGO_URL);
MongoClient.connect(process.env.MONGO_URL, (err, database) => {
  if (err) 
  {
  	console.log(err);
  	throw err;
  }

  db = database;
  let listener = app.listen(3000, () => console.log('Listening on port ', listener.address().port()));
});

app.get("/data/links", (req, res) => {
  db.collection("links").find({}).toArray((err, links) => {
    if (err) throw err;

    res.json(links);
  });
});
