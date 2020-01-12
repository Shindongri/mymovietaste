import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-column-gap: 24px;
    grid-row-gap: 36px;
`

const CardList: React.FC = ({ children }) => (
    <Container>
        { children }
    </Container>
)

export default CardList
