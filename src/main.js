import React, { Component } from 'react';
import './App.css';
import cars from './cars.json';
import CarImgs from './components/CarImgs';

var carImgStyle = {
  height: "100px",
  width: "auto"
}

class App extends Component {

  state = {
    cars,
    currentScore: 0,
    highScore: 0
  }

  handleClick = (id) => {
    console.log("this has been clicked");
    console.log(this.state);
    console.log(id);
    var shuffledCars = this.shuffleCars(this.state.cars)
    console.log(shuffledCars);
    this.findAndUpdateCars(shuffledCars, id)
  }

  shuffleCars = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  findAndUpdateCars = (array, carId) => {
    console.log(carId);
    var updatedCars = [];
    var doubbleClicked = false;

    for(var i = 0; i < array.length; i++){
      if (array[i].id === carId) {
        if (array[i].clicked === false) {
          array[i].clicked = true
          updatedCars.push(array[i])
        } else {
          doubbleClicked = true;
          updatedCars.push(array[i])
        }
      } else {
        updatedCars.push(array[i])
      }
    }
    console.log(updatedCars);
    if (doubbleClicked === false) {
      this.setState({
        cars: updatedCars,
        currentScore: ++this.state.currentScore
      });
    } else {
      this.setState({
        cars: [{
            "id": 1,
            "name": "Chevy",
            "image": "./images/chevy.png",
            "clicked": false
          },
          {
            "id": 2,
            "name": "Audi",
            "image": "./images/Audi.png",
            "clicked": false
          },
          {
            "id": 3,
            "name": "Dodge",
            "image": "./images/Dodge.png",
            "clicked": false
          },
          {
            "id": 4,
            "name": "ford",
            "image": "./images/ford.png",
            "clicked": false
          },
          {
            "id": 5,
            "name": "Jag",
            "image": "./images/Jag.png",
            "clicked": false
          },
          {
            "id": 6,
            "name": "jeep",
            "image": "./images/jeep.png",
            "clicked": false
          },
          {
            "id": 7,
            "name": "KIA",
            "image": "./images/KIA.png",
            "clicked": false
          },
          {
            "id": 8,
            "name": "LandRover",
            "image": "./images/LandRover.png",
            "clicked": false
          },
          {
            "id": 9,
            "name": "mazda",
            "image": "./images/mazda.png",
            "clicked": false
          },
          {
            "id": 10,
            "name": "mer",
            "image": "./images/mer.png",
            "clicked": false
          },
          {
            "id": 11,
            "name": "Nissan",
            "image": "./images/Nissan.png",
            "clicked": false
          },
          {
            "id": 12,
            "name": "S",
            "image": "./images/s.png",
            "clicked": false
          }

        ],
        currentScore: 0
      });
    }

  }

  render() {
    return (
      <div >
       <div className="jumbotron jumbotron-fluid ">
          <div className="container">
            <h1 className="display-4">React Memory Game</h1>
            <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        currentScore: {this.state.currentScore} highScore: {this.state.highScore}
          </div>
        </div>
        <div className="row ">
        {this.state.cars.map((car)=>{
          return (
            <CarImgs key={car.id} carStyles={carImgStyle} handleClick={this.handleClick} carImg={car.image} id={car.id}/>
          )
        })}
        </div>
      </div>
    );
  }
}

export default App;


