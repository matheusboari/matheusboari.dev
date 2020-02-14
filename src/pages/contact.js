import React from 'react';
import styled from 'styled-components'
import { FaFacebookF, FaTwitter, FaTelegramPlane, FaMediumM, FaInstagram, FaLinkedinIn, FaGithubAlt, FaTwitch, FaMeetup } from 'react-icons/fa'
import { darken } from 'polished'

const Container = styled.div`
  max-width: 700px;
  
  h1 {
    font-size: 4rem;
    line-height: 6rem;
  }

  p {
    font-size: 2rem;

    > a {
      color: #388889;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: 10px 0;
    margin-top: 2rem;

    > a + a {
      margin-left: 10px;
    }
  }

  @media (max-width: 700px) {
    
  }
`;

const Button = styled.a`
  height: 47px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  padding: 5px 10px;

  cursor: pointer;
  font-size: 1.2rem;
  line-height: 2.4rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  background: ${props => props.color};
  box-shadow: 3px 4px 0 rgba(0,0,0,.25);
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${props => darken(0.1, props.color)};
  border-radius: 4px;
  transition: background 0.5s;

  &:hover {
    background: ${props => darken(0.05, props.color)};
  }

  span {
    margin-left: 10px;
  }
`;

export default function contact() {
  return (
    <>
      <Container>
        <h1>Let's talk more!</h1>

        <p>Follow my social media or send an email to <a href="mailto:matheusboari@gmail.com">matheusboari@gmail.com</a></p>

        <div>
          <Button href="https://github.com/matheusboari" target="_blank" color="#24292e">
            <FaGithubAlt size={24} />
            <span>github</span>
          </Button>

          <Button href="https://twitter.com/matheusboari" target="_blank" color="#1DA1F2">
            <FaTwitter size={24} />
            <span>twitter</span>
          </Button>

          <Button href="https://medium.com/@matheusboari" target="_blank" color="#333">
            <FaMediumM size={24} />
            <span>medium</span>
          </Button>

          <Button href="https://www.linkedin.com/in/matheusboari/" target="_blank" color="#2867B2">
            <FaLinkedinIn size={24} />
            <span>linkedin</span>
          </Button>
          
          <Button href="https://www.facebook.com/matheusboari98" target="_blank" color="#4868ad">
            <FaFacebookF size={24} />
            <span>facebook</span>
          </Button>
          
          <Button href="https://www.instagram.com/matheusboari/" target="_blank" color="#fb3958">
            <FaInstagram size={24} />
            <span>instagram</span>
          </Button>
          
          <Button href="https://t.me/matheusboari" target="_blank" color="#0088cc">
            <FaTelegramPlane size={24} />
            <span>telegram</span>
          </Button>
          
          <Button href="https://www.twitch.tv/boarii" target="_blank" color="#6441A4">
            <FaTwitch size={24} />
            <span>twitch</span>
          </Button>
          
          <Button href="https://www.meetup.com/pt-BR/members/249814127/" target="_blank" color="#e0393e">
            <FaMeetup size={24} />
            <span>meetup</span>
          </Button>
        </div>
      </Container>
    </>
  )
}
