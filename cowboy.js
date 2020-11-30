var changeNameBox = document.getElementById("getname");
var homescreendiv = document.getElementById("homescreen");
var shopScreen = document.getElementById("shopscreen");
var addmusic = document.getElementById("musicdiv");
var addsettings = document.getElementById("settingsscreen");
var dagame = document.getElementById("gamescreen");
var getChest = document.getElementById("chest");
var hs = document.getElementById("homescreen");
let rock1 = document.getElementById("rocks");
let rock2 = document.getElementById("rocks2");
let rock3 = document.getElementById("rocks3");
let playerChar = document.getElementById("player");
var doStore = true;
var notLeaderBoard = false;
var fromHome = true;
var gamePaused = true;
var inter;
var map = document.getElementById("gamebg");
var h = screen.availHeight;
var w = screen.availWidth;
var pauseScreen;
var isQuitted = false;
//var h = window.innerHeight;
//var w = window.innerWidth;
console.log(h);
console.log(w);
//map.style.width = (996 / 1280) * w;
//localStorage.setItem("coins", 10000);

let skincard1 = document.createElement("div");
let skincard2 = document.createElement("div");
let skincard3 = document.createElement("div");
let skincard4 = document.createElement("div");
let skincard5 = document.createElement("div");
let skincard6 = document.createElement("div");
let skincard7 = document.createElement("div");
let skincard8 = document.createElement("div");
let skincard9 = document.createElement("div");
let skincar1 = document.createElement("div");
let skincar2 = document.createElement("div");
let skincar3 = document.createElement("div");
let skincar4 = document.createElement("div");
let skincar5 = document.createElement("div");

let skincard = [skincard1, skincard2, skincard3, skincard4, skincard5, skincard6, skincard7, skincard8, skincard9];


var Lscore = document.getElementById("LScore");
var Lname = document.getElementById("LName");
var L1st = document.getElementById("1st");
var L2nd = document.getElementById("2nd");
var L3rd = document.getElementById("3rd");
var L4th = document.getElementById("4th");
var L5th = document.getElementById("5th");
var L1stn = document.getElementById("1stn");
var L2ndn = document.getElementById("2ndn");
var L3rdn = document.getElementById("3rdn");
var L4thn = document.getElementById("4thn");
var L5thn = document.getElementById("5thn");
let chest3 = document.createElement("img");
let chest2 = document.createElement("img");
let chest1 = document.createElement("img");
let chest4 = document.createElement("img");
let chest5 = document.createElement("img");
let chest6 = document.createElement("img");
let prizeImg = document.createElement("img");
let prizeImg2 = document.createElement("img");
Lname.style.left = "1.7%";
Lscore.style.right = "2.8%";
Lname.innerHTML = "NAME";
Lscore.innerHTML = "SCORE";
L1st.style.right = "1.7%";
L1stn.style.left = "0.3%";
L1st.style.top = "15%";
L1stn.style.top = "15%";
L2nd.style.right = "1.7%";
L2ndn.style.left = "0.3%";
L2nd.style.top = "30%";
L2ndn.style.top = "30%";
L3rd.style.right = "1.7%";
L3rdn.style.left = "0.3%";
L3rd.style.top = "45%";
L3rdn.style.top = "45%";
L4th.style.right = "1.7%";
L4thn.style.left = "0.3%";
L4th.style.top = "60%";
L4thn.style.top = "60%";
L5th.style.right = "1.7%";
L5thn.style.left = "0.3%";
L5th.style.top = "75%";
L5thn.style.top = "75%";


var musicBool = true;
var updateThis;
var killHomeAnimate = false;
var doChest = 0;
var rockx;
var posSkinX;
var posSkinY;
var rocky;
var rock2x;
var rock2y;
var rock3x;
var rock3y;
var donotmove;
var count;
var movementRight;
var movementLeft;
var diffx;
var diffy;
var soundEffect = true;
var playerHealthBar = document.createElement("div");
var playerHealthBar2 = document.createElement("div");
var playerHeart = document.createElement("img");
var coinImg = document.createElement("img");
coinImg.draggable="false";
let gameover = document.createElement("h1");
let coinCount = document.createElement("h1");
let gunShot = document.createElement("audio");
let gunShot2 = document.createElement("audio");
let gunShot3 = document.createElement("audio");
let gunShot4 = document.createElement("audio");
let gunShot5 = document.createElement("audio");
let gunCount = 0;
let gunShots = [gunShot, gunShot2, gunShot3, gunShot4, gunShot5];
var bigSkinn = document.getElementById("bigSkin");
var skinScreen = document.getElementById("skinss");
var skinContainer = document.createElement("div");



