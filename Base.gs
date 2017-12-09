var botId = "c5cc01c0449a9e9b7ba49b4c3b";
function sendText(text){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botId + '","text":"' + text + '"}'})
}

//respond to messages sent to the group. Recieved as POST
//this method is automatically called whenever the Web App's (to be) URL is called
function doPost(e){
  var post = JSON.parse(e.postData.getDataAsString());
  var text = post.text;
  var name = post.name
  
  if(text.toLowerCase().substring(0, 3) == "!hi"){
    sendText("Hello, " + name);
  }
}
