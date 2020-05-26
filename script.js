// to edit
// https://jsonblob.com/f29cbd66-9e97-11ea-84c9-ab1fdb2d56a5
// to fetch
// https://jsonblob.com/api/jsonBlob/f29cbd66-9e97-11ea-84c9-ab1fdb2d56a5
function Get(apiUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", apiUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
var apiUrl =
    "https://jsonblob.com/api/jsonBlob/f29cbd66-9e97-11ea-84c9-ab1fdb2d56a5";
var json = JSON.parse(Get(apiUrl));
var list_color = [
    "#ff0000",
    "#ff4000",
    "#ff8000",
    "#ffbf00",
    "#ffff00",
    "#bfff00",
    "#80ff00",
    "#40ff00",
    "#00ff00",
    "#00ff40",
    "#00ff80",
    "#00ffbf",
    "#00ffff",
    "#00bfff",
    "#0080ff",
    "#0040ff",
    "#0000ff",
    "#4000ff",
    "#8000ff",
    "#bf00ff",
    "#ff00ff",
    "#ff00bf",
    "#ff0080",
    "#ff0040",
    "#ff0000",
];
var ele_entries = document.getElementById("main");
//remove elements
while (ele_entries.firstChild) ele_entries.removeChild(ele_entries.firstChild);
//build elements
var list_article = [];
json.forEach(function(data) {
    var svg_blob = `
<svg viewBox="0 0 300 500" class="blob">
<g transform="translate(150,250)">
<path d="M67.5,-106.7C77.5,-57.5,68.8,-28.8,79.8,11.1C90.9,50.9,121.8,101.8,111.8,133C101.8,164.2,50.9,175.6,-4,179.6C-58.9,183.6,-117.9,180.2,-163,149C-208.2,117.9,-239.6,58.9,-242.4,-2.8C-245.2,-64.6,-219.5,-129.2,-174.3,-178.3C-129.2,-227.5,-64.6,-261.2,-17.9,-243.3C28.8,-225.4,57.5,-155.8,67.5,-106.7Z" fill="${
    list_color[Math.floor(Math.random() * list_color.length)]
  }"></path>
</g>
</svg>
`;
    var newArticle = `<article class="entry">${svg_blob}`;
    if (data.date) {
        newArticle = newArticle.concat(`<div class="date"> ${data.date}</div>`);
    }
    newArticle = newArticle.concat(`<div class="col">`);
    if (data.name) {
        newArticle = newArticle.concat(
            `<div class="name"><h2>${data.name}</h2></div>`
        );
    }
    if (data.tech) {
        // console.log(data.tech.length)
        newArticle = newArticle.concat(`<div class="tech"><ul class="tech">`);
        for (var i = 0; i < data.tech.length; i++)
            newArticle = newArticle.concat(
                `<li class="brand-icon ${data.tech[i]}"> ${data.tech[i]}</li>`
            );
        newArticle = newArticle.concat(`</ul></div>`);
    }
    if (data.link) {
        newArticle = newArticle.concat(
            `<div class="link"><img class="favicon" src="${data.link.favicon}${data.link.link}" alt="codepen"><a href="${data.link.link}" target="_blank">View ${data.link.text}</a></div>`
        );
    }
    if (data.desc) {
        newArticle = newArticle.concat(`<div class="desc"> ${data.desc}</div>`);
    }
    if (data.obj) {
        newArticle = newArticle.concat(
            `<div class="obj"><h3>Objective</h3><ul class="obj">`
        );
        for (var i = 0; i < data.obj.length; i++)
            newArticle = newArticle.concat(`<li> ${data.obj[i]}</li>`);
        newArticle = newArticle.concat(`</ul></div>`);
    }
    newArticle = newArticle.concat(`</div></article>`);
    let frag = document.createRange().createContextualFragment(newArticle);
    ele_entries.appendChild(frag);
});