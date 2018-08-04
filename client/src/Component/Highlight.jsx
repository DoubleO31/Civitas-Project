import React from 'react';
import WowButton from './WowButton.jsx';

let Highlight = function statelessFunctionComponentClass(props) {

  let source = props.source;
  let link = props.link;
  let title = props.title;
  let desc = props.desc;
  let arrID = props.arrID;
  let wow = props.wow;
  let averageColour = props.averageColour;

  let highlightStyle = {
    background: `url(${source})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  var bgColour = "rgba(" + averageColour[0] + ", " + averageColour[1] + ", " + averageColour[2] + ', 0.8)';
  var luminance = 0.299 * averageColour[0] + 0.587 * averageColour[1] + 0.114 * averageColour[2];
  // console.log("averageColour brightness:");
  // console.log(luminance);
  var fontColor = (luminance > 160) ? '#020202' : '#FAFAFA';
  // console.log("fontColor:");
  // console.log(fontColor);

  let overlayStyle = {
    background: bgColour,
    color: fontColor,
  }


  return(
  <span class="highlight" style={highlightStyle} onClick={props.onClick}>
     <div class="highlight_overlay" style={overlayStyle}>
       <h3 class="overlay_title">{title}</h3>
       <p class="overlay_description">{desc}</p>
     </div>
     <WowButton arrId={arrID} wow={wow}/>
  </span>
  )

};

export default Highlight;
