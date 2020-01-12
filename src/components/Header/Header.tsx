import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 1px 5px 2px;
`

const Navigation = styled.nav`
    max-width: 1100px;
    margin: auto;
    line-height: 50px;
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #ffffff;
    margin-right: 24px;
    &:last-child {
        margin-right: 0;
    }
`

const Header = () => {
    return (
        <Container>
            <Navigation>
                <StyledNavLink to="/">Movie</StyledNavLink>
                <StyledNavLink to="/tv">TV</StyledNavLink>
            </Navigation>
        </Container>
    )
}

export default Header
