var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; 
      botRegexDL = /^\/DDL/i;
      botRegexSalt = /^\/salt/;
      botRegexCorrect = /^\/correct/; 
      botRegexGg = /^\/gg/; 
      botRegexBobby = /^\/bobby/;
      botRegexWrong = /^\/wrong/;
      botRegexHeh = /^\/heh/; 
      botRegexSmh = /^\/smh/; 
      botRegexWhat = /^\/what/;
      botRegexNeat = /^\/neat/; 
      botRegexKelly = /^\/kelly/; 
      botRegexMoustache = /^\/moustache/;
      botRegexReady = /^\/ready/;   
      botRegexWeGetIt = /^\/wegetit/; 
      botRegexAd=/^\/advance/;
      botRegexRules = /^\/rules/
      botRegexSC = /^\/SDL/i; 
      botRegexP = /^\/PDL/i;  
      botRegexTw = /^\/twitch/i;  
      botRegexSh = /^\/shrug/; 
      botDuck = /^\/duck/;
      botJohnny = /^\/johnny/;
      botKeller = /^\/keller/;
      botMatt = /^\/matt/;
      botTrade = /^\/trade/;
      botTL = /^\/tradelog/;

  
    if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }


  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/GGM/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexCorrect.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/26tknCqiJrBQG6bxC/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexGg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i2.kym-cdn.com/photos/images/newsfeed/000/802/696/6c6.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexBobby.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1080x1298.png.89a7e54f8acf4aab836f2f3ad5e70c0f");
    this.res.end();
  } 
  else if(request.text && botRegexWrong.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexHeh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/tu54GM19sqJOw/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexSmh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media2.giphy.com/media/oxFDq4E9CHb7W/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexWhat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media2.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif");
    this.res.end();
  } 
  else if(request.text && botRegexNeat.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/500x491.jpeg.7d5f081021b14f05a5e99974dcec85dc.large");
    this.res.end();
  } 
  else if(request.text && botRegexReady.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/194x259.png.8aa177596f9a4ff7b20e5156ab795f5a.large");
    this.res.end();
  } 
  else if(request.text && botRegexKelly.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/375x666.png.46fe32f5c1434bda82bbd82e574c1720.large");
    this.res.end();
  } 
  else if(request.text && botRegexMoustache.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/722x1280.jpeg.9d9958eacef543a5867e6d415c59d8a8.large");
    this.res.end();
   } 
  else if(request.text && botRegexWeGetIt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("You're GOAT");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/GGM/rules");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/GGM/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/GGM/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botJohnny.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/399x500.png.a311fba0f1b5404b9122307fbbdefaeb");
    this.res.end();
  }
  else if(request.text && botKeller.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/540x712.png.b1f551f52e6141949ee3fb8864345b1b.large");
    this.res.end();
  }
  else if(request.text && botMatt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1130x1280.jpeg.82b56f506a194619bbda442f7b8e5f4c.large");
    this.res.end();
  }
  else if(request.text && botTrade.test(request.text)) {
  this.res.writeHead(200);
  postMessage("https://goo.gl/forms/6Jelu8s4PaZvWqZT2");
  this.res.end();
  }
  else if(request.text && botTL.test(request.text)) {
  this.res.writeHead(200);
  postMessage("https://docs.google.com/spreadsheets/d/1UFLcU5wVLFuLMt1s1Qg6_wYZOdQkSLI9ZbhKfNCJtKo/edit");
  this.res.end();
  }
  
  
  
}
function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
