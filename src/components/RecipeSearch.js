import React, { useState} from 'react';
import Card from './Card'
import axios from 'axios'
import Form from './Form'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  

const RecipeSearch = () => {
    const [query, setQuery] = useState('');
    const [pageData, setPageData] = useState('');
    const [data, setData] = useState('');
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const searchRecipe =  (e) => {
        e.preventDefault();
        setPageData(query)
        const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
        const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=9&ingr=15`)
        .then(res => setData(res.data))
        .catch(er => console.log(er))
        setQuery('')
    }
        const handlePageChange = (event, value) => {
          setPage(value);
          const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
          const res = axios.get(`https://api.edamam.com/search?q=${pageData}&app_id=${apiId}&from=${page > 1 ? page * 9 : page}&to=${page > 1 ? page * 9 + 9 : page + 9}&ingr=15`)
          .then(res => setData(res.data))
          .catch(er => console.log(er))
        };
        console.log(data)

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
        <div className='card-container'>{showList}</div>
        {showList && 
            <Pagination count={10} page={page} size='large' onChange={handlePageChange} />}
        </div>
    )
}
export default RecipeSearch