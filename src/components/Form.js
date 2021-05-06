import React from 'react';
import { GoSearch } from 'react-icons/go';

const Form = ({ handleSubmit, handleChange, value, placeholder, weight }) => {
	return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='icon'>
        <GoSearch />
      </div>
      <input
        className='input'
        type='text'
        name='query'
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />

      {weight && (
        <input
          className='input'
          type='text'
          name='weight'
          placeholder={"enter weight"}
        />
      )}
      <button className='button' type='submit'>
        Search
      </button>
    </form>
  );
}
export default Form;