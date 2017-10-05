import React from 'react';

class NewsItem extends React.Component{
  

    render(){
        const bgColor = {
          backgroundColor: '#d3d3d3'
        };

        return(
            <div className='row'> 
                <div className="card" style={{marginRight:'15px', marginLeft:'15px'}}>
                    <div className="card-block w-100" style={ bgColor }>
                        <h5 className="card-title"> <strong>{this.props.articleTitle} </strong></h5>
                        <p className="card-text">{this.props.articleData}</p>
                        <a href={this.props.articleLink} className="btn btn-primary" style={ {float:'right'} }>
                        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default NewsItem;