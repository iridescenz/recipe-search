import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import Form from './Form'
import Card from './Card'
import CircularProgressComponent from './CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export const LowcarbRecipes = () => {
  const classes = useStyles()
  const handleChange = (event, value) => {
    setCurrentPage(value)
  }
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const [data, setData] = useState('')
  const searchLowCarbRecipe = (e) => {
    e.preventDefault()
    setCurrentPage(1)
    setLoading(true)
    const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
    const res = axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=100&ingr=15&diet=low-carb`
      )
      .then((res) => setData(res.data))
      .catch((er) => console.log(er))
    setQuery('')
    setLoading(false)
  }
  useEffect(() => {
    window.scrollTo(40, 0)
  }, [currentPage])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts =
    data.count && data.hits.slice(indexOfFirstPost, indexOfLastPost)

  const showLowCarbList = data.count
    ? currentPosts
        .map((el) => el.recipe)
        .map((el, i) => (
          <Card
            key={i}
            label={el.label}
            url={el.url}
            image={el.image}
            ingredientLines={el.ingredientLines.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          />
        ))
    : ''

  return (
    <div className='main-component'>
      <Header />
      <div
        className='container'
        style={
          data.count > 0
            ? { background: 'rgb(226, 240, 245)' }
            : { backgroundImage: `url('keto.jpg')` }
        }
      >
        <Form
          handleSubmit={searchLowCarbRecipe}
          handleChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder={`e.g. keto waffles`}
        />
        {data.count === 0 ? (
          <div className='noresult'>
            <div>No results found </div>
          </div>
        ) : (
          ''
        )}
        {loading ? (
          <CircularProgressComponent />
        ) : (
          <div className='card-container'>
            {showLowCarbList ? showLowCarbList : ''}
          </div>
        )}
        {data.count > 0 && (
          <div className={classes.root}>
            <ul className='pagination-list'>
              <Pagination
                count={data.count > 100 ? 9 : Math.round(data.count / 10)}
                page={currentPage}
                onChange={handleChange}
                size='large'
              />
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
