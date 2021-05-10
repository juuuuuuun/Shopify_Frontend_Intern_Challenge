import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Movie from './components/Movie';
import Search from './components/Search';
import WhiteBox from './components/WhiteBox';
import { ReactComponent as Loader } from './images/Loading.svg';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProgressContainer = styled.div`

`;

const TwoContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  margin: 30px auto;
`;

const MovieContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;  
  grid-gap: 10px;
`;

const MAX_NOMINATED_NUMBER = 5;
const App = () => {
  const [ isLoading, setLoading] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ movies, setMovies ] = useState([]);
  const [ btnStatuses, setBtnStatuses ] = useState([]);
  const [ moviesForNominate, setMoviesForNominate ] = useState([]);

  useEffect(() => {
    setBtnStatuses(new Array(movies.length).fill(false));
  }, [movies])
  
  const onClick = (id) => {
    if(btnStatuses.filter(e => e).length === MAX_NOMINATED_NUMBER) {
      alert("No more than 5 can be nominated!!!");
      return;
    }
    const idx = movies.findIndex(e => e.imdbID === id);
    moviesForNominate.push(movies[idx]);
    setMoviesForNominate([...moviesForNominate]);
    btnStatuses[idx] = true;
    setBtnStatuses([...btnStatuses]);
  }

  const onRemoveClick = (id) => {
    setMoviesForNominate(moviesForNominate.filter(e => e.imdbID !== id));
    const idx = movies.findIndex(e => e.imdbID === id);
    btnStatuses[idx] = false;
    setBtnStatuses([...btnStatuses]);
  }

  return (
    <Container>
      <Title>The Shoppies</Title>
      <Search setMovies={setMovies} setTitle={setTitle} setLoading={setLoading}/>
      {isLoading ? (
        <ProgressContainer><Loader /></ProgressContainer>
      ) : (
        <TwoContainer>
          <WhiteBox movies={movies} title={`Results for ${title}`}  bold>
            <MovieContainer>
              {movies.map((e, i) => <Movie key={e.imdbID} {...e} onClick={onClick} btnTitle="Nominate" disabled={btnStatuses[i]} />)}
            </MovieContainer>
          </WhiteBox>
          <WhiteBox movies={moviesForNominate} title="Nominations" bold>
            <MovieContainer>
              {moviesForNominate.map(e => <Movie key={e.imdbID} {...e} onClick={onRemoveClick} btnTitle="Remove" />)}
            </MovieContainer>
          </WhiteBox>
        </TwoContainer>
      )}
    </Container>
  )
}

export default App
