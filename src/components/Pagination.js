import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

 function PaginationControlled() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    // const pageChange =  (page) => {
    // const apiId = `a6975102&app_key=3e6a54f8480af0f1dfb6d7dc3c5cb3cd`
    // const res = axios.get(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&from=${page > 1 ? page * 9 : page}&to=${page > 1 ? page * 9 + 9 : page + 9}&ingr=15`)
    // .then(res => setData(res.data))
    // .catch(er => console.log(er))
    // }
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handlePageChange} />
    </div>
  );
}
export default  PaginationControlled