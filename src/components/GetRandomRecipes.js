import React, { useState } from "react";
import axios from "axios"
import Card from './Card'

  function GetRandomRecipes(){
    const [randomData, setRandomData] = useState('');
    const getResults =  (e) => {
      e.preventDefault();
      const apiKey = `1a9c47442e0b4afb8a9feb3c51a49e09`
      axios.get(`https://api.spoonacular.com/recipes/random?&apiKey=${apiKey}&number=100`)
      .then(res => setRandomData(res.data))
      .catch(er => console.log(er))
    }


    console.log(randomData)
  let elem =
    randomData &&
    randomData.recipes.map((el) => (
      <Card key={el.id} id={el.id} title={el.title} image={el.image} />
    ));
  
    return (
        <>
        <form className="form" onSubmit={getResults}>
            <button className="button" type="submit" onClick={() => setRandomData}>Get random recipes</button>
        </form>
    <div className='card-container'>{elem}</div> 
        </>
    )
}
export default GetRandomRecipes