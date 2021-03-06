const Express = require('express')
const setupMiddleWare = require('./setup/middleware')
const setupDatabase = require('./setup/database')

const app = Express()

setupMiddleWare(app)

setupDatabase()
    .then((client) => {
        console.log(client)

        app.listen(4000 , () => {
            console.log('Server started on port 4000')
        })
    })
    .catch(console.error)


//for mongodb to work it has to be installed locally. I used brew as it was easier
//https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/




