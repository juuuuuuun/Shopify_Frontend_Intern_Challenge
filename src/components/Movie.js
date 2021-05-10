import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const Container = styled.div`
    position: relative;
    width: 100%;
`;

const Image = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const Description = styled.div`
    width: 100%;
    height: 50px;
`;

const Movie = ({imdbID, Title, Year, Poster, onClick, btnTitle, disabled}) => {
    return (
        <Container>
            <Image src={Poster} />        
            <Description>{Title} ({Year})</Description>
            <Button onClick={() => onClick(imdbID)} disabled={disabled}>{btnTitle}</Button>
        </Container>
    )
}

export default Movie;
