import React from "react";
import QRCode from "qrcode";
import styled, { css } from 'styled-components'
import axios from 'axios';

const QRCanvas = styled.canvas`
  background: transparent;
  border-radius: 3px;
  border: 2px solid royalblue;
  color: royalblue;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: royalblue;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
  background: papayawhip;
  height: 30vh;
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export default class QRCodeDisplay extends React.Component {
  generateQrCode = (event) => {
    var canvas = document.getElementById('canvas')
    QRCode.toCanvas(canvas, localStorage.getItem("userid"), function (error) {
      if (error) console.error(error)
      console.log('success!');
    })
  };
  componentDidMount() {
    this.generateQrCode();
  }
  render() {
    return(
      <Container>
        <p>QRCodeDisplay here.</p>
        <QRCanvas
          id="canvas"
        ></QRCanvas>
      </Container>
    );
  };
} 
