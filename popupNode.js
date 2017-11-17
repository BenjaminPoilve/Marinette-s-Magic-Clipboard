
//var Metascraper = require('metascraper');
var clipboard = require('clipboard-js');

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.code === "KeyC") {
        if(window.window.location.origin=="https://twitter.com"){
            html2canvas(document.querySelector(".permalink-tweet-container"), {
        "logging": true, //Enable log (use Web Console for get Errors and Warings)
        useCORS: true,
        taintTest: false,
        onrendered: function(canvas) {
          var img = new Image();
          img.onload = function() {
            document.body.appendChild(img);
          };
          img.error = function() {
            if(window.console.log) {
              window.console.log("Not loaded image from canvas.toDataURL");
            } else {
              alert("Not loaded image from canvas.toDataURL");
            }
          };
          img.src = canvas.toDataURL("image/png");
          var w = window.open("");
          w.document.write(img.outerHTML);
        }
      });
        }else{
        var element = document.querySelector('meta[property="og:title"]');
        var content = element && element.getAttribute("content");
              clipboard.copy({
                  "text/plain": window.location.href ,
                  "text/html": '<a href='+window.location.href+' target="_top">'+content +'</a></p>'
  });
}}
} );
