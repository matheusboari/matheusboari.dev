import React, { useState } from "react"
import styled from 'styled-components'
import { darken } from 'polished'
import posed from 'react-pose';

import kronome from '../images/kronome.png'
import gobarberweb from '../images/gobarberweb.png'
import gobarbermobile from '../images/gobarbermobile.png'
import lithaorders from '../images/lithaorders.png'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #5C404F;
  padding: 4.2rem 3rem;

  > div {
    display: block;
    margin: 0 auto;
  }
`;

const Projects = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  height: 100%;
  margin-bottom: 30px;
  max-width: 960px;

  > a {
    width: 48%;

    margin-bottom: 2rem;
    cursor: pointer;

    &:hover {
      .mobile {
        object-position: 50% 100%;
      }
    }

    > div {
      position: relative;

      .overlay {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.16);

        width: 100%;
        height: 100%;
        position: absolute;
      }
    }

    img {
      width: 100%;
      height: 200px;
      
      object-fit: cover;
      object-position: 50% 50%;
      object-position: 0 0;
      box-shadow: 8px 8px 0 rgba(0,0,0,.15);
      transition: opacity .2s, object-position ease 10s;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 4rem;
      color: #388889;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
    }
  }

  .box {
    width: 100px;
    height: 100px;
    background: #388889;
    transform-origin: 50% 50%;
  }

  @media (max-width: 600px) {
    > a {
      width: 100%;
    }
  }
  
`;

const Header = styled.div`
  width: 100%;
  height: 30px;

  background: #C2CBCE;
  color: #388889;
  padding: 5px 10px;
  text-align: center;

  > span {
    font-size: 1.5rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 100px;
    margin-bottom: 10px;

    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: ${darken(0.05, '#388889')};
    border-radius: 4px;

    padding: 6px 10px;
    background-color: #388889;
    box-shadow: 1px 1px 0 rgba(0,0,0,.25);

    font-size: 1.2rem;
    color: #FAEFC2;
    font-weight: bold;
    text-transform: uppercase;
  }

  > div + div {
    margin-left: 10px;
  }
`;

const Description = styled.header`
  width: 100%;
  margin-bottom: 3rem;

  > h1 {
    font-size: 3rem;
    line-height: 5rem;
  }

  > p {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Overlay = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1, delayChildren: 200, staggerChildren: 50 },
});

const Tag = posed.div({
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 100,
      ease: 'circIn'
    }
  },
})

export default function SecondPage() {
  const [kronomeBool, setKronomeBool] = useState(false);
  const [lithaOrders, setLithaOrders] = useState(false);
  const [goBarberWeb, setGoBarberWeb] = useState(false);
  const [goBarberMobile, setGoBarberMobile] = useState(false);

  return (
    <Container>
      <div>
        <Description>
          <h1>Web development portfolio</h1>
          <p>My focus is on front-end development, but in my projects, I work with back-end and DBA.</p>
          <p>Check out bellow</p>
        </Description>

        <Projects>
          <a onMouseEnter={() => setKronomeBool(true)} onMouseLeave={() => setKronomeBool(false)} href="https://kronome.com/" target="_blank">
            <Header>
              <span>Kronome</span>
            </Header>
            <div>
              <Overlay className="overlay" pose={kronomeBool ? 'visible' : 'hidden'}>
                <Tags>
                  <Tag className="tag">
                    <span>Webapp</span>
                  </Tag>
                  <Tag className="tag">
                    <span>HTML5</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Vue.js</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Vuex</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Express.js</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Socket.io</span>
                  </Tag>
                  <Tag className="tag">
                    <span>MongoDB</span>
                  </Tag>
                </Tags>
              </Overlay>
              <img src={kronome} alt="random"/>
            </div>
          </a>

          <a onMouseEnter={() => setLithaOrders(true)} onMouseLeave={() => setLithaOrders(false)} href="#" target="_blank">
            <Header>
              <span>Litha Orders</span>
            </Header>
            <div>
              <Overlay className="overlay" pose={lithaOrders ? 'visible' : 'hidden'}>
                <Tags>
                  <Tag className="tag">
                    <span>Webapp</span>
                  </Tag>
                  <Tag className="tag">
                    <span>HTML5</span>
                  </Tag>
                  <Tag className="tag">
                    <span>React</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Redux</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Express.js</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Redis</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Postgres</span>
                  </Tag>
                </Tags>
              </Overlay>
              <img src={lithaorders} alt="random"/>
            </div>
          </a>

          <a onMouseEnter={() => setGoBarberWeb(true)} onMouseLeave={() => setGoBarberWeb(false)} href="https://github.com/matheusboari/gobarber-web" target="_blank">
            <Header>
              <span>GoBarber Web</span>
            </Header>
            <div>
              <Overlay className="overlay" pose={goBarberWeb ? 'visible' : 'hidden'}>
                <Tags>
                  <Tag className="tag">
                    <span>Webapp</span>
                  </Tag>
                  <Tag className="tag">
                    <span>HTML5</span>
                  </Tag>
                  <Tag className="tag">
                    <span>React</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Redux</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Express.js</span>
                  </Tag>
                  <Tag className="tag">
                    <span>MongoDB</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Postgres</span>
                  </Tag>
                </Tags>
              </Overlay>
              <img src={gobarberweb} alt="random"/>
            </div>
          </a>

          <a onMouseEnter={() => setGoBarberMobile(true)} onMouseLeave={() => setGoBarberMobile(false)} href="https://github.com/matheusboari/gobarber-mobile" target="_blank">
            <Header>
              <span>GoBarber Mobile</span>
            </Header>
            <div>
              <Overlay className="overlay" pose={goBarberMobile ? 'visible' : 'hidden'}>
                <Tags>
                  <Tag className="tag">
                    <span>Webapp</span>
                  </Tag>
                  <Tag className="tag">
                    <span>HTML5</span>
                  </Tag>
                  <Tag className="tag">
                    <span>React Native</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Redux</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Express.js</span>
                  </Tag>
                  <Tag className="tag">
                    <span>MongoDB</span>
                  </Tag>
                  <Tag className="tag">
                    <span>Postgres</span>
                  </Tag>
                </Tags>
              </Overlay>
              <img className="mobile" src={gobarbermobile} alt="random"/>
            </div>
          </a>
        </Projects>
      </div>
    </Container>
  )
}
