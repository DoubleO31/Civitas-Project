import React from 'react';
import WowButton from './WowButton.jsx';

let Highlight = function statelessFunctionComponentClass(props) {
  let source = props.source;
  let link = props.link;
  let title = props.title;
  let desc = props.desc;
  let count = props.count;

  let style = {
    position: 'relative',
    width: '400px',
    height: '400px',
    background: `url(${source})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'inline-flex',
    padding: '0px 0px 0px 0px',
    margin: '5px 5px 5px 5px',
    /**
      try to implement the hover functionality to show description.
      may generate external css sheet, or figure out some how 
      generate it in-line style. So far does not work. 
    **/
    ":hover": {
      cursor: "pointer",
      backgroundColor: "rgb(255,0,0)",
      color: "rgb(255,0,0)"
    }
  };

  let picStyle = {
    position: 'center',
    width: '400px',
    height: '400px',
    alignItems: 'center',
    justifyContent: 'center'
  }

  let titleStyle = {
    position: 'absolute',
    fontSize:'2em',
    background: 'grey',
    textAlign: 'center',
    top: '5px',
    width: '400px'
  }

  let descStyle = {
    fontSize: '1.1em',
    position: 'absolute',
    bottom: '0px',
    backgroundColor: 'grey',

  }

  let highlightTitleName = source + title + "title";
  let highlightDescName = source + title + "desc";


  return (
    <div style = {style} onClick={props.onClick}>
    <div id={highlightTitleName} style = {titleStyle}>{title}</div>
    <div id={highlightDescName} style = {descStyle}>{desc}</div>
    <WowButton className={source} source={source}/>
    </div>
    );
};

export default Highlight;