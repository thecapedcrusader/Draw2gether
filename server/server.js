const path = require('path');
const express = require('express');
const app = express();

const PORT = 3000;

// port number
//app.use urlencoded, cookie-parser, express() (JSON)

//mongoose, mongodb

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

//connect database
//save brushes in database?

/*
 * create an application that is able to draw on videos where the video is an INPUT by the USER CLIENT
 * create rooms/video, read rooms/video, update rooms/users+videos, delete rooms/videos
 * 
 */

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
// console.log('https://www.youtube.com/watch?v=yuyV6G6atoQ'.split('='));
// videoIDScraper('https://www.youtube.com/watch?v=yuyV6G6atoQ');
// console.log(output);

//react-player

//https://developers.google.com/youtube/player_parameters youtube iframe parameters
// https://www.youtube.com/embed/70qN5Pn9Wu0?autoplay=1&amp;mute=0&amp;controls=0&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1
//origin=https%3A%2F%2Finsights.gg

//time management, imposter syndrome, youtube api iframes, learning about hooks and refs in react
//libraries for drawing, react-canvas-draw
//youtube iframe embed link iframe parameters couldn't access from cross origin, then transitioned to youtube iframe api
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})


app.listen(PORT, () => {
    console.log('listening on port:', PORT, process.env.NODE_ENV);
});