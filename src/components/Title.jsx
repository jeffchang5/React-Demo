import React, { Component } from 'react';
class Title  extends Component {
  render() {
    let style = {
      block: {
        "fontFamily": "Helvetica Neue, sans-serif"
      },
      title: {
        "marginLeft": "auto",
        "marginRight": "auto",
        "width": "50%"
      },
      handle: {
        "display": "inline",
        "textDecoration": "underline"
      }
    }
    return (
      <div style= {style.block}>

      <h1 style={style.title}>
        Sentiment Analysis for @<div style={style.handle}>kjdsf</div>
      </h1>
      </div>
    );
  }

}

export default Title;
