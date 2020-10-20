import React from 'react';
import PropTypes from 'prop-types';
import img01 from './images/1.jpg';
import img02 from './images/2.jpg';
import img03 from './images/3.jpg';
import img04 from './images/4.jpg'; 

function Food({name,picture,alt0, rating}) {
  
  return (
    <div>
      <h2>I Love {name}</h2>
      <h3>{rating}/5.0</h3>
    <img src={picture} alt={alt0} />;
    </div>

  );
}

const foodLike = [
{
  id: 1,
  name: '곱창',
  image: img01,
  msg: '곰창 사진',
  rating : 5,
},
{
  id: 2,
  name: '막창',
  image: img02,
  msg: '막창 사진',
  rating : 4,
},
{
  id: 3,
  name: '닭갈비',
  image: img03,
  msg: '닭갈비 사진',
  rating : 4,
},
{
  id: 4,
  name: '삼겹살',
  image: img04,
  msg: '삼겹살 사진',
  rating : 3,
}
];
function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} alt0 = {dish.msg} ratin={dish.rating}/>;

}
function App() {
  console.log(foodLike.map(renderFood));
return( 
<div>
     {foodLike.map(renderFood)}
</div>
  
    
   );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  alt0 : PropTypes.string.isRequired,
  rating : PropTypes.number
}

export default App;
