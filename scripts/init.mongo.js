/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo issuetracker scripts/init.mongo.js
 * Atlas:
 *   mongo mongodb+srv://user:pwd@xxx.mongodb.net/issuetracker scripts/init.mongo.js
 * MLab:
 *   mongo mongodb://user:pwd@xxx.mlab.com:33533/issuetracker scripts/init.mongo.js
 */

db.travellers.remove({});
db.blacklist.remove({});

/*Q1. Enter the code for adding the initial list of Travellers here.
 * Create a list of Travellers with necessary fields. 
 * Enter the list of travellers into the DB collection named 'travellers'.
 * */

db.travellers.insertMany([
    {
        id: 1,
        name: 'Jams',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {
        id: 2,
        name: 'cookies',
        phone: '87994939',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {
        id: 3,
        name: 'chips',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {
        id: 4,
        name: 'chocolate',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {   
        id: 5,
        name: 'milk',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {
        id: 6,
        name: 'bread',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {
        id: 7,
        name: 'butter',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {
        id: 8,
        name: 'cheese',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {
        id: 9,
        name: 'eggs',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
    {
        id: 10,
        name: 'sugar',
        phone: '121310',
        bookingTime: new Date('2023-01-01T12:00:00Z'),
    },
]);


/*Q1 code ends here*/


const count = db.travellers.count();
print('Inserted', count, 'Travellers');

//The _id below is just a placeholder. The below collection, in fact, has only one row and one column. We can denote this by any name but we call this fixedindex.
db.counters.remove({ _id: 'fixedindex' });
db.counters.insert({ _id: 'fixedindex', current: count });

db.travellers.createIndex({ id: 1 }, { unique: true });
db.travellers.createIndex({ name: 1 });
db.travellers.createIndex({ phone: 1 });
db.travellers.createIndex({ bookingTime: 1 });
