import React from "react";
import QRCode from "qrcode";
import "react-bulma-components/dist/react-bulma-components.min.css";

import styled, { css } from "styled-components";

const QRCanvas = styled.canvas`
  background: transparent;
  color: royalblue;
  height: 1500px;

  ${(props) =>
    props.primary &&
    css`
      background: royalblue;
      color: white;
    `}
`;

// const Container = styled.div`
//   text-align: center;
//   background: papayawhip;
//   height: 100vh;
// `

export default class QRCodeDisplay extends React.Component {
  generateQrCode = (event) => {
    const canvas = document.getElementById("canvas");
    QRCode.toCanvas(canvas, "testing", function (error) {
      // QRCode.toCanvas(canvas, localStorage.getItem("userid"), function (error) {
      canvas.style.width = "500px";
      canvas.style.height = "500px";
      if (error) console.error(error);
      console.log("success!");
    });
  };
  componentDidMount() {
    this.generateQrCode();
  }
  render() {
    return (
      <div className="container">
        <p className="has-text-centered">Scan your QR code here:</p>
        <p className="has-text-centered">
          <QRCanvas id="canvas"></QRCanvas>
        </p>
      </div>
    );
  }
}
