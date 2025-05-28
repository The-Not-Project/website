import styled from 'styled-components';

export const ContactContainer = styled.main`
    display: block;
    padding: 80px;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    gap: 100px;

    @media (max-width: 850px) {
        padding: 20px;
        gap: 50px;
        margin-block: 20px;
    }
    
`