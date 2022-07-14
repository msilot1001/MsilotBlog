import * as React from 'react';
import styled from 'styled-components';

const Head = styled.div`
  padding: 20px;
  width: 100%;
  background: #000000;
  color: #FFFFFF;
  border-radius: 1em;
  display: flex;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: 10px;
`;

const NavItems = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 10px;
  align: center;
`;

const NavText = styled.div`
  font-size: 1.2em;
  font-family: sans-serif;
  font-weight: bold;
  text-align: left;
`;

const NavImage = styled.img`
width: 2em;
height: 2em;
background: white;
margin-left: 10px;
`;

export default function MainPage() {
  return (
    <div>
      <Head>
        <NavText>마실롯의 블로그</NavText>
        <NavItems>
          <a href="https://github.com/msilot1001" target="_blank">
            <NavImage src="https://cdn-icons-png.flaticon.com/512/1051/1051326.png"></NavImage>
          </a>
        </NavItems>
      </Head>
      <div>Writing List</div>
      <a href="https://www.flaticon.com/free-icons/github" title="github icons">
        Github icons created by Freepik - Flaticon
      </a>
    </div>
  );
}
