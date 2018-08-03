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

       return this.props.data.map((obj, key) =>
         <Highlight
           id={obj._id}
           source={obj.src}
           averageColour={obj.averageColour}
           link={obj.href}
           title={obj.title}
           desc={obj.desc}
           wow={obj.wow}
           key={key}
           latitude = {obj.latitude}
           longitude = {obj.longitude}
           onClick={()=> this.handleClick(obj)}/>
      )
  }
}
 export default HighlightsContainer;
