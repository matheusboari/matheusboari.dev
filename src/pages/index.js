import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const Container = styled.div`
  display: flex;
  max-width: 960px;
  overflow: hidden;

  @media (max-width: 660px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Img = styled.img`
  width: 200px;
  object-fit: cover;
  margin-right: 1.5em;

  @media (max-width: 660px) {
    border-radius: 50%;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;

  h1 {
    font-size: 4.8rem;
    margin: 0.4em 0px 0.67em;
  }

  p {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    strong {
      color: #388889;
    }
    
  }
  
  a {
    color: #388889;
    text-decoration: underline #388889;
  }

  @media (max-width: 660px) {
    font-size: 1.75rem;

    h1 {
      font-size: 3rem;
    }
  }
`;


export default function AboutMe() {
  return (
    <Layout>
      <Container>
        <Img src={'https://avatars2.githubusercontent.com/u/32587264?s=460&v=4'} />
        <About>
          <h1>Hi, I'm Matheus!</h1>

          <div>
            <p>My name's <strong>Matheus Boari</strong>. I'm Full Stack Developer and React evangelistic.</p>
            <p>Living in Angus/ON 🇨🇦, writing for <strong><a href="https://medium.com/@matheusboari" target="__blank">Medium</a></strong> and here soon.</p>
            <span>For more details, see my <strong><a href="">ré­sumé</a></strong>.</span>
          </div>
        </About>
      </Container>
    </Layout>
  )
}
