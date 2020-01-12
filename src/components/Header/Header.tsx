import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.header`
`

const Navigation = styled.nav``

const Header = () => {
    return (
        <Container>
            <Navigation>
                <NavLink to="/">HOME</NavLink>
            </Navigation>
        </Container>
    )
}

export default Header
