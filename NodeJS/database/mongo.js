const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://192.168.0.18:27017/mibasededatos'

mongoose.connect(MONGO_URI , {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err))