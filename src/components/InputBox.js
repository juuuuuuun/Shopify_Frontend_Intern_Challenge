import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SearchIcon } from '../images/Search.svg';
const InputContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 0.5rem;
    ${props => props.theme.inputBox};
    & input {
        margin-left: 0.5rem;
        width: 100%;
        border: 0;
        outline: none;
    }
`;

const InputBox = ({keyword, setKeyword}) => {
    const onChange = (e) => {
        setKeyword(e.target.value);
    }
    return (
        <InputContainer>
            <SearchIcon />
            <input type="text" placeholder="Please input title for search ..." onChange={onChange} value={keyword} />
        </InputContainer>
    )
}

export default InputBox