//define the skins [big, right1, right2, left1, left2]
let cowboy = ["https://pbs.twimg.com/media/EmVZv2ZXYAA56kb?format=png&name=240x240", "https://pbs.twimg.com/media/Emeu13cXEAAmynx?format=png&name=120x120", "https://pbs.twimg.com/media/EmciFeaXEAA7wMg?format=png&name=120x120", "https://pbs.twimg.com/media/Emeu4G0XcAIq_fJ?format=png&name=120x120", "https://pbs.twimg.com/media/EmciNidWEAAaNwR?format=png&name=120x120", true, 1, "COWBOY"];
let cowboyWizard = ["https://pbs.twimg.com/media/EmlQA1aXMAIBPvg?format=png&name=240x240", "https://pbs.twimg.com/media/EmlQHPBXEAA3BH0?format=png&name=120x120", "https://pbs.twimg.com/media/EmlQNlhXYAUCKI6?format=png&name=120x120", "https://pbs.twimg.com/media/EmlQTJlW4AAvO7w?format=png&name=120x120", "https://pbs.twimg.com/media/EmlQZWCXcAIAfAO?format=png&name=120x120", true, 3, "WIZARD COWBOY"];
let spacecowboy = ["https://pbs.twimg.com/media/Eml1HnjWEAITeiY?format=png&name=240x240", "https://pbs.twimg.com/media/Eml1P9pWMAAYm0J?format=png&name=120x120", "https://pbs.twimg.com/media/Eml1W80XYAAfgj3?format=png&name=120x120", "https://pbs.twimg.com/media/Eml1dGoW4AMDr_U?format=png&name=120x120", "https://pbs.twimg.com/media/Eml1h0GWMAQt5nu?format=png&name=120x120", true, 3, "SPACE COWBOY"];
let cowboysanta = ["https://pbs.twimg.com/media/EmrtmHLXIAEP4yj?format=png&name=240x240", "https://pbs.twimg.com/media/EmrtxBkXYAAuOTL?format=png&name=120x120", "https://pbs.twimg.com/media/Emrt2i6W8AExISW?format=png&name=120x120", "https://pbs.twimg.com/media/Emrt_kSW8AAt77X?format=png&name=120x120", "https://pbs.twimg.com/media/EmruFHQW4AARryx?format=png&name=120x120", true, 3, "COWBOY SANTA"];
let coboykarate = ["https://pbs.twimg.com/media/Emr-T9mXYAI-IXW?format=png&name=240x240", "https://pbs.twimg.com/media/Emr-cS0W8AMkIYz?format=png&name=120x120", "https://pbs.twimg.com/media/Emr-hEsW8AACsOb?format=png&name=120x120", "https://pbs.twimg.com/media/Emr-k5bXEAAPW2G?format=png&name=120x120", "https://pbs.twimg.com/media/Emr-pArXUAIAtAD?format=png&name=120x120", true, 2, "KARATE COWBOY"];
let coyboyxmas = ["https://pbs.twimg.com/media/EmsDQGrXMAAxu1_?format=png&name=240x240", "https://pbs.twimg.com/media/EmsDjW1W8AETysH?format=png&name=120x120", "https://pbs.twimg.com/media/EmsDn3OXIAAQZrZ?format=png&name=120x120", "https://pbs.twimg.com/media/EmsDsJCW8AEOHtQ?format=png&name=120x120", "https://pbs.twimg.com/media/EmsDwa2XcAAAQzL?format=png&name=120x120", true, 1, "XMAS COWBOY"];
let cowboybus = ["https://pbs.twimg.com/media/EmsPMWDW8AAegGc?format=png&name=240x240", "https://pbs.twimg.com/media/EmsPXt8XYAQ3hTi?format=png&name=120x120", "https://pbs.twimg.com/media/EmsPdLlWEAAWllc?format=png&name=120x120", "https://pbs.twimg.com/media/EmsPhwVWEAAZzz3?format=png&name=120x120", "https://pbs.twimg.com/media/EmsPmcJWEAIOFdl?format=png&name=120x120", true, 1, "WORK COWBOY"];
let cowboymcfly = ["https://pbs.twimg.com/media/EmsS7YCW4AA0pYz?format=png&name=240x240", "https://pbs.twimg.com/media/EmsTJnfXUAAJ6Kw?format=png&name=120x120", "https://pbs.twimg.com/media/EmsT5l7XEAISJaf?format=png&name=120x120", "https://pbs.twimg.com/media/EmsT-IJXMAECqcW?format=png&name=120x120", "https://pbs.twimg.com/media/EmsUC-iW8AAG7EX?format=png&name=120x120", true, 3, "COWBOY MCFLY"];
let cowboybat = ["https://pbs.twimg.com/media/EmujWWzXEAwCy9e?format=png&name=240x240", "https://pbs.twimg.com/media/EmujhVjXMAEjLak?format=png&name=120x120", "https://pbs.twimg.com/media/EmujoeAW4AM6I2A?format=png&name=120x120", "https://pbs.twimg.com/media/EmujsirXUAIBjtc?format=png&name=120x120", "https://pbs.twimg.com/media/EmujxgQXcAMJeJO?format=png&name=120x120", false, 3, "BATBOY"];
let skinList = [cowboy, cowboybus, coyboyxmas, coboykarate, cowboyWizard, spacecowboy, cowboysanta, cowboymcfly, cowboybat];
let lootList = [100, 200, 300, 400, 500, cowboybus, coyboyxmas, coboykarate, cowboyWizard, spacecowboy, cowboysanta, cowboymcfly, cowboybat];
let lootImg = document.createElement("img");


let unlock;
let monster1;
let monster2;
let monster3;
let monster4;
let monster5;
let monster6;
let monster7;
let randx;
let randy;
let monsters = [monster1, monster2, monster3, monster4, monster5, monster6, monster7];
var restarted = false;
var user = {currLevel: 1, xpLevel: 0, currHealth: 100, currKill: 0, totalKill: 0, coins: 0, skin: 1, killedThisGame: 0, highscore: 0, key: 0};
if (localStorage.getItem("xpLevel") !== null) {
  user.xpLevel = localStorage.getItem("xpLevel");
  user.totalKill = localStorage.getItem("totalKill");
  user.coins = parseInt(localStorage.getItem("coins"));
  user.skin = parseInt(localStorage.getItem("skin"));
  for (let i = 1; i < skinList.length; ++i) {
    skinList[i][5] = localStorage.getItem(skinList[i][7]);
  }
}
else {
  for (let i = 1; i < skinList.length; ++i) {
    skinList[i][5] = false;
    localStorage.setItem(skinList[i][7], skinList[i][5]);
  }
}


