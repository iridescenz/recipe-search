import React, { useState} from 'react';
import Card from './Card';
import axios from 'axios';
import Form from './Form';
import CircularProgressComponent from './CircularProgress'

  
const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const searchRecipe =  (e) => {
        e.preventDefault();
        setLoading(true)
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&ingr=15&from=0&to=30`)
        .then(res => setData(res.data))
        .catch(er => console.log(er))
        setLoading(false)
        setQuery('')
    }
    const showList = data.count  
    ? data.hits.map(el => el.recipe).map((el, i) => 
        <Card key={i} 
        label={el.label}
        url={el.url} 
        image={el.image}
        ingredientLines={el.ingredientLines.map((el, i) => <li key={i} >{el}</li>)}
        />) 
        : data.count === 0 ? <div className='noresult'><div>No results found </div></div> : ''
    
    return ( 
        <div className="container" style={showList ? {background: 'rgb(226, 240, 245)'}:{backgroundImage: `url('food.jpeg')`}}>
        <Form 
            handleSubmit={searchRecipe}
            handleChange={e => setQuery(e.target.value)}
            value={query}
            placeholder={`e.g. apple pie`}
            name='recipe'
        />
       {  loading ? <CircularProgressComponent /> : <div className='card-container'>{showList}</div>}
        {/* {showList && 
            <Pagination count={data.count > 100 ? 11 : Math.round(data.count / 9)} page={page} size='large' onChange={handlePageChange} />} */}
        </div>
    )
}
export default RecipeSearch