import React from 'react'
import styled from 'styled-components'

const StyledBtn = styled.button`
    ${props => props.theme.whiteBox};
    padding: 8px;
    width: 100%;
`;

const Button = ({children, onClick, disabled}) => {
    return (
        <StyledBtn onClick={onClick} disabled={disabled}>
            {children}
        </StyledBtn>
    )
}

export default Button
