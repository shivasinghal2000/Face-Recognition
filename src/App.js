import React, { Component } from "react";
import './App.css'
import Navigation from './components/Navigation/Navigation'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import Clarifai, { COLOR_MODEL } from 'clarifai' // used for api of face detection 

const app = new Clarifai.App({
  apiKey: "fc0b7753dff14a6f96ad1eab0b461172",
});

const particlesOption = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  line_linked: {
    enable_auto: true,
    distance: 150,
    // color: #ffffff,
    opacity: 0.23,
    width: 0.9
  }
}

class App extends Component {
  constructor(){
    super();
    this.state= {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin' //route maintains that from which page app will start
    }
  }
  
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image= document.getElementById('inputimage');
    const width= Number(image.width);
    const height= Number(image.height);
    // console.log(width,height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row *height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
  
  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }
  
  onInputChange = (event) => {
    // console.log(event.target.value)
    this.setState({ input: event.target.value })
  }
  
  onButtonSubmit = () => {
    console.log('click')
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch((err) => console.log(err));
  }
  
  onRouteChange = (route) => {
    this.setState({route: route})
  }
  
  render () {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        { 
         (this.state.route == 'signin' )  
            ? <Signin onRouteChange={this.onRouteChange} />
            : (this.state.route == 'signup')
            ? <Signup onRouteChange={this.onRouteChange} />
            : <div>
                <Navigation onRouteChange={this.onRouteChange} />
                <Logo />
                <Rank />
                <ImageLinkForm
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition
                  box={this.state.box}
                  imageUrl={this.state.imageUrl}
                />
              </div>
        }
      </div>
    );
  }
}

export default App
