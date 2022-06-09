import React, { Component } from 'react';
import CanvasDraw from 'react-canvas-draw';

class DrawingContainer extends Component {
    constructor(props) {
    super(props);
    this.state = {
        color: "red",
        brushRadius: 10,
        lazyRadius: 12,
      };
    this.fetchDrawings = this.fetchDrawings.bind(this);
    this.saveDrawing = this.saveDrawing.bind(this);
    this.deleteDrawing = this.deleteDrawing.bind(this);
    }
    
    async fetchDrawings() { //async and return
        // fetch('/drawing')
        //     .then(response => response.json())
        //     .then(data => console.log('testing to get drawing', data[data.length - 1].drawingStored))
        const response = await fetch('/drawing')
        const data = await response.json();
        return data[data.length - 1].drawingStored;
    }

    saveDrawing() {
        fetch('/drawing', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                "Access-Control-Origin": "*"
            },
            body: JSON.stringify({
                drawingStored: this.drawingCanvas.getSaveData(),
            })
        }).then(response => response.json())
        .then((data) => console.log(data))
    }

    deleteDrawing() {
      fetch('/drawing', {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json',
              "Access-Control-Origin": "*"
          }
      }).then(response => response.json())
      .then((data) => console.log(data))
  }


    render() {
    
    return ( 
        <div id="drawing-container">
        <CanvasDraw
        ref={canvasDrawing => (this.drawingCanvas = canvasDrawing)}
        brushColor={this.state.color}
        brushRadius={this.state.brushRadius}
        lazyRadius={this.state.lazyRadius}
        loadTimeOffset={20}
        clampLinesToDocument
        hideGrid
        backgroundColor='transparent'
        canvasHeight='800'
        canvasWidth='1200'
    />
    <div className='drawing-buttons'>
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
            //   localStorage.setItem(
            //     "savedDrawing",
            //     this.drawingCanvas.getSaveData()
            //   );
            this.saveDrawing();
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.deleteDrawing();
            }}
          >
            Delete Last Saved Drawing
          </button>
          <button
          id='push-this'
          onClick={() => {
            // this.drawingCanvas.loadSaveData(
            //   localStorage.getItem("savedDrawing")
            // );
            const someUnresolvedPromiseContainingADrawing = this.fetchDrawings();
           someUnresolvedPromiseContainingADrawing.then((result) => this.drawingCanvas.loadSaveData(result));
          }}
        >
          Load your previously saved drawing!
        </button>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.brushRadius}
              onChange={e =>
                this.setState({ brushRadius: parseInt(e.target.value, 10) })
              }
            />
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.lazyRadius}
              onChange={e =>
                this.setState({ lazyRadius: parseInt(e.target.value, 10) })
              }
            />
            <label>Color:</label>
            <input
              type="text"
              value={this.state.color}
              onChange={e =>
                this.setState({ color: String(e.target.value) })
              }
            />
        </div>
    </div>
    )
}
}

export default DrawingContainer;