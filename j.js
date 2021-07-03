$("button").click(function(){
$.getJSON("json.json", function(data){
$.each(data, function(key, val){
 event_array = []
for(var count = 0; count<data["events"].length; count++){
    event_array.push(data["events"][count]["title"])
}
  $("ul").append("<li>" + val.events + "</li>");
  $("ul").append("<li>" + val.title + "</li>");

console.log(event_array)
});
});
});