var firebaseConfig = {
  apiKey: "AIzaSyDlatfVu8Z9RWzVSaoenQTWDKfe2bIrO8w",
  authDomain: "cowboycavegame.firebaseapp.com",
  databaseURL: "https://cowboycavegame.firebaseio.com",
  projectId: "cowboycavegame",
  storageBucket: "cowboycavegame.appspot.com",
  messagingSenderId: "1062900372086",
  appId: "1:1062900372086:web:716dad6bc44d0c7ca9c557",
  measurementId: "G-SXKSRS5J5K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();
var ref = database.ref('scores');
var ref2 = database.ref('scores');


let place1 = {name: "", score: 0, key: ""};
let place2 = {name: "", score: 0, key: ""};
let place3 = {name: "", score: 0, key: ""};
let place4 = {name: "", score: 0, key: ""};
let place5 = {name: "", score: 0, key: ""};
let sortthis = [place1, place2, place3, place4, place5];
let sortthis2;
let sorted;

function getTopData() {
ref.on('value', gotData, errData);
function gotData(data) {
  var scores = data.val()
  var keys = Object.keys(scores);
  console.log(keys);
  for (let i = 0; i < 5; i++) {
    var k = keys[i];
    var daname = scores[k].name;
    var dascore = scores[k].score;
    sortthis[i].name = daname;
    sortthis[i].score = dascore;
    sortthis[i].key = k;
    if (daname == localStorage.getItem("Name")) {
      user.key = keys[i];
      doStore = false;
    }
    updateThis = ref.child(localStorage.getItem("Name"));

    //ordered = ref.orderByChild('score');
  }
  sortthis2 = sortthis;
  sorted = sortthis2.sort((a, b) => (a.score > b.score) ? 1 : -1);
  if (!notLeaderBoard) {
  setLeaderBoard();
  notLeaderBoard = true;
}
  console.log(sorted);
}

function errData(err) {
  console.log(err);
}
}

function playerMove(e) {
    if (doChest == 6) {
      if (e.key == 'x') {
        if (Math.abs(parseInt(playerChar.style.left) - 1000) < 30) {
          if (Math.abs(parseInt(playerChar.style.top) - 150) < 30) {
            getChest.src = "https://pbs.twimg.com/media/EmcukwaW8AYs66B?format=png&name=240x240";
            user.coins = user.coins + 100;
            coinCount.innerHTML = user.coins;
            gunShot.src = "chestopen.mp3";
            gunShot.autoplay = true;
            document.body.appendChild(gunShot);
          }
        }
      }
    }

    if (e.key == 'ArrowLeft') {

      movementLeft = true;
      movementRight = false;
      if (count % 2 == 0) {
      playerChar.src = skinList[parseInt(user.skin)][3];
    }
    else {
      playerChar.src = skinList[parseInt(user.skin)][4];
    }
      if ((parseInt(playerChar.style.left) - 15) > 150 /*&& Math.sqrt(Math.pow((rockx+45 - parseInt(playerChar.style.left)-15), 2) + Math.pow((rocky-28  - parseInt(playerChar.style.top)), 2)) > 35 && Math.sqrt(Math.pow((rock2x+45 - parseInt(playerChar.style.left)-15), 2) + Math.pow((rock2y-28 - parseInt(playerChar.style.top)), 2)) > 35 && Math.sqrt(Math.pow((rock3x+45 - parseInt(playerChar.style.left)-15), 2) + Math.pow((rock3y-28 - parseInt(playerChar.style.top)), 2)) > 35*/) {
        if (Math.abs((parseInt(playerChar.style.left) - 15)-(rockx+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top))-(rocky-30))<30) {
            donotmove = true;
          }
        }
        if (Math.abs((parseInt(playerChar.style.left) - 15)-(rock2x+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top))-(rock2y-30))<30) {
            donotmove = true;
          }
        }
        if (Math.abs((parseInt(playerChar.style.left) - 15)-(rock3x+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top))-(rock3y-30))<30) {
            donotmove = true;
          }
        }
        if (!donotmove) {
          playerChar.style.left = parseInt(playerChar.style.left) - (0.0117 * w) + 'px';
        }
        else {
          donotmove = false;
        }
    //playerChar.style.left = (parseInt(playerChar.style.left)) - 15 + 'px';
  }
  }
    if (e.key == 'ArrowRight') {
      movementLeft = false;
      movementRight = true;
      if (count % 2 == 0) {
      playerChar.src = skinList[parseInt(user.skin)][1];
    }
    else {
      playerChar.src = skinList[parseInt(user.skin)][2];
    }
      if ((parseInt(playerChar.style.left) + 15) < 1090 /*&& Math.sqrt(Math.pow((rockx+45 - parseInt(playerChar.style.left)+15), 2) + Math.pow((rocky-28 - parseInt(playerChar.style.top)), 2)) > 35 && Math.sqrt(Math.pow((rock2x+45 - parseInt(playerChar.style.left)+15), 2) + Math.pow((rock2y-28 - parseInt(playerChar.style.top)), 2)) > 35 && Math.sqrt(Math.pow((rock3x+45 - parseInt(playerChar.style.left)+15), 2) + Math.pow((rock3y-28 - parseInt(playerChar.style.top)), 2)) > 35*/) {
        if (Math.abs((parseInt(playerChar.style.left) + 15)-(rockx+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top))-(rocky-30))<30) {
            donotmove = true;
          }
        }
        if (Math.abs((parseInt(playerChar.style.left) + 15)-(rock2x+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top))-(rock2y-30))<30) {
            donotmove = true;
          }
        }
        if (Math.abs((parseInt(playerChar.style.left) + 15)-(rock3x+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top))-(rock3y-30))<30) {
            donotmove = true;
          }
        }
        if (!donotmove) {
          console.log(w);
          playerChar.style.left = parseInt(playerChar.style.left) + (0.0117 * w) + 'px';
        }
        else {
          donotmove = false;
        }

    //playerChar.style.left = (parseInt(playerChar.style.left)) + 15 + 'px';
  }
  else if (unlock) {
    var killdagame = document.getElementById("gamescreen");
    killdagame.remove();
    window.removeEventListener('keydown', playerMove);
    startGame();
  }
  }
    if (e.key == 'ArrowUp') {
      if (movementLeft) {
        if (count % 2 == 0) {
        playerChar.src = skinList[parseInt(user.skin)][3];
      }
      else {
        playerChar.src = skinList[parseInt(user.skin)][4];
      }
      }
      if (movementRight) {
        if (count % 2 == 0) {
        playerChar.src = skinList[parseInt(user.skin)][1];
      }
      else {
        playerChar.src = skinList[parseInt(user.skin)][2];
      }
      }
      if ((parseInt(playerChar.style.top) - 15) > 80 /*&& Math.sqrt(Math.pow((rockx+45 - parseInt(playerChar.style.left)), 2) + Math.pow((rocky-28 - parseInt(playerChar.style.top)-15), 2)) > 35 && Math.sqrt(Math.pow((rock2x+45 - parseInt(playerChar.style.left)), 2) + Math.pow((rock2y-28 - parseInt(playerChar.style.top)-15), 2)) > 35 && Math.sqrt(Math.pow((rock3x+45 - parseInt(playerChar.style.left)), 2) + Math.pow((rock3y-28 - parseInt(playerChar.style.top)-15), 2)) > 35*/) {
        if (Math.abs((parseInt(playerChar.style.left))-(rockx+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top)-15)-(rocky-30))<30) {
            donotmove = true;
          }
        }
        if (Math.abs((parseInt(playerChar.style.left))-(rock2x+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top)-15)-(rock2y-30))<30) {
            donotmove = true;
          }
        }
        if (Math.abs((parseInt(playerChar.style.left))-(rock3x+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top)-15)-(rock3y-30))<30) {
            donotmove = true;
          }
        }
        if (!donotmove) {
          playerChar.style.top = (parseInt(playerChar.style.top)) - (0.0204 * h) + 'px';
        }
        else {
          donotmove = false;
        }

    //playerChar.style.top = (parseInt(playerChar.style.top)) - 15 + 'px';
  }
    e.preventDefault();
  }
    if (e.key == 'ArrowDown') {
      if (movementLeft) {
        if (count % 2 == 0) {
        playerChar.src = skinList[parseInt(user.skin)][3];
      }
      else {
        playerChar.src = skinList[parseInt(user.skin)][4];
      }
      }
      if (movementRight) {
        if (count % 2 == 0) {
        playerChar.src = skinList[parseInt(user.skin)][1];
      }
      else {
        playerChar.src = skinList[parseInt(user.skin)][2];
      }
      }
      if ((parseInt(playerChar.style.top) + 15) < 460 /*&& Math.sqrt(Math.pow((rockx+45 - parseInt(playerChar.style.left)), 2) + Math.pow((rocky-28 - parseInt(playerChar.style.top)+15), 2)) > 35 && Math.sqrt(Math.pow((rock2x+45 - parseInt(playerChar.style.left)), 2) + Math.pow((rock2y-28 - parseInt(playerChar.style.top)+15), 2)) > 35 && Math.sqrt(Math.pow((rock3x+45 - parseInt(playerChar.style.left)), 2) + Math.pow((rock3y-28 - parseInt(playerChar.style.top)+15), 2)) > 35*/) {
        if (Math.abs((parseInt(playerChar.style.left))-(rockx+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top)+15)-(rocky-30))<30) {
            donotmove = true;
          }
        }
        if (Math.abs((parseInt(playerChar.style.left))-(rock2x+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top)+15)-(rock2y-30))<30) {
            donotmove = true;
          }
        }
        if (Math.abs((parseInt(playerChar.style.left))-(rock3x+25))<40) {
          if (Math.abs((parseInt(playerChar.style.top)+15)-(rock3y-30))<30) {
            donotmove = true;
          }
        }
        if (!donotmove) {
          playerChar.style.top = (parseInt(playerChar.style.top)) + (0.0204 * h) + 'px';
        }
        else {
          donotmove = false;
        }

    //playerChar.style.top = (parseInt(playerChar.style.top)) + 15 + 'px';
  }
    e.preventDefault();
  }
