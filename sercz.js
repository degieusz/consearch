var data=[

[
"filmweb.pl", 
"torrentz.com", 
"pl.wikipedia.org",
"en.wikipedia.org",
"youtube.com",
"wrzuta.pl",
"google graph",
"imdb.com",
"xhamster.com",
"pornhub.com",
"spankwire.com",
"thepiratebay.org",
"dict.pl",
"dep.pl",
"google maps en",
"google maps pl",
"allegro.pl",
"ceneo.pl",
"napisy.info",
"napisy24.pl",
"peb.pl",
"chomikuj.pl"
],


[
"/search?q=", 
"/search?f=", 
"/w/index.php?title=Specjalna:Szukaj&search=", 
"/w/index.php?title=Special:Search&search=", 
"/results?search_query=",
"/szukaj/",
"/images?q=",
"/find?s=all&q=",
"/search.php?q=",
"/video/search?search=szukaj",
"/search/straight/keyword/",
"/search/",
"/dict?word=",
"/dict?word=",
"/maps?f=q&source=s_q&hl=pl&geocode=&q=",
"/maps?f=q&source=s_q&hl=pl&geocode=&q=",
"/listing.php/search?sg=0&string=",
"dd",
"/SzukajTytulow.php?t=",
"/search.php?str=",
"/search?sourceid=chrome&ie=UTF-8&q=",
"/search?sourceid=chrome&ie=UTF-8&q="
],

[

"http://filmweb.pl", 
"http://torrentz.com",
"http://pl.wikipedia.org",
"http://en.wikipedia.org",
"http://www.youtube.com",
"http://www.wrzuta.pl",
"http://www.google.pl",
"http://imdb.com",
"http://xhamster.com",
"http://www.pornhub.com",
"http://www.spankwire.com",
"http://thepiratebay.org",
"http://www.dict.pl",
"http://www.dep.pl",
"http://maps.google.com",
"http://mapy.google.pl",
"http://allegro.pl",
"http://www.ceneo.pl",
"http://www.napisy.info",
"http://napisy24.pl",
"http://www.google.pl",
"http://www.google.pl"
],






[
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"",
"+site:peb.pl",
"+site:chomikuj.pl"
],
[]//id of context menu item

];

function customMailtoUrl() {
  if (window.localStorage == null)
    return "";
  if (window.localStorage.customMailtoUrl == null)
  //no options specified use default 
    //window.localStorage.customMailtoUrl = "filmweb";
	return "";
  return window.localStorage.customMailtoUrl;
}
//tests



//get info from options
function getLocalStorage() {
	if (window.localStorage == null) return "E0: no local storage";
	if (window.localStorage.data == null) return "E1: no data in local storage";
	return window.localStorage.data;
}
// A generic onclick callback function.
function myClick(info, tab) {
var i;

	console.log("LS:" + customMailtoUrl() );
	//console.log("item" + info.menuItemId + " was clicked and elem is");
	//console.log("info: " + JSON.stringify(info));
    //console.log("tab: " + JSON.stringify(tab));
	for(i = 0; i < data[0].length; i++) {
	    if(info.menuItemId == data[4][i]) {
		 var overall = data[2][i] + data[1][i] + info.selectionText + data[3][i];
		 chrome.tabs.create({ "url": overall});
	    }	
	}
 
}

for(i = 0 ;i < data[0].length; i++)
{
	
	var tite = data[0][i];
    var context = "selection";
    var id = chrome.contextMenus.create({"title": tite, "contexts": [context],
            "onclick": myClick});
	data[4][i] = id; //id of menu element added to db

}