const mongoose = require('mongoose');

const databaseConnect = () => {
     mongoose.connect(process.env.DATABASE_URL,{
          useNewUrlParser : true,
          useUnifiedTopology : true
     }).then(()=>{
          console.log('Database Connected')
     }).catch(error=>{
          console.log("Database failed to connect, check your internet connection")
     })
}
module.exports = databaseConnect;