count++;
}


class greenMonster {
  constructor(health, speed, spawnx, spawny) {
    this.health = health;
    this.speed = speed;
    this.spawnx = spawnx;
    this.spawny = spawny;
    this.whatToDo = this.whatToDo.bind(this);
    this.movementRight = false;
    this.movementLeft = true;
    this.count = 0;
    this.stopFight = false;
    this.img = document.createElement("img");
    this.healthBar = document.createElement("img");
  }
  doPause() {
    inter = null;
    gamePaused = true;
    //this.whatToDo(this.img.style.left, this.img.style.top);
  }
  doUnPause() {
    gamePaused = false;
    this.whatToDo(this.spawnx, this.spawny);
  }
  doUnPause2() {
    gamePaused = false;
    //this.whatToDo(this.img.style.left, this.img.style.top);
  }
  whatToDo(x, y) {
    //var img = document.createElement("img");
    this.img.src = "https://pbs.twimg.com/media/Emf55WcXcAEm_F8?format=png&name=120x120";
    this.img.style.position = "absolute";
    this.img.style.left = x;
    this.img.style.top = y;
    dagame.appendChild(this.img);
    this.img.onclick = doDamage2.bind(this);
    this.img.draggable="false";


    this.healthBar.src = "https://pbs.twimg.com/media/EmgZEl_XUAEve2r?format=png&name=240x240";
    this.healthBar.id = "healthBar";
    this.healthBar.style.position = "absolute";
    this.healthBar.style.left = x;
    this.healthBar.style.top = y - (0.027 * h);
    this.healthBar.style.width = (this.health / 1280) * w;
    this.healthBar.style.height = 0.01356 * h;
    this.healthBar.draggable="false";
    dagame.appendChild(this.healthBar);
    function doDamage() {
      this.health = this.health - 10;
      if (this.health <= 0) {
        //dagame.removeChild(this.img);
        this.img.remove();
        if (user.currLevel == user.currKill) {
          user.currLevel += 1;
          unlock = true;
        }
        this.stopFight = true;
        this.img.style.top = 0.92 * h;
        this.healthBar.style.top = 0.92 * h;
        clearInterval(inter);
        this.img.src = "https://pbs.twimg.com/media/EmcsboZXUAE8mtg?format=png&name=120x120";
        this.healthBar.src = "https://pbs.twimg.com/media/EmcsboZXUAE8mtg?format=png&name=120x120";
      }
      this.healthBar.style.width = (this.health / 1280) * w;
    }
    function doDamage2() {

      gunShots[gunCount].src = "gunshot.mp3";
      gunShots[gunCount].autoplay = true;
      document.body.appendChild(gunShots[gunCount]);
      if (gunCount < 4) {
        gunCount += 1;
      }
      else {
        gunCount = 0;
      }

      this.health = this.health - 10;
      if (this.health <= 0) {
        user.totalKill += 1;
        user.currKill += 1;
        user.killedThisGame += 1;
        user.coins += 2;
        coinCount.innerHTML = user.coins;
        user.xpLevel += 10;
        dagame.removeChild(this.img);
        if (user.currLevel == user.currKill) {
          user.currLevel += 1;
          unlock = true;
        }
        this.stopFight = true;
        this.img.style.top = 0.92 * h;
        this.healthBar.style.top = 0.92 * h;
        clearInterval(inter);
        this.img.src = "https://pbs.twimg.com/media/EmcsboZXUAE8mtg?format=png&name=120x120";
        this.healthBar.src = "https://pbs.twimg.com/media/EmcsboZXUAE8mtg?format=png&name=120x120";
      }
      this.healthBar.style.width = (this.health / 1280) * w;
    }
    if (!this.stopFight) {

    inter = setInterval(frame.bind(this), 15);
    function frame() {
      if (!gamePaused) {
      diffx = parseInt(this.img.style.left) - parseInt(playerChar.style.left);
      diffy = parseInt(this.img.style.top) - parseInt(playerChar.style.top);
      if (Math.abs(diffx) < 35 && Math.abs(diffy) < 35 && user.currHealth > 0) {
        user.currHealth = user.currHealth - 0.5;
        document.getElementById("playerHBar").style.width = user.currHealth* ((4/1280) * w);
      }
      if (user.currHealth <= 0) {
        gameOver();
        this.health = 10;
        let doDam = doDamage.bind(this);
        doDam();
        clearInterval(inter);
        if (isQuitted) {
          isQuitted = false;
          toHome2();
        }
      }
      if (diffx > 30) {
        this.img.style.left = parseInt(this.img.style.left) - this.speed + 'px';
        this.healthBar.style.left = parseInt(this.healthBar.style.left) - this.speed + 'px';
        this.movementLeft = true;
        this.move_right = false;
      }
      else if (diffx < -30) {
        this.img.style.left = parseInt(this.img.style.left) + this.speed + 'px';
        this.healthBar.style.left = parseInt(this.healthBar.style.left) + this.speed + 'px';
        this.movementLeft = false;
        this.move_right = true;
      }
      if (diffy > 0) {
        this.img.style.top = parseInt(this.img.style.top) - this.speed + 'px';
        this.healthBar.style.top = parseInt(this.healthBar.style.top) - this.speed + 'px';
      }
      else {
        this.img.style.top = parseInt(this.img.style.top) + this.speed + 'px';
        this.healthBar.style.top = parseInt(this.healthBar.style.top) + this.speed + 'px';
      }
      if (this.movementLeft) {
        if (count % 20 == 0) {
          this.img.src = "https://pbs.twimg.com/media/Emf55WcXcAEm_F8?format=png&name=120x120";
        }
        else if (count % 10 == 0) {
          this.img.src = "https://pbs.twimg.com/media/Emf58yqXMAUwNy7?format=png&name=120x120";
        }
      }
      else {
        if (count % 20 == 0) {
          this.img.src = "https://pbs.twimg.com/media/Emf3-dHWMAAUCPF?format=png&name=120x120";
        }
        else if (count % 10 == 0) {
          this.img.src = "https://pbs.twimg.com/media/Emf4BG2XMAA62sQ?format=png&name=120x120";
        }
      }
      count += 1;
    }
  }
    }
  }
}










