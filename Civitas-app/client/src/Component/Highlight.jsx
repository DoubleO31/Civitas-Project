import React from 'react';
let Highlight = function statelessFunctionComponentClass(props) {
  let source = (props.source);
  let link = props.link;
  let title = props.title;
  let desc = props.desc;

  let style = {
    position: 'relative',
    width: '400px',
    height: '400px',
    background: 'white',
    display: 'inline-block'
  };



  return (
    <button style = {style} onClick={props.onClick}>
    <a href={link}>
    <img src={source} alt={title} style= {style}/>
    </a>
    <div id="highlight1-title">{title}</div>
    <div id="highlight1-desc">{desc}</div>
    </button>
    );
};

export default Highlight;