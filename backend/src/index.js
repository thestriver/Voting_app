const Express = require('express')
const setupMiddleWare = require('./setup/middleware')

const app = Express()

setupMiddleWare(app)


app.listen(4000 , () => {
    console.log('Server started on port 4000')
})