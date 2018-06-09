import AppDispatcher from '../Dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let _counter = 0;
let _uploadWindowOpen = false;
let _photoViewerOn = true;
var bgColor = null;

function getHighlightshelper(){
	console.log("build 2018-05-25 11:57pm");
	document.getElementById("highlights-container").innerHTML = "";
	var highlightsJSON = "highlights - small test.json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        var myArr = JSON.parse(this.responseText);
		var myArrLength = myArr.length;

		// loads the current stylesheet as a variable
		var myStyle = document.styleSheets[0];


		// HTML Template to create each highlight box

		// <div id="highlightXXX">
		// <a href="#"><img src="XXX" alt="XXX" ></a>
		// <div id="highlightXXX-title">XXX</div>
		// <div id="highlight1-descXXX">XXX</div>
		// </div>


		for(let i = 0; i< myArrLength; i++){

			let img = document.createElement("img");  // For colorthief to get average color
			let idNumber = i+1;
			let src = myArr[i].src;
			let title = myArr[i].title;
			let desc = myArr[i].desc;
			let href = myArr[i].href;
			let bgRedChannel = 255;
			let bgGreenChannel = 255;
			let bgBlueChannel = 255;



			// for ColorThief creates the unique containers for each highlight
			img.src = src;

			// for listener to work, need to call function directly, or preferably using
			// an anonymous function like this. Otherwise calling fn() will cause it to run
			// immediately.
			img.addEventListener("load", function() {

			createHighlightHTML(idNumber, href, title, desc, src);
			createHighlightCSS(myStyle, idNumber, bgRedChannel, bgGreenChannel, bgBlueChannel, img);


			});

		}

    }
};
xmlhttp.open("GET", highlightsJSON, true);
xmlhttp.send();
}

function createHighlightHTML(idNumber, href, title, desc, src){

	var html = "";
	html += `<div id="highlight${idNumber}">`;
	html += `<a href="${href}"><img src="${src}" alt="${title}" ></a>`;
	html += `<div id="highlight${idNumber}-title">${title}</div>`;
	html += `<div id="highlight${idNumber}-desc">${desc}</div>`;
	html += `</div>\n`
	document.getElementById("highlights-container").insertAdjacentHTML("beforeend", html);

}





// creates the CSS rules for each highlight
function createHighlightCSS(myStyle, idNumber, bgRedChannel, bgGreenChannel, bgBlueChannel, img){
	console.log(img.width);
	var widthAndHeight = "300px";
	var titleFontSize = "1.6em";
	//var colorThief = new ColorThief(); // For colorthief to get average color
	//bgColor = colorThief.getColor(img)
	//bgRedChannel = bgColor[0];
	//bgGreenChannel = bgColor[1];
	//bgBlueChannel = bgColor[2];
	//console.log(bgColor);


	myStyle.insertRule(
	`#highlight${idNumber} {
		position: relative;
		width: ${widthAndHeight};
		height: ${widthAndHeight};
		background: rgb(${bgRedChannel},${bgGreenChannel},${bgBlueChannel});
		display: inline-block;}`
	);

	myStyle.insertRule(
	`#highlight${idNumber} img {
		position: relative;
		object-fit: cover;
		width: ${widthAndHeight};
		height: ${widthAndHeight};
		display: inline-flex;
		opacity: 0.70;
		float: left;
	}`
	);

	myStyle.insertRule(
		`#highlight${idNumber}:hover img {
		opacity: 1;
	}`
	);

	myStyle.insertRule(
	`#highlight${idNumber}-title {
		position: absolute;
		font-size: ${titleFontSize};
		background-color: rgba(255,255,255,0.5);
		width: ${widthAndHeight};
		text-align: center;
	}`
	);

	myStyle.insertRule(
	`#highlight${idNumber}-desc {
		font-size: 1.1em;
		position: absolute;
		bottom: 0px;
		background-color: rgba(255,255,255,0.8);
		width: 280px;
		text-align: left;
		padding: 5px 10px 5px 10px;
		opacity: 0;
		transition: opacity 1s;
	}`
	);

	myStyle.insertRule(
	`#highlight${idNumber}:hover #highlight${idNumber}-desc {
	opacity: 1.0;
	}`
	);



}




class Appstore extends EventEmitter {

  emitChange(){
    this.emit( CHANGE_EVENT);
  }

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback);
  }

  removeChangeListener(callback){
    this.removeListener (CHANGE_EVENT, callback);
  }

  getCounterNum(){
    return _counter;
  }

  getUploadWindowStatus() {
	return _uploadWindowOpen;
	}

	  getPhotoViewerStatus() {
  	return _photoViewerOn;
  }
}

const _appStore = new Appstore();

export default _appStore;

_appStore.dispatchToken = AppDispatcher.register( action => {
  switch ( action.actionType ){


    case 'photoViewerOn':
    _photoViewerOn = true;
    _appStore.emitChange();
    break;

    case 'photoViewerOff':
    console.log(_photoViewerOn);
    _photoViewerOn = false;
    _appStore.emitChange();
    break;

    case 'setCounter':
    _counter = action.num;
    _appStore.emitChange();
    break;

    case 'getHighlights':
    getHighlightshelper();
    _appStore.emitChange();
    break;

    case 'toggleUploadWindow':
	_uploadWindowOpen = !_uploadWindowOpen;
	_appStore.emitChange();
	break;

    default:
    break;
  }

  return true;
});
