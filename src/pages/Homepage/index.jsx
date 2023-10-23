import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const linkStyle = {
        color : "#FF731D"
    }
  return (
        <>
            <h1>Home Page</h1>
            <span>All about the smaller screen</span>
            <ul>
                <li>
                    <Link to="/shows" style={linkStyle}>Explore Shows</Link>
                </li>
                <li>
                    <Link to="/search"  style={linkStyle}>Search your favourite show</Link>
                </li>
            </ul>
        </>
    )
}
