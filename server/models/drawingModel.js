const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://ant:ant@cluster0.iqnikwo.mongodb.net/?retryWrites=true&w=majority'

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'drawingStorage',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const drawingsSchema = new Schema({
    drawingStored: String,
});

const Drawing = mongoose.model('Drawing', drawingsSchema)

module.exports = Drawing;