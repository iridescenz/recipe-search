import React, { useState } from 'react'

const FetchData = () => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [data, setData] = useState('');
  const search =  (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setLoading(true);
    const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
    const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=0&to=100&ingr=15&diet=low-carb`)
    .then(res => setData(res.data))
    .catch(er => console.log(er))
    setQuery('');
    setLoading(false);
  }
  return (
  {data}
  )
}

export default FetchData
