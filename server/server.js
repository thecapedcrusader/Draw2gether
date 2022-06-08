const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

// port number
//app.use urlencoded, cookie-parser, express() (JSON)

//mongoose, mongodb
//babelrc

// ---------------------------------------
// HIERARCHY
// |-- App
//  |-- Nav Bar
//   |-- MainContainer (Video Embed)
//      |-- Drawing Container
//         |-- Drawing Bar (Buttons)
//      |-- Storage Container
//         |-- History (Previous Videos pulled from DB)
// ---------------------------------------

//libraries for drawing, react-canvas-draw

//z-index

//connect database
//save brushes in database?

//proxy server webpack during development?

/*
 * create an application that is able to draw on videos where the video is an INPUT by the USER CLIENT
 * create rooms/video, read rooms/video, update rooms/users+videos, delete rooms/videos
 * 
 */


//focus on crud functionality with LINKS

// insights.gg
//change this.props in maincontainer
//newlocation for links
// /login, ./signup
// https://developers.google.com/youtube/player_parameters


//scraping video id
    //video becomes -- https://www.youtube.com/embed/videoid
// let output;
// const videoIDScraper = (link) => {
//     output = link.split('=')[1];
// }

//react-player

//https://developers.google.com/youtube/player_parameters youtube iframe parameters

// console.log('https://www.youtube.com/watch?v=yuyV6G6atoQ'.split('='));

// videoIDScraper('https://www.youtube.com/watch?v=yuyV6G6atoQ');
// console.log(output);

app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})


app.listen(PORT, () => {
    console.log('listening on port:', PORT, process.env.NODE_ENV);
});