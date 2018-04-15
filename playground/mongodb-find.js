const { MongoClient , ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connect to MongoDB server');  
    const db = client.db('TodosApp');
    // db.collection('Todos').find({completed : true}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todo counts ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({name : 'Andrew'}).toArray().then(docs=>{
        console.log(JSON.stringify(docs,undefined,2));
    })

    // db.close();
})