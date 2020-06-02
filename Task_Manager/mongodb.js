const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-db'

MongoClient.connect(connectionURL, { 'useNewUrlParser': true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect the Database');
    }
    const db = client.db(databaseName)

    //=======    INSERT ONE RECORD TO DB  ==========
    // db.collection('user').insertOne({
    //     "name": "jeevan",
    //     "age": 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert to db');
    //     }
    //     console.log(result.ops);
    // })

    //=======    INSERT MANY RECORD TO DB  ==========
    // db.collection('task').insertMany([{
    //     description: "this is first record",
    //     completed: true
    // }, {
    //     description: "this is secound record",
    //     completed: false
    // }, {
    //     description: "this is third record",
    //     completed: true
    // }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert record');
    //     }
    //     console.log(result.ops);
    // })


    //====== find the one record from the database
    // db.collection('user').findOne({ _id: new ObjectID("5ed4b2f4682e59220c5081dd") }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to fetch data');
    //     }
    //     console.log(result);
    // })

    //====== find the all record which match 
    // db.collection('user').find({ age: 23 }).toArray((error, user) => {
    //     console.log(user)
    // })

    //==== find the count of record which match
    // db.collection('user').find({ age: 23 }).count((error, userCount) => {
    //     console.log(userCount)
    // })

    // === challenge given
    // db.collection('task').findOne({ _id: new ObjectID("5ed4b7ba8ce52a209c1d340d") }, (error, result) => {
    //     if (error) {
    //         console.log('unable to find');
    //     }
    //     console.log(result);
    // })

    // db.collection('task').find({ completed: false }).toArray((error, result) => {
    //     console.log(result);
    // })

    // ====== UPDATE THE RECORD IN DB
    // db.collection('user').updateOne({
    //     _id: new ObjectID("5ed4b2f4682e59220c5081dd")
    // }, {
    //     $set: {
    //         name: "Latha",
    //         age: 40
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    //======> UPDATE THE MANY RECORD    
    db.collection('task').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})