function enterShop() {
  if (fromHome) {
  var hs = document.getElementById("homescreen");
  hs.remove();
}
  fromHome = true;
  killHomeAnimate = true;
  document.body.appendChild(shopScreen);

  coinImg.src = "https://pbs.twimg.com/media/Em9crvtWEAEYRZa?format=png&name=120x120";
  coinImg.style.position = "absolute";
  coinImg.style.left = "75%";
  coinImg.style.top = "3%";
  coinImg.style.width = "80";
  coinImg.style.height = "80";
  coinImg.id = "coinImg";
  shopScreen.appendChild(coinImg);

  coinCount.innerHTML = user.coins;
  coinCount.style.position = "absolute";
  coinCount.style.left = "82%";
  coinCount.style.top = "0%";
  coinCount.id = "coinCount";
  coinCount.style.color = "#D4AF37";
  coinCount.style.textShadow = "0px 9px 0px #7F6405";
  shopScreen.appendChild(coinCount);

  skincar1.style.backgroundColor = "gray";


  skincar2.style.backgroundColor = "blue";

  skincar2.style.width = "14%";
  skincar2.style.height = "40%";
  skincar2.style.left = "43%";
  skincar2.style.top = "30%";
  skincar2.style.position = "absolute";
  skincar2.style.borderRadius = "10px";

  skincar3.style.backgroundColor = "#D4AF37";
  skincar1.style.width = "14%";
  skincar1.style.height = "40%";
  skincar1.style.left = "25%";
  skincar1.style.top = "30%";
  skincar1.style.position = "absolute";
  skincar1.style.borderRadius = "10px";
  skincar1.onclick = function() {whatsInside();
  }


  skincar3.style.width = "14%";
  skincar3.style.height = "40%";
  skincar3.style.left = "61%";
  skincar3.style.top = "30%";
  skincar3.style.position = "absolute";
  skincar3.style.borderRadius = "10px";


  chest3.src = "https://pbs.twimg.com/media/Em-hnMJXEAAwYYz?format=png&name=240x240";
  chest3.style.position = "absolute";
  chest3.style.left = "15%"
  chest3.style.top = "5%"
  skincar3.appendChild(chest3);

  chest2.src = "https://pbs.twimg.com/media/Em-kQ-oW8AUooed?format=png&name=240x240";
  chest2.style.position = "absolute";
  chest2.style.left = "15%"
  chest2.style.top = "5%"
  skincar2.appendChild(chest2);

  chest1.src = "https://pbs.twimg.com/media/Em-lWzbWMAkiYNF?format=png&name=240x240";
  chest1.style.position = "absolute";
  chest1.style.left = "15%"
  chest1.style.top = "5%"
  skincar1.appendChild(chest1);

  shopScreen.appendChild(skincar1);
  shopScreen.appendChild(skincar2);
  shopScreen.appendChild(skincar3);

}

function startGame() {
  playerChar.src = skinList[parseInt(user.skin)][1];
  user.currKill = 0;
  if (restarted) {
  user.currLevel = 1;
  user.currHealth = 100;
  restarted = false;
  gamePaused = false;
}
  dagame.style.filter = "brightness(100%)";
  unlock = false;
  hs.remove();
  document.body.appendChild(dagame);
  dagame.backgroundImage = "https://pbs.twimg.com/media/EmMIPsGXcAEpbBy?format=jpg&name=medium";
  dagame.webkitRequestFullscreen();
  killHomeAnimate = true;
  console.log(map.clientWidth);
  map.style.width = ((996 / 1280) * w) + 'px';
  map.style.height = ((678 / 737) * h) + 'px';
  document.getElementById("torch").style.left = (620/1280) * w;
  document.getElementById("torch").style.top = (100/737) * h;
  document.getElementById("chest").style.left = (1000/1280) * w;
  document.getElementById("chest").style.top = (150/737) * h;


  doChest =Math.floor(Math.random() * 7);
  if (doChest == 6) {
    getChest.src = "https://pbs.twimg.com/media/EmcsWgZXIAE-l1y?format=png&name=240x240";
  }
  else {
    getChest.src = "https://pbs.twimg.com/media/EmcsboZXUAE8mtg?format=png&name=120x120";
  }

  rockx = Math.floor(Math.random() * 850) + 200;
  rocky = Math.floor(Math.random() * 380) + 100;
  rock2x = Math.floor(Math.random() * 850) + 200;
  rock2y = Math.floor(Math.random() * 380) + 100;
  rock3x = Math.floor(Math.random() * 850) + 200;
  rock3y = Math.floor(Math.random() * 380) + 100;
  rock1.style.left = (rockx/1280)*w;
  rock1.style.top = (rocky/737)*h;
  rock2.style.left = (rock2x/1280)*w;
  rock2.style.top = (rock2y/737)*h;
  rock3.style.left = (rock3x/1280)*w;
  rock3.style.top = (rock3y/737)*h;


  playerChar.style.left = (160 / 1280) * w;
  playerChar.style.top = (250/737) * h;
  console.log(user.currLevel);

  for (let i = 0; i < user.currLevel; ++i) {
    randx = Math.floor(Math.random() * 350) + 550;
    randy = Math.floor(Math.random() * 380) + 100;
    monsters[i] = new greenMonster(45, 1, randx, randy);
    monsters[i].doUnPause();
  }
  /*let monster1 = new greenMonster(45, 1, 460, 500);
  monster1.whatToDo();
  let monster2 = new greenMonster(45, 1, 460, 300);
  monster2.whatToDo();*/
  donotmove = false;
  count = 0;
  movementRight = true;
  movementLeft = false;

  window.addEventListener('keydown', playerMove);

  playerHealthBar.style.backgroundColor = "black";
  playerHealthBar.style.width = (400/1280) * w;
  playerHealthBar.style.height = (20/737) * h;
  playerHealthBar.style.position = "absolute";
  playerHealthBar.style.left = (180/1280) * w;
  playerHealthBar.style.top = (550/737) * h;
  playerHealthBar.style.borderRadius = "10px";
  dagame.appendChild(playerHealthBar);

  playerHealthBar2.style.backgroundImage = "linear-gradient(red,white)";
  playerHealthBar2.style.width = ((user.currHealth*4)/1280) * w;
  playerHealthBar2.style.height = (20/737) * h;
  playerHealthBar2.style.position = "absolute";
  playerHealthBar2.style.left = (180/1280) * w;
  playerHealthBar2.style.top = (550/737) * h;
  playerHealthBar2.style.borderRadius = "10px";
  playerHealthBar2.id = "playerHBar";
  dagame.appendChild(playerHealthBar2);

  playerHeart.src = "https://pbs.twimg.com/media/EmkMtB1WEAE4b0U?format=png&name=small";
  playerHeart.style.position = "absolute";
  playerHeart.style.left = "-10";
  playerHeart.style.top = "-10";
  playerHeart.style.height = "40";
  playerHeart.style.width = "40";
  playerHealthBar2.appendChild(playerHeart);

  coinImg.src = "https://pbs.twimg.com/media/Em9crvtWEAEYRZa?format=png&name=120x120";
  coinImg.style.position = "absolute";
  coinImg.style.left = "-30";
  coinImg.style.top = "30";
  coinImg.style.width = "80";
  coinImg.style.height = "80";
  coinImg.id = "coinImg";
  playerHealthBar2.appendChild(coinImg);

  coinCount.innerHTML = user.coins;
  coinCount.style.position = "absolute";
  coinCount.style.left = (230/1280) * w;
  coinCount.style.top = (550/737) * h;
  coinCount.id = "coinCount";
  coinCount.style.color = "#D4AF37";
  coinCount.style.textShadow = "0px 9px 0px #7F6405";
  dagame.appendChild(coinCount);
}


