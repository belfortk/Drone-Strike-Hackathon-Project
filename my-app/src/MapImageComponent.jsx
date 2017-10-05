import React from 'react';

class MapImageComponent extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <img
            src={ this.props.strikeMapURL }
            alt= {'map goes here'}/>
        );
    }
}

export default MapImageComponent;