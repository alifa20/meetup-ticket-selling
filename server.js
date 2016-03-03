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
let dburl;
if (process.env.MONGO_URL) {
  dburl = process.env.MONGO_URL;
}
else {
  // dburl = mongodb://ticket_event_user:123456velkon@ds055505.mongolab.com:55505/ticket_event;
  dburl = 'mongodb://localhost:27017/ticket_event';
}

MongoClient.connect(dburl, (err, database) => {
  if (err) 
  {
  	console.log(err);
  	throw err;
  }

  db = database;
  let listener = app.listen(3000, () => console.log('Listening on port ', listener.address().port));
});

app.get("/data/links", (req, res) => {
  db.collection("links").find({}).toArray((err, links) => {
    if (err) throw err;

    res.json(links);
  });
});
