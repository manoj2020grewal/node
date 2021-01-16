

const mongoose = require('mongoose')

const url = `mongodb+srv://manoj_grewal:RNKby5dju1E22yxw@cluster0.r9jqv.mongodb.net/nodeproject?retryWrites=true&w=majority`;
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
})

