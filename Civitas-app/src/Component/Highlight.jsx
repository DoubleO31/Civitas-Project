import React from 'react';
let Highlight = function statelessFunctionComponentClass(props) {
  let source = props.source;
  let link = props.link;
  let title = props.title;
  let desc = props.desc;

  let style = {
    position: 'relative',
    width: '300px',
    height: '300px',
    background: 'blue',
    display: 'inline-block'
  };

  return (
    <button style = {style}>
    <a href={link}>
    <img src={require(`${source}`)} alt={title}/>
    </a>
    <div id="highlight1-title">{title}</div>
    <div id="highlight1-desc">{desc}</div>
    </button>
    );
};

export default Highlight;



// OLD IMPLEMENTATION BELOW
// import React from "react";
// import AppActions from '../Action/AppActions.js';

// class Highlight extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render() {
//     return (
//       <div id="highlight1">
//       <a href="#">
//       <img src={require('../1.jpg')} />
//       </a>
//       <div id="highlight1-title">title</div>
//       <div id="highlight1-desc">desc</div>
//       <button onClick={this._openPhotoViewer}>Enlarge Photo</button>
//     </div>
//     );
//   }
// }

// export default Highlight;