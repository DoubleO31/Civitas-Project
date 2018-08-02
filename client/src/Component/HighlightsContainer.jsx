import React from "react";
import AppActions from "../Action/AppActions.js";
import Highlight from "./Highlight.jsx";
 class HighlightsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
   handleClick(obj){
    AppActions.setSelectedPhoto(obj);
    AppActions.photoViewerOn();
  }
   render(){
      // for(var i = 0; i < props.data.length; i++){
      //   var obj = data[i];
      // }
       return this.props.data.map((obj, key) =>
         <Highlight id={obj._id} source={obj.src} averageColour={obj.averageColour} link={obj.href} title={obj.title} desc={obj.desc}  wow={obj.wow} key={key} onClick={()=> this.handleClick(obj)}/>
      )
  }
}
 export default HighlightsContainer;
