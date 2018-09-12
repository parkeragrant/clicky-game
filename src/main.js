import React, { Component } from 'react';
import './App.css';
import dogs from './dogs.json';
import DogImgs from './components/DogImgs';

var dogImageStyle = {
  height: "175px",
  width: "auto"
}

class App extends Component {

  state = {
    dogs,
    currentScore: 0,
    highScore: 0
  }

  handleClick = (id) => {
    console.log("this has been clicked");
    console.log(this.state);
    console.log(id);
    var shuffledDogs = this.shuffleDogs(this.state.dogs)
    console.log(shuffledDogs);
    this.findAndUpdateDogs(shuffledDogs, id)
  }

  shuffleDogs = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  findAndUpdateDogs = (array, dogId) => {
    console.log(dogId);
    var updatedDogs = [];
    var doubbleClicked = false;

    for (var i = 0; i < array.length; i++) {
      if (array[i].id === dogId) {
        if (array[i].clicked === false) {
          array[i].clicked = true
          updatedDogs.push(array[i])
        } else {
          doubbleClicked = true;
          updatedDogs.push(array[i])
        }
      } else {
        updatedDogs.push(array[i])
      }
    }
    console.log(updatedDogs);
    if (doubbleClicked === false) {
      this.setState({
        dogs: updatedDogs,
        currentScore: ++this.state.currentScore
      });
    } else {
      this.setState({
        dogs: [{
          "id": 1,
          "name": "Golden",
          "image": "./images/golden.png",
          "clicked": false
        },
        {
          "id": 2,
          "name": "Basset",
          "image": "./images/basset.png",
          "clicked": false
        },
        {
          "id": 3,
          "name": "Lab",
          "image": "./images/lab.png",
          "clicked": false
        },
        {
          "id": 4,
          "name": "Chihuahua",
          "image": "./images/chihuahua.png",
          "clicked": false
        },
        {
          "id": 5,
          "name": "Beagle",
          "image": "./images/beagle.png",
          "clicked": false
        },
        {
          "id": 6,
          "name": "Poodle",
          "image": "./images/poodle.png",
          "clicked": false
        },
        {
          "id": 7,
          "name": "Boxer",
          "image": "./images/boxer.png",
          "clicked": false
        },
        {
          "id": 8,
          "name": "GreatDane",
          "image": "./images/greatdane.png",
          "clicked": false
        },
        {
          "id": 9,
          "name": "Husky",
          "image": "./images/husky.png",
          "clicked": false
        },
        {
          "id": 10,
          "name": "Dobermann",
          "image": "./images/dobermann.png",
          "clicked": false
        },
        {
          "id": 11,
          "name": "Bulldog",
          "image": "./images/bulldog.png",
          "clicked": false
        },
        {
          "id": 12,
          "name": "Mutt",
          "image": "./images/mutt.png",
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
          {this.state.dogs.map((dog) => {
            return (
              <DogImgs key={dog.id} dogStyles={dogImageStyle} handleClick={this.handleClick} dogImg={dog.image} id={dog.id} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;


