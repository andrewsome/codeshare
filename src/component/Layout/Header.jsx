import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const StyledLink = styled.span`
    color:'red',
    textDecoration:'none'
`;

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to='/'><StyledLink>Home</StyledLink></Link> |
            <Link to='/about'><StyledLink>About</StyledLink></Link>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
export default Header