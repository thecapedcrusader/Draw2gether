import React, { Component } from 'react';
// import DrawingContainer from 'drawingcontainer.jsx';
// import StorageContainer from 'storagecontainer.jsx';
import CanvasDraw from 'react-canvas-draw';

const MainContainer = (props) => {
    return (
        <div id='maincontainer'>
        <iframe width="1200" 
        height="800" 
        src="https://www.youtube.com/embed/yuyV6G6atoQ?autoplay=0&mute=0&controls=0&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=3"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <br />
        <br />
        <CanvasDraw
          enablePanAndZoom
          clampLinesToDocument
          hideGrid
          backgroundColor='transparent'
        //   hideInterface
          />
        </div>
    )
}

export default MainContainer;

{/* <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/70qN5Pn9Wu0?autoplay=1&amp;mute=0&amp;controls=0&amp;origin=https%3A%2F%2Finsights.gg&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=3" id="widget4"></iframe> */}
// https://insights.gg/dashboard/video/3a1io4VWNMk8eXUmkPXex/replay