function enterSettings() {
  var hs = document.getElementById("homescreen");
  hs.remove();
  document.body.appendChild(addsettings);
  killHomeAnimate = true;
}

function musicToggle() {
  var musicButt = document.getElementById("musicbutton");
  var killmusic = document.getElementById("music");
  if (musicBool) {
    killmusic.muted = true;
    musicButt.style.backgroundColor = "red";
    musicBool = false;
  }
  else {
    killmusic.muted = false;
    musicButt.style.backgroundColor = "rgb(0, 0, 150)";
    musicBool = true;
  }
}

function begin() {

  getTopData();

  myMove();
  bigSkinn.src = skinList[parseInt(user.skin)][0];
  if (localStorage.getItem("Name") !== null) {
    var nameBox = document.getElementById("getname");
    nameBox.parentNode.removeChild(nameBox);
    var playerName = localStorage.getItem("Name");
    document.getElementById("playername").innerHTML = playerName;
  }
  var killsettings = document.getElementById("settingsscreen");
  killsettings.remove();
  var killdagame = document.getElementById("gamescreen");
  killdagame.remove();
  document.getElementById("skinss").remove();
  shopScreen.remove();
}

function myMove() {
  var elem = document.getElementById("cowboy");
  var elem2 = document.getElementById("monster1");
  var pos = 0;
  var pos2 = 80;
  var move_left = false;
  var move_right = true;
  var id = setInterval(frame, 5);
  function frame() {
    if (killHomeAnimate) {
      clearInterval(id);
    }
    if (pos == 1500) {
      move_left = true;
      move_right = false;
      document.getElementById("cowboy").src="https://pbs.twimg.com/media/EmRroQTXUAAtOcl?format=png&name=120x120";
    }
    if (pos == -200) {
      move_right = true;
      move_left = false;
      document.getElementById("cowboy").src="https://pbs.twimg.com/media/EmRiwpeXcAEgB6w?format=png&name=120x120";
    }
      if (move_right) {
        if (pos % 40 == 0) {
          document.getElementById("monster1").src="https://pbs.twimg.com/media/EmSA9DOWMAYnHSt?format=png&name=120x120"
          document.getElementById("cowboy").src="https://pbs.twimg.com/media/EmRy8MJWMAAos8f?format=png&name=120x120"
        }
        else if (pos % 20 == 0) {
          document.getElementById("monster1").src="https://pbs.twimg.com/media/EmSBDxxXUAM5NP9?format=png&name=120x120"
          document.getElementById("cowboy").src="https://pbs.twimg.com/media/EmRzCNpXEAA13aA?format=png&name=120x120"
        }

      pos+=1;
      pos2+=1;
      elem.style.left = pos + "px";
      elem2.style.left = pos2 + "px";
    }
    if (move_left) {
      if (pos % 40 == 0) {
        document.getElementById("monster1").src="https://pbs.twimg.com/media/EmSBJjfW8AEDAtU?format=png&name=120x120"
        document.getElementById("cowboy").src="https://pbs.twimg.com/media/EmRyvGtWMAA-KVD?format=png&name=120x120"
      }
      else if (pos % 20 == 0) {
        document.getElementById("monster1").src="https://pbs.twimg.com/media/EmSBOP1WEAMg7JD?format=png&name=120x120"
        document.getElementById("cowboy").src="https://pbs.twimg.com/media/EmRy2AKWEAAEJCw?format=png&name=120x120"
      }

      pos -= 1;
      pos2 -= 1;
      elem.style.left = pos + "px";
      elem2.style.left = pos2 + "px";
    }
  }
}

function getName() {
  if (localStorage) {
    if (localStorage.getItem("Name") !== null) {
      console.log(localStorage.getItem("Name"));
    }
      localStorage.setItem("Name", document.getElementById("fname").value);
  }
  else {
    alert("Sorry, your browser do not support local storage.");
  }
  var nameBox = document.getElementById("getname");
  nameBox.remove();
  var playerName = localStorage.getItem("Name");
  document.getElementById("playername").innerHTML = playerName;
}

