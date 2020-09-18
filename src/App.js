import React from 'react';
//import Potato from './Potato';

function Food({fav}) {
  
  return (
    <h3>I Love {fav}</h3>
  )
}

function App() {
  //return <div className="App" />;
 return( 
 <div>

   <h1>hello</h1>
  <Food fav="김치"/>
  <Food fav="김치만두"/>
  <Food fav="김치찌개"/>
  <Food fav="김치볶음밥"/>
  <Food fav="김치전"/>
   </div>
   );
}

export default App;
