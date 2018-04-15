const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to Mongo Server');
    }
    console.log('Connect to MongoDB server');
    const db = client.db('TodosApp');
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(rs=>{
    //     console.log(rs);
    // })
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(rs=>{
    //     console.log(rs);
    // })
    // db.collection('Todos').findOneAndDelete({completed: false}).then(rs=>{
    //     console.log(rs);
    // })
    // db.collection('Users').deleteMany({name:'Andrew'});
    db.collection('Users').findOneAndDelete({ 
        _id: new ObjectID('5ad1d83af5202b21ec77e595')
    }).then(rs=>{
        console.log(JSON.stringify(rs,undefined,2));
    });
    // db.close();
})