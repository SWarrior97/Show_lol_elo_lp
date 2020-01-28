# Show_lol_elo_lp


This projet get a league of legends summoner name account and show the current elo and how much LP the account have.The app get the elo and lp and save it to LP.txt file. The app will keep updating the lp wich 25 min while running.

## Attention
To run the project you must have node installed. It can be downlaoded in this [url](https://nodejs.org/en/download/) 

## Installation
### Clone repository

```shell
git clone https://github.com/SWarrior97/Show_lol_elo_lp.git
```

### Install
You must have node installed on your machine
```shell
cd path_to_proj
npm install
```
### Running
```shell
node app.js SummonerName
```

### OutPut
The app generate two file<br>
LP.txt -> That contains the elo and the elo of the given summoner.<br>
#### Example:
Gold II: 22 LP<br>
UserInfo.txt -> That contains the summonerName, the elo, the lp, how much wins and loses <br>
#### Example:
Teste <br>
Elo:Gold III <br>
LP:22 <br>
Wins:12 <br>
Loses:2 <br>
