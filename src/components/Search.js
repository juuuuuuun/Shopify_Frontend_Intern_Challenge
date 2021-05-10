import React, { useState } from 'react'
import InputBox from './InputBox';
import WhiteBox from './WhiteBox'

const Search = ({ setMovies, setTitle, setLoading }) => {
    const { REACT_APP_API_URL} = process.env;
    const [ keyword, setKeyword ] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        fetch(`${REACT_APP_API_URL}${keyword}`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setLoading(false);
                setTitle(keyword);
                setMovies(res.Search)
            });
    }
    return (
        <WhiteBox title="Movie title">
            <form onSubmit={onSubmit}>
                <InputBox keyword={keyword} setKeyword={setKeyword} />
            </form>
        </WhiteBox>
    )
}

export default Search
