const array1 = [
  {
    title: "A",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "E",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "I",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "O",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "U",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
];

const array2 = [
  {
    title: "L",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "N",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "S",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "T",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "R",
    point: 1,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "D",
    point: 2,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "G",
    point: 2,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "B",
    point: 3,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "C",
    point: 3,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "M",
    point: 3,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "P",
    point: 3,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "F",
    point: 4,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "H",
    point: 4,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "V",
    point: 4,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "W",
    point: 4,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "Y",
    point: 4,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "K",
    point: 5,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "J",
    point: 8,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "X",
    point: 8,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "Q",
    point: 10,
    count: Math.floor(Math.random() * 4) + 1,
  },
  {
    title: "Z",
    point: 10,
    count: Math.floor(Math.random() * 4) + 1,
  },
];

var array22 = [];
var array11 = [];

while (array1.length !== 0) {
  let number = Math.floor(Math.random() * array1.length);
  array11.push(array1[number]);
  array1.splice(number, 1);
}

while (array2.length > 6) {
  let number = Math.floor(Math.random() * array2.length);
  array22.push(array2[number]);
  array2.splice(number, 1);
}
var Final = array11.concat(array22);
// console.log(Final);

const tites = document.getElementById("tiles");
const tilesCount = document.getElementById("tilesCount");
var Alltiles = 0;

const DisplayData = (Data) => {
  tites.innerHTML = "";
  Data?.map((item) => {
    const GridItem = document.createElement("div");
    GridItem.setAttribute("class", "tilesItem");

    const ItemAplha = document.createElement("div");
    ItemAplha.setAttribute("class", "aplpha");
    ItemAplha.innerText = item.title;

    if (item.count == 0) {
      ItemAplha.setAttribute("class", "aplphaInActive");
    }

    const count = document.createElement("div");
    count.setAttribute("class", "count");
    count.innerText = item.point;
    ItemAplha.append(count);

    GridItem.append(ItemAplha);

    Alltiles += item.count;

    for (let i = 1; i < item.count; i++) {
      const hr = document.createElement("hr");
      GridItem.append(hr);
    }

    GridItem.addEventListener("click", () => {
      if (item.count !== 0) {
        handleClick(item);
        item.count -= 1;
        Alltiles = 0;
        DisplayData(Final);
      }
    });
    tites.append(GridItem);
  });
  tilesCount.innerText = Alltiles;
};

DisplayData(Final);
var word = [];
var TotalScores = 0;
const scores = document.getElementById("scores");
const ShowWord = document.getElementById("ShowWord");
const rightbtn = document.getElementById("right");
rightbtn.style.display = "none";
const removebtn = document.getElementById("remove");
removebtn.style.display = "none";

const handleClick = (item) => {
  rightbtn.style.display = "block";
  removebtn.style.display = "block";
  word.push(item);
  let displayWord = "";
  word.map((item) => {
    displayWord += item.title;
  });
  ShowWord.innerText = displayWord;
  ScoreUpdate();
};

const ScoreUpdate = () => {
  let obj = {};
  TotalScores = 0;

  for (let i = 0; i < word.length; i++) {
    if (obj[word[i].title] == undefined) {
      obj[word[i].title] = 1;
      TotalScores += word[i].point;
    } else if (obj[word[i].title] == 1) {
      obj[word[i].title] += 1;
      TotalScores += word[i].point * 2;
    } else if (obj[word[i].title] <= 2) {
      obj[word[i].title] += 1;
      TotalScores += word[i].point * 3;
    }
  }

  scores.innerText = TotalScores;
  if (Alltiles == 0) {
    finishGame();
  }
};

const removeLastCharactor = () => {
  if (word.length > 0) {
    for (let i = 0; i < Final.length; i++) {
      if (Final[i].title === word[word.length - 1].title) {
        Final[i].count++;
      }
    }
    Alltiles = 0;
    DisplayData(Final);

    word.pop();
    let displayWord = "";
    word.map((item) => {
      displayWord += item.title;
    });
    ShowWord.innerText = displayWord;
    ScoreUpdate();
  }
  if (word.length == 0) {
    rightbtn.style.display = "none";
    removebtn.style.display = "none";
  }
};

const finishGame = () => {
  console.log("Finish Game");
  let str = "";
  word?.map((item) => {
    str += item.title;
  });

  const obj = {
    scores: TotalScores,
    str,
  };

  localStorage.setItem("gameOver", JSON.stringify(obj));

  window.location.href = "final.html";
};

const Timmer = document.getElementById("timer");
var timmer = 99;
let time = setInterval(() => {
  if (timmer == 0) {
    alert("Game Over...!");
    finishGame();
    clearInterval(time);
  } else {
    timmer--;
  }
  Timmer.innerText = timmer;
}, 1000);

