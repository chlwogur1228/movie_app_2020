import React from 'react';
import img01 from './images/1.jpg';
import img02 from './images/2.jpg';
import img03 from './images/3.jpg';
import img04 from './images/4.jpg'; 
//import Potato from './Potato';

function Food({name,picture,alt0}) {
  
  return (
    <div>
      <h2>I Love {name}</h2>
    <img src={picture} alt={alt0} />;
    </div>

  );
}

const foodLike = [
{
  id: 1,
  name: '곱창',
  image: img01,
  msg: '곰창 사진'
},
{
  id: 2,
  name: '막창',
  image: img02,
  msg: '막창 사진'
},
{
  id: 3,
  name: '닭갈비',
  image: img03,
  msg: '닭갈비 사진'
},
{
  id: 4,
  name: '삼겹살',
  image: img04,
  msg: '삼겹살 사진'
}
];
function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} alt0 = {dish.msg} />;

}
function App() {
  console.log(foodLike.map(renderFood));
return( 
<div>
     {foodLike.map(renderFood)}
</div>
  
    
   );
}

export default App;
