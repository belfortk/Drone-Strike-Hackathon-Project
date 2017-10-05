import React from "react";

class SearchOptionsCompnent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      parameter: 'Country',
      searchValue:''

    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleParamChange = this.handleParamChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleParamChange(e){
   const param = e.target.value;
   this.setState({
     parameter: param
   })
  }

  handleSearchChange(e){
    const value = e.target.value;
    this.setState({
      searchValue: value
    })
  }

  search(e){
    e.preventDefault();
    console.log(this.state.parameter);
    console.log(this.state.searchValue);
    this.props.search(this.state.parameter, this.state.searchValue);
  }

  render() {
    const textColor = {
      color: "#ffffff"
    };
    return (
      <div className="form-inline">
      <label htmlFor="inlineFormInputGroup" style={ textColor }>Find US Drone Strikes By </label>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0" style={{marginLeft:'10px'}}>
          <select className="col-md-12" id="search-type " onChange= { this.handleParamChange }>
            <option value="Country">Country</option>
            <option value="Town">Town</option>
            <option value="Minimum Death Toll">Minimum Death Toll</option>
          </select>
        </div>
        
        <label htmlFor="inlineFormInput" style={ textColor }>Search</label>
        <input type="text"
        onChange= { this.handleSearchChange }
        className="form-control mb-2 mr-sm-2 mb-sm-0"
        id="inlineFormInput"
        placeholder="Somalia"
        style={{marginLeft:'10px'}}
        />
        <button
        onClick={ this.search }
        type="submit"
        className="btn btn-primary"
        >Submit
        </button>
      </div>

    );
  }
}

export default SearchOptionsCompnent;
