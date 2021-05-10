import React from 'react'
import styled from 'styled-components';

const WhiteContainer = styled.div`
    ${props => props.theme.whiteBox};
    padding: 1.5rem 1rem;
`;

const Title = styled.p`
    font-size: 1rem;
    margin-bottom: 0.3rem;
    font-weight: ${props => props.bold && '600'};
`;

const WhiteBox = ({ title, bold, children }) => {
    return (
        <WhiteContainer>
            <Title bold={bold}>{title}</Title>
            {children}
        </WhiteContainer>
    )
}

export default WhiteBox;