import React from 'react';
import WowButton from './WowButton.jsx';

let Highlight = function statelessFunctionComponentClass(props) {
  let source = props.source;
  let link = props.link;
  let title = props.title;
  let desc = props.desc;
  let arrID = props.arrID;
  let wow = props.wow;

  let style = {
    background: `url(${source})`,
    // position: 'relative',
    // width: '400px',
    // height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // display: 'inline-flex',
    // padding: '0px 0px 0px 0px',
    // margin: '5px 5px 5px 5px',
  };

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


  // return (
  //   <span style = {style} onClick={props.onClick}>
  //   // <div id={highlightTitleName} style = {titleStyle}>{title}</div>
  //   // <div id={highlightDescName} style = {descStyle}>{desc}</div>
  //   // <WowButton arrID = {arrID} wow = {wow}/>
  //   </span>
  //   );


return(
<span class="highlight" style={style} onClick={props.onClick}>
   <div class="highlight_overlay">
   <p>Hello</p>
   </div>
</span>
)


};

export default Highlight;
