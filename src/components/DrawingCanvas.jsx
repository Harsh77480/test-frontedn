import React, { Component } from 'react';
import { io } from 'socket.io-client';

var x;

class DrawingCanvas extends Component {
  //when we call <DrawingCanvas> object of this class is created 
  
  constructor(props) {
    super(props);
    // console.log(this.props.prop2)
    // var x = this.props.prop2;
    this.canvasRef = React.createRef(); //this is same as document.create <canvas> in html 
    this.state = {//we have a component state , for <canvas> component 
      drawing: false,  //initializing state with two variables 
      context: null,
      canvas : null,
      socket : this.props.props1,
      mc : this.props.props2,
      screenWidth: window.innerWidth,
      screenHeight : window.innerHeight

    }
    // const {socket} = this.state;
    // socket.emit("join room",{"roomCode" : "one","userData" : "user 123"});
   
    // this.handleResize = this.handleResize.bind(this);
  }
 

  componentDidMount() {// componentDidMount is a lifecycle method in React that is automatically called after the component has been added to the DOM.
    //This is the ideal place to perform tasks that require access to the DOM elements.

    
    window.addEventListener('resize', this.handleResize);
    
    const canvas = this.canvasRef.current; //this.canvasRef.current is used to access the <canvas> DOM element. 
    const context = canvas.getContext('2d');
    this.setState({ context });
    this.setState({canvas});
    
    
    
    //                  BELOW CODE IS SAME AS HTML CANVAS 
    context.lineWidth = 4;
    context.lineCap = 'round';
    context.strokeStyle = 'black';

    // Add event listeners for both mouse and touch events
    canvas.addEventListener('mousedown', this.handleMouseDown);// for mouse 
    canvas.addEventListener('mousemove', this.handleMouseMove);
    canvas.addEventListener('mouseup', this.handleMouseUp);
    
    canvas.addEventListener('touchstart', this.handleTouchStart); // for touchscreen 
    canvas.addEventListener('touchmove', this.handleTouchMove);
    canvas.addEventListener('touchend', this.handleTouchEnd);
    
    
    const {socket} = this.state;
    
    // socket.emit("join room",{"roomCode" : "test123","userData" : "user 123"});
    socket.on("game" , (data)=>{
        // console.log("d");
        let {context} = this.state;
        if(data[0] === 'R'){
          context.clearRect(0,0,canvas.width,canvas.height);
        }
    })
    
    socket.on("broadcast",(data)=>{
      this.changeCanvasSnapShot(data);
    });



  }

  handleResize = () => {
    // Update the state with the new screenWidth value
    this.setState({ screenWidth: window.innerWidth });
    this.setState({ screenHeight: window.innerHeight });
    
    // console.log(this.);
  }

// const newImageData = new ImageData(encodedData, canvas.width, canvas.height);
// context.putImageData(newImageData, 0, 0);
  
changeCanvasSnapShot =  (data) =>{
  const { context } = this.state;
  const uint8Array = new Uint8Array(data);
  const base64String = btoa(String.fromCharCode.apply(null, uint8Array));

  // console.log(base64String,'d');

  const image =  new Image();
  image.src = 'data:image/jpeg;base64,' + base64String;
  image.onload = () => {
  context.drawImage(image, 0, 0);
  };

}

handleMouseDown = (e) => {//left click 
  const { context } = this.state;
  const {canvas} = this.state;
  context.beginPath(); //start new path 
  context.lineTo(e.clientX - canvas.getBoundingClientRect().left , e.clientY - canvas.getBoundingClientRect().top );
  this.setState({ drawing: true }); //set drawing true 
} 

handleMouseMove = (e) => {
  // Mouse move event handling
  if (!this.state.drawing) return;//only run when drawing = true
  const { context } = this.state;
  const {canvas} = this.state;
  context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);//makeline along path 
  context.stroke(); //actually draw 
}

handleMouseUp = () => {
  // Mouse up event handling
  this.setState({ drawing: false }); //when user stop pressing left click dont draw on mouse move 

  const { canvas } = this.state;
  const dataURL = canvas.toDataURL('image/png');
  const binaryData = atob(dataURL.split(',')[1]);
  const length = binaryData.length;
  const binaryArray = new Uint8Array(length);
  const { mc } = this.state;
  // console.log(mc);
  for (let i = 0; i < length; i++) {
    binaryArray[i] = binaryData.charCodeAt(i);
  }    
  const {socket} = this.state;
  socket.emit("draw",{"roomCode" : mc ,"message" : binaryArray});
}



handleTouchStart = (e) => {
  // Touch start event handling
  const { context } = this.state;
  const { canvas } = this.state;

  context.beginPath();
  context.moveTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);
  this.setState({ drawing: true });
}


handleTouchMove = (e) => {
  // Touch move event handling
  if (!this.state.drawing) return;
  const { canvas } = this.state;

  const { context } = this.state;
  context.lineTo(e.touches[0].clientX - canvas.getBoundingClientRect().left, e.touches[0].clientY - canvas.getBoundingClientRect().top);
  context.stroke();
}
  

handleTouchEnd = () => {

  // Touch end event handling
  this.setState({ drawing: false });
  //canvas logic ends here 
  //send data logic 
  const { canvas } = this.state;
  const dataURL = canvas.toDataURL('image/png');
  const binaryData = atob(dataURL.split(',')[1]);
  const length = binaryData.length;
  const binaryArray = new Uint8Array(length);
  const { mc } = this.state;
  // console.log(mc);
  for (let i = 0; i < length; i++) {
    binaryArray[i] = binaryData.charCodeAt(i);
  }    
  const {socket} = this.state;
  socket.emit("draw",{"roomCode" : mc ,"message" : binaryArray});
}


  

  render() {
    const { screenWidth } = this.state;
    const {screenHeight}  =this.state;
    // console.log(screenWidth);

    return (
      

      <canvas
        className='canvas'
        ref={this.canvasRef}
        width={screenWidth/1.2}
        height={screenHeight/2}
        style={{ borderRadius : '4px', boxShadow : '0 1px 4px rgba(0, 0, 0, 0.2)' , backgroundColor : 'white'  , position : 'static' }}  
      />
      // background-color: white;
      // border-radius: 4px;
      // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

    );
  }
}

export default DrawingCanvas;
