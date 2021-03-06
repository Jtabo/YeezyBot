var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; 
      botRegexSalt = /^\/salt/;
      botRegexCorrect = /^\/correct/; 
      botRegexGg = /^\/gg/; 
      botRegexWrong = /^\/wrong/;
      botRegexHeh = /^\/heh/; 
      botRegexSmh = /^\/smh/; 
      botRegexWhat = /^\/what/;
      botRegexNeat = /^\/neat/; 
      botRegexReady = /^\/ready/;   
      botRegexAd=/^\/advance/;
      botRegexTw = /^\/twitch/i;  
      botRegexSh = /^\/shrug/; 
      botDuck = /^\/duck/;
      botPause = /^\/pause/;
      botNephew = /^\/nephew/;
      botDelete = /^\/dlt/;
      botDaFuq = /^\/dafuq/;
      botMacros = /^\/macros/;
      botJK = /^\Are Real/;
      botArent = /^\Just Kidding/;

  
    if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
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
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
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
    else if(request.text && botPause.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/903x1316.jpeg.076b83837c124ed0b79d4b7b18d43786");
    this.res.end();
  }
    else if(request.text && botNephew.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/905x1318.jpeg.08c59fbc9279410391ad3f7ca718c3cc");
    this.res.end();
  }
    else if(request.text && botDelete.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1228x1376.jpeg.ee6d80a9762549e98f68f7b055b677ac");
    this.res.end();
  }
      else if(request.text && botDaFuq.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i0.kym-cdn.com/entries/icons/original/000/018/489/nick-young-confused-face-300x256_nqlyaa.png");
    this.res.end();
  }
        else if(request.text && botMacros.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Are Real");
    this.res.end();
  }
        else if(request.text && botJK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Just Kidding");
    this.res.end();
  }
        else if(request.text && botArent.test(request.text)) {
    this.res.writeHead(200);
    postMessage("They Aren't");
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