function changeName() {
  console.log("hi");
  document.body.appendChild(changeNameBox);
}
function toHome4() {
  shopScreen.remove();
  document.body.appendChild(homescreendiv);
  killHomeAnimate = false;
  playercard[2].removeChild(chest3);
  playercard[1].removeChild(chest2);
  playercard[0].removeChild(chest1);
  myMove();

}
function toHome3() {
  document.getElementById("skinss").remove();
  bigSkinn.src = skinList[parseInt(user.skin)][0];
  document.body.appendChild(homescreendiv);
  killHomeAnimate = false;
  myMove();

}
function toHome2() {

  for (let i = 0; i < user.currLevel; ++i) {
    monsters[i].doPause();
}
  restarted = true;
  //var killdagame = document.getElementById("gamescreen");
  //killdagame.remove();
  dagame.remove();
  document.body.appendChild(homescreendiv);
  killHomeAnimate = false;
  window.removeEventListener('keydown', playerMove);
  //document.body.removeChild(gameover);
  gameover.remove();
  myMove();
  notLeaderBoard = false;
  getTopData();

}
function toHome() {
  var killsettings = document.getElementById("settingsscreen");
  killsettings.remove();
  document.body.appendChild(homescreendiv);
  killHomeAnimate = false;
  myMove();
}
var gameDone = false;
function gameOver() {
  gameDone = true;
  clearInterval(inter);
  getTopData();
  if (user.killedThisGame > sorted[0].score) {
  var data = {
    name: localStorage.getItem("Name"),
    score: user.killedThisGame
  }
  daKey = sorted[0].key;
  updateIt = ref.child(daKey);
  updateIt.update(data);
  getTopData();
}

  dagame.style.filter = "brightness(50%)"
  gameover.innerHTML = "GAME OVER";
  gameover.style.position = "absolute";
  gameover.id = "gameogor";
  gameover.style.top = "300";
  gameover.style.left = "410";
  gameover.style.filter = "brightness(100%)"
  dagame.appendChild(gameover);
  if (user.killedThisGame > user.highscore) {
    localStorage.setItem("highscore", user.killedThisGame);
  }
  user.killedThisGame = 0;
  localStorage.setItem("xpLevel", user.xpLevel);
  localStorage.setItem("totalKill", user.totalKill);
  localStorage.setItem("coins", user.coins);
  restarted = true;
}

function sefToggle() {
  var sefButt = document.getElementById("sefbutton");
  if (soundEffect) {
    soundEffect = false;
    gunShot.muted = true;
    sefButt.style.backgroundColor = "red";
  }
  else {
    soundEffect = true;
    gunShot.muted = false;
    sefButt.style.backgroundColor = "rgb(0, 0, 150)"
  }
}

function changeSkin() {
  hs.remove();
  killHomeAnimate = true;
  posSkinX = 14;
  posSkinY = 14;


  document.body.appendChild(skinScreen);

  skinContainer.style.width = "574";
  skinContainer.style.height = "650";
  skinContainer.style.backgroundColor = "black";
  skinContainer.style.position = "absolute";
  skinContainer.style.left = "50%";
  skinContainer.style.top = "50";
  skinContainer.style.marginLeft = "-287px";
  skinScreen.appendChild(skinContainer);

  for (let i = 0; i < 9; ++i) {
    //if (skinList[i][5] == true) {

      if (skinList[i][6] == 1) {
        skincard[i].style.backgroundColor = "gray";
      }
      else if (skinList[i][6] == 2) {
        skincard[i].style.backgroundColor = "blue";
      }
      else {
        skincard[i].style.backgroundColor = "#D4AF37";
      }
      skincard[i].style.width = "126";
      skincard[i].style.height = "198";
      skincard[i].style.left = posSkinX;
      skincard[i].style.top = posSkinY;
      posSkinX += 140;
      if (i % 4 == 3) {
        posSkinX = 14;
        posSkinY += 212;
      }
      skincard[i].style.position = "absolute";
      skincard[i].style.borderRadius = "10px";
      skincard[i].style.filter = "brightness(100%)";
      skincard[i].id = skinList[i][7];
      skincard[i].onclick = function() {attachSkin(i);
      }
      skinContainer.appendChild(skincard[i]);
      let skinImg = document.createElement("img");
      skinImg.src = skinList[i][0];
      skinImg.style.position = "absolute";
      skinImg.style.left = "21";
      skinImg.style.top = "10";
      skincard[i].appendChild(skinImg);

      let skinsName = document.createElement("h1");
      skinsName.innerHTML = skinList[i][7];
      skinsName.style.position = "absolute";
      skinsName.style.fontSize = "20px";
      skinsName.style.bottom = "-2";
      skinsName.style.textShadow = "0px 4px 0px rgb(0, 0, 150)"
      skinsName.style.webkitTextStroke = "0.5px white"
      skinsName.style.left = "1.5px"
      skincard[i].appendChild(skinsName);

      if (parseInt(user.skin) == i) {
        skincard[i].style.borderStyle = "solid";
        skincard[i].style.borderWidth = "1px";
        skincard[i].style.borderColor = "white";
      }
      if (skinList[i][5] == "false") {
        skincard[i].style.filter = "brightness(50%)";
        skincard[i].onclick = function() {tellToShop();}
      }

  }
}

function attachSkin(x) {
  document.getElementById(skinList[parseInt(user.skin)][7]).style.borderWidth = "0px";
  user.skin = x;
  localStorage.setItem("skin", x);
  document.getElementById(skinList[x][7]).style.borderWidth = "1";
  document.getElementById(skinList[x][7]).style.borderStyle = "solid";
  document.getElementById(skinList[x][7]).style.borderColor = "white";
}

function setLeaderBoard() {
  L1st.innerHTML = sorted[4].score;
  L1stn.innerHTML = "1. " + sorted[4].name;
  L2nd.innerHTML = sorted[3].score;
  L2ndn.innerHTML = "2. " + sorted[3].name;
  L3rd.innerHTML = sorted[2].score;
  L3rdn.innerHTML = "3. " + sorted[2].name;
  L4th.innerHTML = sorted[1].score;
  L4thn.innerHTML = "4. " + sorted[1].name;
  L5th.innerHTML = sorted[0].score;
  L5thn.innerHTML = "5. " + sorted[0].name;
}
function tellToShop() {
  console.log("not owned");
}

function getRndInteger() {
  return Math.floor(Math.random() *(lootList.length-1));
}

