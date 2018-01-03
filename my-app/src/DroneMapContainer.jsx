import React from "react";
import axios from "axios";
import DroneStrikeMapComponent from "./DroneStrikeMapComponent";
import SearchOptionComponent from "./SearchOptionsComponent";

class DroneMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      strikeMapURL: 'https://www.mapquestapi.com/staticmap/v5/map?key=EdEp92R5OGt59vKraBKAC2n2lONUgG4A&size=700,500&locations=14.593117,45.040226||14.51287,44.922427||14.334986,44.930992||29.382158,65.923181||2.114609,45.150474||-0.33997,42.54606||0.474101,42.779399||3.558808,45.054424||32.904796,69.741237||14.571209,45.642549',
      strikeData: []
    };
    this.search = this.search.bind(this);
    this.findStrikesCoordByLocation = this.findStrikesCoordByLocation.bind(this);
    this.findStrikeCoordByDeathToll = this.findStrikeCoordByDeathToll.bind(this);
  }

  componentWillMount() {
      axios
      .get("https://kjb-drone-server.herokuapp.com/")
      .then(response => {
        this.setState({
          strikeData: response.data
        });
      });
  }

  findStrikesCoordByLocation(strikeData, parameter, locationValue) {
      let indexofStrikeData = 0;
      let strikeArray = [];
      let coordString = "";
      
      while (strikeArray.length < 11 && indexofStrikeData < strikeData.length ) {
        
        
        if (
          strikeData[indexofStrikeData][parameter] === locationValue &&
          strikeData[indexofStrikeData].lat !== '' &&
          strikeData[indexofStrikeData].lon !==''
        ) {
          strikeArray.push(strikeData[indexofStrikeData]);
          indexofStrikeData++;
        } 
        else {
          indexofStrikeData++;
        }
      }
      console.log(strikeArray)
      for (let strikeObj of strikeArray) {
        let lat = strikeObj.lat;
        let lon = strikeObj.lon;
        coordString += lat + "," + lon + '||';
      }

      return coordString;
    }


    findStrikeCoordByDeathToll(strikeData, minDeaths) {
      let indexofStrikeData = 0;
      let strikeArray = [];
      let coordString = "";

      while (strikeArray.length < 11 && indexofStrikeData < strikeData.length ) {
        if (
          parseInt(strikeData[indexofStrikeData].deaths_min) >= minDeaths &&
          strikeData[indexofStrikeData].lat !== '' &&
          strikeData[indexofStrikeData].lon !==''
        ) {
          strikeArray.push(strikeData[indexofStrikeData]);
          indexofStrikeData++;
        } else {
          indexofStrikeData++;
        }
      }
      console.log(strikeArray);
      for (let strikeObj of strikeArray) {
        let lat = strikeObj.lat;
        let lon = strikeObj.lon;
        coordString += lat + "," + lon + '||';
      }

      return coordString;
    }

  search(param, value) {
  
    let coordString = "";
    let property = null;

    if (param === "Country") {
      property = "country";
    }
    if (param === "Town") {
      property = "town";
    }
    if (param === "Minimum Death Toll") {
      property = "death_min";
    }

    if (param === "Country" || param === "Town") {
      coordString = this.findStrikesCoordByLocation(this.state.strikeData, property, value);
    } else {
      
      coordString = this.findStrikeCoordByDeathToll(this.state.strikeData, value);
    }

    this.setState({
      strikeMapURL:
        "https://www.mapquestapi.com/staticmap/v5/map?key=EdEp92R5OGt59vKraBKAC2n2lONUgG4A&size=700,500&locations=" +
        coordString
    });
  }

  render() {
    return (
      <div className="container" style={{ padding: "10px" }}>
        <div className="row">
          <DroneStrikeMapComponent mapURL={this.state.strikeMapURL} />
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <SearchOptionComponent search={this.search} />
        </div>
      </div>
    );
  }
}

export default DroneMapContainer;
