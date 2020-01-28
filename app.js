const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var fs = require('fs');
var fetch = require('node-fetch');
var DOMParser = require('dom-parser');
var currentSumonerName = '';
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  
});

//1500000
/*process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});*/

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    currentSumonerName = process.argv[2];
    getLP();
    setInterval(function(){ 
        //code goes here that will be run every 5 seconds.
        getLP();    
    }, 1500000);
});






function getLP(){
    var url = 'https://www.leagueofgraphs.com/summoner/euw/'+currentSumonerName;
    fetch(url,
        {
          method: 'GET'
        })
            .then(function(response) {
                // When the page is loaded convert it to text
                return response.text()
            })
            .then(function(html) {
                // Initialize the DOM parser
                var parser = new DOMParser();

                // Parse the text
                var doc = parser.parseFromString(html, "text/html");
                var divs = doc.getElementsByTagName('div');
                var spans = doc.getElementsByTagName('span');
                var title = doc.getElementsByTagName('title')[0].innerHTML;
                var User = {summonerName:'',elo:'',lp:'',wins:'',loses:''};

                User.summonerName = title.split('(')[0];

                for (let i = 0; i < divs.length; i++) {
                    if (divs[i].getAttribute('class') == 'leagueTier') {
                        User.elo = divs[i].innerHTML.trim();
                    }

                    if (divs[i].getAttribute('class') == 'league-points') {
                        User.lp = divs[i].childNodes[1].innerHTML;
                    }
                }

                for (let i = 0; i < spans.length; i++) {
                    if (spans[i].getAttribute('class') == 'leaguePoints') {
                        console.log("asdasdasd");
                        console.log(spans[i]);
                        User.lp = spans[i].innerHTML;
                    }

                    if (spans[i].getAttribute('class') == 'winsNumber') {
                        User.wins = spans[i].innerHTML;
                    }

                    if (spans[i].getAttribute('class') == 'lossesNumber') {
                        User.loses = spans[i].innerHTML;
                    }
                }
                
                console.log(User);
                //User.lp = '100';
                var string = User.summonerName +'\nElo:'+User.elo+'\nLP:'+User.lp+'\nWins:'+User.wins+'\nLoses:'+User.loses;
                fs.writeFile('UserInfo.txt', string, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
                var lp = User.elo +': '+User.lp+' LP';
                  fs.writeFile('LP.txt', lp, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });  
                
            })
            .catch(function(err) {  
                console.log('Failed to fetch page: ', err);  
            });
}