import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import Form from './Form';
import CircularProgressComponent from './CircularProgress';
import PaginationI from './PaginationI'

  
const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const searchRecipe =  (e) => {
        e.preventDefault();
        setLoading(true)
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&ingr=15&from=0&to=100`)
        .then(res => setData(res.data))
        .catch(er => console.log(er))
        setLoading(false);
        setQuery('');
    }
    useEffect(() => {
        window.scrollTo(40, 0)
      }, [currentPage])

    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.count && data.hits.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const showList = data.count  
    ? currentPosts.map(el => el.recipe).map((el, i) => 
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
       { loading ? <CircularProgressComponent /> : <div className='card-container'>{showList}</div>}

        {showList && 
            <PaginationI 
            postPerPage={postsPerPage} 
            totalPosts={data.count > 100  ? 100 : data.count}
            paginate={paginate}
        />}
        </div>
    )
}
export default RecipeSearch
