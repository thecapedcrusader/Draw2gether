const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

// port number
//app.use urlencoded, cookie-parser, express() (JSON)

//mongoose, mongodb
//babelrc
//https://github.com/LeeSimonH/DrawPad

//excalidraw

//libraries for drawing

//https://stackoverflow.com/questions/71412043/i-want-draw-on-the-video-using-mouse-pointer-in-html5
//z-index

//connect database
//save brushes in database?

//git init

//proxy server webpack during development 

/*
 * create an application that is able to draw on videos where the video is an INPUT by the USER CLIENT
 * create rooms/video, read rooms/video, update rooms/users+videos, delete rooms/videos
 * 
 */
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})


app.listen(PORT, () => {
    console.log('listening on port:', PORT);
});