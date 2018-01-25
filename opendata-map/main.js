//# require=d3

function update(data) {
  d3.select(root).append("p")
    .text("Map for OpenData");
  
  var list = data.toList();
  d3.select(root).append("p")
    .text("DataSize: " + list.length);
    
  for(var i=0; i<list.length; i++){
    d3.select(root).append("p")
      .text(list[i].name + " " + list[i].lat + " " + list[i].lon);
  }
  
  /*
  var svg = d3.select(root).append("svg")    
    .attr('width', root.clientWidth)
    .attr('height', root.clientHeight);
    
  svg.append("circle")
    .attr({
      "cx": 100,
      "cy": 100,
      "r": 30
    });
  */
}
