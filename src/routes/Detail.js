import React from 'react';
import './Detail.css';
import PropTypes from 'prop-types';

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {

        
        return (
    
            <div className="about__container">
           <span>{location.state.title } </span> 
          <img src={location.state.poster} />
            </div>
           
            
        );
        
        } else {
            return null;
        }
    }
}

Detail.propTypes = {

    poster: PropTypes.string.isRequired,

};

export default Detail;