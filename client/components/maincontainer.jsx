import React, { Component } from 'react';
import { useEffect, useState } from "react";
import DrawingContainer from './drawingcontainer.jsx';
// import StorageContainer from 'storagecontainer.jsx';

//links refresh the app state, not the whole page -- what happens???
  //dissect usestate and setplayer to deliver the right links make it dynamic
//only change video id in setplayer, maybe use spread like redux?

//volume slider after database set up

//input field (mega markets) --> deconstruct youtube link and get video ID
  //pass through setPlayer hook
  //check youtube iframe api documentation for loading video

  //e.preventdefault, stoppropagation
export default function App() {
  const [url, setUrl] = useState('');
  const [player, setPlayer] = useState(''); 
  useEffect(() => {
    var tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.setAttribute("onload", "onYouTubeIframeReady()");
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = function () {
      setPlayer(
        new YT.Player("player", {
          videoId: "OSu1UxPmWXc",//"H6CSHJUaZfA", 
          autoplay: false,
          width: 1200,
          height: 800,
          playerVars: {
            controls: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            enablejsapi: 1,
            playsinline: 1,
          },
          events: {
            onReady: onPlayerReady
          }
        })
      );
    };

    function onPlayerReady(event) { 
      event.target.setVolume(10);
      console.log('player is ready, buttons should now be functional')
    }
  }, []);

  const changeVid = () => {
    //use player.loadVideo, if page refreshes, try e.preventdefault, stoppropagation

    const splitLink = url.split('=');
    let videoID = splitLink[1];
    let timeStamp = 0;

    if (splitLink[2] !== undefined) {
      videoID = videoID.slice(0, -2);
      timeStamp = parseInt(splitLink[2].slice(0, -1));
    }

    
    console.log(videoID, typeof timeStamp, timeStamp);
    
    // setPlayer(player.cueVideoById({ 'videoId': videoID, 'startSeconds': timeStamp }));
    
    setPlayer(player.loadVideoById(videoID, timeStamp));

    setUrl('');


    //youtube.com/watch?v=a5QnXi_lZII&t=351s


    //https://www.youtube.com/watch?v=a5QnXi_lZII&t=351s test this link
    //scraping video id
    //video becomes -- https://www.youtube.com/embed/videoid
// let output;
// const videoIDScraper = (link) => {
//     output = link.split('=')[1];
// }
// console.log('https://www.youtube.com/watch?v=yuyV6G6atoQ'.split('='));
// videoIDScraper('https://www.youtube.com/watch?v=yuyV6G6atoQ');
// console.log(output);
  }

  const playVid = () => {
    // console.log(player.i.src);
    player.playVideo();
  };

  const pauseVid = () => {
    player.pauseVideo();
  }

  const unMuteVid = () => {
    player.unMute();
  };

  const muteVid = () => { //make unmute
    player.mute();
  };

  return (
    <div className="video-container">
      <div id="player">
        <iframe
          title="player"
          id="player"
        ></iframe>
        <br />
      </div>
      <DrawingContainer />
      <div id="buttons">
        <button onClick={playVid}>►</button>
        <button onClick={pauseVid}>❚❚</button>
        <button onClick={muteVid}>Mute</button>
        <button onClick={changeVid}>Change Video</button>
        <br /><br /><br /><br />
        <input
        id="url-field"
        value={url}
        onChange={e => {
        setUrl(e.target.value)
        }}
        />
      </div>
    </div>
  );
}




//changing window.onYoutubeIframeReady to APIReady -- back and forth works?
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/iframe_api";
// tag.setAttribute("onload", "onYouTubeIframeReady()");
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// function App() {
// window.onYouTubeIframeReady = function () {
//   player = new YT.Player("player", {
//     videoId: "sGPrx9bjgC8",
//     autoplay: true,

//     events: {
//       onReady: onPlayerReady
//     }
//   });
// };

// function onPlayerReady(event) {
//   player = event.target;
//   event.target.playVideo();
// }

// const pauseVid = () => {
//   player.pauseVideo();
// }

// const playVid = () => {
//   console.log(player);
//   player.playVideo();
// };

// const unMuteVid = () => {
//   player.unMute();
// };

// const muteVid = () => {
//   player.mute();
// };

// return (
//   <div className="App">
//     <h1>Hello CodeSandbox</h1>
//     <h2>Start editing to see some magic happen!</h2>
//     <div id="player">
//       <iframe
//         title="p"
//         id="player"
//         width="560"
//         height="315"
//         src="https://www.youtube.com/embed/sGPrx9bjgC8&autoplay=1"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//       <br />
//     </div>
//     <div>
//       <button onClick={muteVid}>dsfsdf</button>
//       <button onClick={pauseVid}>Unmute</button>
//       <button onClick={playVid}>play</button>
//     </div>
//   </div>
// );
// }

// class MainContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       'playingVideo': false
//     }
//     this.video = React.createRef();
//     this.play = this.playVideoFrame.bind(this);
//   }
// // iframes and creating refs to then use https://stackoverflow.com/questions/32455336/play-html5-video-inside-iframe-from-play-button-in-parent
// playVideoFrame(e) {
//   console.log(e);
//   console.log(this.video.current.contentWindow.playVid());
//   // this.video.playVideo();
//   // this.video.current.onStateChange(1);
// }

// render() {
//     return (
//         <div id='main-container'>
//         <iframe ref={this.video}
//         width="1200" 
//         height="800"
//         src="https://www.youtube.com/embed/yuyV6G6atoQ?autoplay=0&mute=0&controls=0&playsinline=1&origin=*&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=3"
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowFullScreen></iframe>
//         <DrawingContainer />
//         <MediaDrawingKeys play={this.play} />
//         </div>
//     )
// }
// }

// export default Main Container;

{/* <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/70qN5Pn9Wu0?autoplay=1&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Finsights.gg&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=3" id="widget4"></iframe> */}
// https://insights.gg/dashboard/video/3a1io4VWNMk8eXUmkPXex/replay


// onChange: PropTypes.func,
// loadTimeOffset: PropTypes.number,
// lazyRadius: PropTypes.number,
// brushRadius: PropTypes.number,
// brushColor: PropTypes.string,
// catenaryColor: PropTypes.string,
// gridColor: PropTypes.string,
// backgroundColor: PropTypes.string,
// hideGrid: PropTypes.bool,
// canvasWidth: dimensionsPropTypes,
// canvasHeight: dimensionsPropTypes,
// disabled: PropTypes.bool,
// imgSrc: PropTypes.string,
// saveData: PropTypes.string,
// immediateLoading: PropTypes.bool,
// hideInterface: PropTypes.bool,
// gridSizeX: PropTypes.number,
// gridSizeY: PropTypes.number,
// gridLineWidth: PropTypes.number,
// hideGridX: PropTypes.bool,
// hideGridY: PropTypes.bool,
// enablePanAndZoom: PropTypes.bool,
// mouseZoomFactor: PropTypes.number,
// zoomExtents: boundsProp,
// clampLinesToDocument: PropTypes.bool