let prizeNum;
function whatsInside() {
if (user.coins >= 1000) {
  user.coins -= 1000;
  let skinsName = document.createElement("h1");
  shopScreen.remove();
  prizeNum = getRndInteger();
  if (lootList[prizeNum][6] == 3) {
    prizeNum = getRndInteger();
  }
  chest4.src = "https://pbs.twimg.com/media/Em-lWzbWMAkiYNF?format=png&name=240x240";
  chest4.style.position = "absolute";
  chest4.style.left = "38%"
  chest4.style.top = "30%"
  chest4.style.width = "24%";
  chest4.style.height = "40%";
  chest4.onclick = function() {
    chest4.src = "https://pbs.twimg.com/media/EnKDIycXUAAF1cP?format=png&name=240x240";
    gunShot.src = "chestopen.mp3";
    gunShot.autoplay = true;
    document.body.appendChild(gunShot);
    skincar4.style.width = "14%";
    skincar4.style.height = "40%";
    skincar4.style.left = "43%";
    skincar4.style.top = "30%";
    skincar4.style.position = "absolute";
    skincar4.style.borderRadius = "10px";
    document.body.appendChild(skincar4);
    if (lootList[prizeNum][6] == 3) {
      skincar4.style.backgroundColor = "#D4AF37";
    }
    else if (lootList[prizeNum][6] == 3) {
      skincar4.style.backgroundColor = "blue";
    }
    else {
      skincar4.style.backgroundColor = "gray";
    }

    if (prizeNum >= 5) {
      if (lootList[prizeNum][5] = "false") {
      lootList[prizeNum][5] = "true";
      localStorage.setItem(lootList[prizeNum][7], true);
    }
    else {
      user.coins += 500;
    }
    prizeImg.src = lootList[prizeNum][0];
    prizeImg.style.position = "absolute";


    prizeImg.style.left = "47%";
    prizeImg.style.top = "33.5%";
    document.body.appendChild(prizeImg);


    skinsName.innerHTML = lootList[prizeNum][7];
    skinsName.style.position = "absolute";
    skinsName.style.fontSize = "20px";
    skinsName.style.bottom = "-2";
    skinsName.style.textShadow = "0px 4px 0px rgb(0, 0, 150)"
    skinsName.style.webkitTextStroke = "0.5px white"
    skinsName.style.left = "1.5px"
    skincar4.appendChild(skinsName);
    }

    else {
      user.coins+=lootList[prizeNum];
      prizeImg.src = "https://pbs.twimg.com/media/Em9crvtWEAEYRZa?format=png&name=120x120";
      prizeImg.style.position = "absolute";
      prizeImg.style.left = "47%";
      prizeImg.style.top = "33.5%";

      skinsName.innerHTML = lootList[prizeNum];
      skinsName.style.position = "absolute";
      skinsName.style.fontSize = "20px";
      skinsName.style.bottom = "-2";
      skinsName.style.textShadow = "0px 4px 0px rgb(0, 0, 150)"
      skinsName.style.webkitTextStroke = "0.5px white"
      skinsName.style.left = "34%"
      skincar4.appendChild(skinsName);
      document.body.appendChild(prizeImg);
    }
    prizeImg.onclick = function() {
      localStorage.setItem("coins", user.coins);
      skinsName.remove();
      skincar4.remove();
      chest4.remove();
      prizeImg.remove();
      fromHome = false;
      enterShop();
    }
  }
  document.body.appendChild(chest4);

}
}

function pauseGame() {
  for (let i = 0; i < user.currLevel; ++i) {
    monsters[i].doPause();
}
  clearInterval(inter);
  pauseScreen = document.createElement("div");
  var resumeButton = document.createElement("button");
  var quitButton = document.createElement("button");
  resumeButton.onclick = function() {
    for (let i = 0; i < user.currLevel; ++i) {
      monsters[i].doUnPause2();
  }
    pauseScreen.remove();
  }
  quitButton.onclick = function() {
    if (gameDone) {
      dagame.remove();
      gameover.remove();
      document.body.appendChild(homescreendiv);
    }
    isQuitted = true;
    user.currHealth = 0;
    for (let i = 0; i < user.currLevel; ++i) {
      monsters[i].doUnPause2();
  }

    pauseScreen.remove();
  }
  resumeButton.innerHTML = "RESUME";
  quitButton.innerHTML = "QUIT";
  pauseScreen.appendChild(resumeButton);
  pauseScreen.appendChild(quitButton);
  dagame.appendChild(pauseScreen);
  resumeButton.style.position = "absolute";
  quitButton.style.position = "absolute";
  resumeButton.style.width = "15%";
  quitButton.style.width = "15%";
  resumeButton.style.height = "7%";
  quitButton.style.height = "7%";
  resumeButton.style.top = "10%";
  quitButton.style.top = "20%";
  resumeButton.style.left = "42.5%";
  quitButton.style.left = "42.5%";
}



/*slope = (parseInt(playerChar.style.left) - parseInt(img.style.left)) / (parseInt(playerChar.style.top) - parseInt(img.style.top));
if (slope == '-infinity') {
  img.style.left = parseInt(img.style.left) - 15 +'px';
}
else if (slope == -0) {
  img.style.top = parseInt(img.style.top) + 15 +'px';
}
else {
c = (slope * -1 * parseInt(img.style.left)) + parseInt(img.style.top);
f = (Math.pow(this.speed, 2) - Math.pow(parseInt(img.style.top), 2) - Math.pow(parseInt(img.style.left), 2) + (2 * parseInt(img.style.top) * c) - Math.pow(c, 2));
g = ((2*this.speed*c) - (2*parseInt(img.style.left)) - (2*parseInt(img.style.top)*this.speed)) / (2*(Math.pow(this.speed, 2) + 1));
z = Math.sqrt(Math.abs((f/(Math.pow(this.speed, 2)+1))+Math.pow(g, 2))) - g;
console.log(z);
y = (slope*z) - (slope*parseInt(img.style.left)) + parseInt(img.style.top);
img.style.left = z;
img.style.top = y;
console.log(z);
console.log(y);
}*/


/* Node* cur = L.Head;
    Node* prev = nullptr;
    Node* newNode = new Node();
    newNode -> Value = value;
    newNode -> Next = nullptr;
    newNode -> Prev = nullptr;


    while (cur != nullptr) {
        if (position == 0) {
            break;
        }
        position -= 1;
        prev = cur;
        cur = cur -> Next;
    }

    if (prev == nullptr) {
        L.Head = newNode;
        newNode -> Prev = nullptr;
        newNode -> Next = cur;
        cur -> Prev = newNode;
    }

    else if (cur == nullptr) {
        L.Tail = newNode;
        newNode -> Prev = prev;
        newNode -> Next = nullptr;
        prev -> Next = newNode;

        }
    else {
        prev -> Next = newNode;
        newNode -> Prev = prev;
        newNode -> Next = cur;
        cur -> Prev = newNode;
    } */
