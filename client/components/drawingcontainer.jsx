import React, { Component } from 'react';
import CanvasDraw from 'react-canvas-draw';

class DrawingContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
        color: "#ffc600",
        brushRadius: 10,
        lazyRadius: 12,
      };
    }
      render() {
    return ( 
        <div id="drawing-container">
        <CanvasDraw
        ref={canvasDrawing => (this.drawingCanvas = canvasDrawing)}
        clampLinesToDocument
        hideGrid
        backgroundColor='transparent'
        canvasHeight='800'
        canvasWidth='1200'
    />
    <div className='drawing-buttons'>
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.drawingCanvas.getSaveData()
              );
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.drawingCanvas.eraseAll();
            }}
          >
            Erase
          </button>
          <button
            onClick={() => {
              this.drawingCanvas.undo();
            }}
          >
            Undo
          </button>
          <button
            onClick={() => {
              console.log(this.drawingCanvas.getDataURL());
              alert("DataURL written to console")
            }}
          >
            GetDataURL
          </button>
          <button
          onClick={() => {
            this.drawingCanvas.loadSaveData(
              localStorage.getItem("savedDrawing")
            );
          }}
        >
          Load your previously saved drawing!
        </button>
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={e =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={e =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
          </div>
        </div>
    </div>
    )
}
}

export default DrawingContainer;