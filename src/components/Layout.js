import React, { useState } from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { Location } from '@reach/router'
import styled, { createGlobalStyle } from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { MdAccountCircle, MdPhonelink, MdMail } from 'react-icons/md'
import { IconContext } from 'react-icons'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: #FFF;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  align-items: center;
  justify-content: center;
  background-color: #5C404F;
  color: #FAEFC2;

  main {
    /* padding: 3rem; */
  }

  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    z-index: 10;
    padding-left: env(safe-area-inset-left);

    > div {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-width: 40rem;
      max-height: 15rem;
      -webkit-box-align: center;
      align-items: center;
      justify-content: space-around;
      -webkit-box-flex: 1;
      flex-grow: 1;
      font-family: var(--sansFont);
    }
  }

  @media (max-width: 1100px) {
    nav {
      position: fixed;
      top: auto;
      left: 0px;
      right: 0px;
      bottom: 0px;
      box-shadow: black 2px 0px 2px;
      background-color: rgba(92, 64, 79, 0.925);
      backdrop-filter: blur(15px);
    
      > div {
        flex-direction: row;
        
        a {
          width: 2ch;
          padding: 0.45rem 1.5rem;
        }
      }
    }
  }

  .link {
    position: relative;
    user-select: none;
    text-align: center;
    font-weight: bold;
    font-size: 92.5%;
    line-height: 1;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
    transition: all 100ms ease-in-out 0s;
    text-decoration: none;
    padding: 0.45rem 0.9rem;
    margin: 0.5rem 0px;
    border-radius: 10px;

    &:hover {
      color: #388889;
    }

    > div {
      display: flex;
      flex-direction: column;
      -webkit-box-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      align-items: center;

      .icon {
        display: block;
        width: 3rem;
        height: 3rem;
        filter: saturate(95%) opacity(95%);
        margin-bottom: 0.5rem;
        transition: all 100ms ease-in-out 0s;
      }

      span {
        font-size: 1.5rem;
        text-transform: uppercase;
        display: block;
        transition: all 100ms ease-in-out 0s;
      }
    }
  }
`

export default function Layout ({ children }) {
  const [path, setPath] = useState('/')

  return (
    <Container>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Matheus Boari</title>
      </Helmet>

      <Location>
        {({ _, location }) => setPath(location.pathname)}
      </Location>

      <nav>
        <div>
          <AniLink className="link" style={{color: `${path === '/' ? '#388889' : '#FAEFC2'}`}} paintDrip hex="#5C404F" to="/">
            <div>
              <IconContext.Provider value={{ className: "icon" }}>
                <MdAccountCircle />
              </IconContext.Provider>
              <span>About</span>
            </div>
          </AniLink>
          <AniLink className="link" style={{color: `${path === '/projects' ? '#388889' : '#FAEFC2'}`}} paintDrip hex="#5C404F" to="/projects">
            <div>
              <IconContext.Provider value={{ className: "icon" }}>
                <MdPhonelink />
              </IconContext.Provider>
              <span>Projects</span>
            </div>
          </AniLink>
          <AniLink className="link" style={{color: `${path === '/contact' ? '#388889' : '#FAEFC2'}`}} paintDrip hex="#5C404F" to="/contact">
            <div>
              <IconContext.Provider value={{ className: "icon" }}>
                <MdMail />
              </IconContext.Provider>
              <span>Contact</span>
            </div>
          </AniLink>
        </div>
      </nav>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
