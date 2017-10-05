import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsItemsContainer from "./NewsItemContainer";
import DroneMapContainer from './DroneMapContainer';



class App extends Component {
  render() {
    return (
      <div className="container" style={{padding:'5px'}}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center" style={{ margin: "20px", color:'#ffffff' }}>
              Last 10 US Drone Strikes
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
              <DroneMapContainer /> 
          </div>
          <div className="col-md-4">
            <div className='card'>
              {<NewsItemsContainer />}
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
