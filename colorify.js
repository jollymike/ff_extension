var tags = ['body','div','main','article']
for (var j=0; j < tags.length; j++){
  var db = document.body.getElementsByTagName(tags[j]);

  for (var i=0; i < db.length; i++) {
      db[i].style.background = "#222233";
      // db[i].style.color = "#BFE3CA";
  }
}

var tags = ['a','i','p','h1','h2','h3','h4','h5','span']
for (var j=0; j < tags.length; j++){
  var db = document.body.getElementsByTagName(tags[j]);

  for (var i=0; i < db.length; i++) {
      db[i].style.color = "#BFE3CA";
  }
}
