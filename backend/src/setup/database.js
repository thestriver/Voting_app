const Mongodb = require('mongodb')

const uri = 'mongodb://localhost:/voting-platform'

module.exports = () => {
    const client = new Mongodb.MongoClient(uri)

    return client.connect() //to establish a connection and return a promise
}