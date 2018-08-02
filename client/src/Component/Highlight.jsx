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
  };


  let overlayStyle = {
    background:averageColour,
  }

  // return (
  //   <span style = {style} onClick={props.onClick}>
  //   // <div id={highlightTitleName} style = {titleStyle}>{title}</div>
  //   // <div id={highlightDescName} style = {descStyle}>{desc}</div>
  //   // <WowButton arrID = {arrID} wow = {wow}/>
  //   </span>
  //   );


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
