# meetup-ticket-selling
Adding online ticket selling to events on meetup.com website

# HOW to run
- nvm use 5.0.0

- terminal in new tab

    > npm i

    > webpack -wd

- run against local mongod
	
	> cd data

	> mongod

	> export MONGO_URL=mongodb://localhost:27017

- terminal in new tab

    > export MONGO_URL=mongodb://<dbuser>:<dbpassword>@ds055505.mongolab.com:55505/ticket_event
    
    > nodemon
    
- navigate to localhost:3000