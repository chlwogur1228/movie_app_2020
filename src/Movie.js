import React from 'React';
import PropTypes from 'prop-types';



function Movie({id, title, year, sumary, poster}) {
    return <h1>{title}</h1>
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    yesr : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    sumary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
};

export default Movie;


