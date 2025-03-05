/* 
  NOTE: some lines were highly revised with ol' deepseek giving me inspiration (did NOT copy and paste) 
  ! removed double for loop
  ! rankDiv was originally useless, only storing the num 8. I could of just used it AS "i" but I was a dumbass
*/
const phessboard = document.getElementById("boardDIV");
const letterArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
const letterNumbers = ["1", "2", "3", "4", "5", "6", "7", "8"];
const squareStyle = `color: transparent; width: 96px; height: 96px; border: none; margin: 0px;`;
const startPosArr = {
  wking: ["e1"],
  bking: ["e8"],
  wquee: ["d1"],
  bquee: ["d8"],
  wpawn: ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  bpawn: ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  wrook: ["a1", "h1"],
  brook: ["a8", "h8"],
  wbish: ["c1", "f1"],
  bbish: ["c8", "f8"],
  wnigh: ["b1", "g1"],
  bnigh: ["b8", "g8"],
};
const squareElementsArr = [];
const pieceElementsArr = [];

let squareCreate;
let rankCreate;
let pieceCreate;

for (let rankDivs = 8; rankDivs > 0; rankDivs--) {
  rankCreate = document.createElement("div");
  rankCreate.id = rankDivs;
  rankCreate.className = rankDivs;
  rankCreate.style = `display: flex; justify-content: center;`;
  phessboard.appendChild(rankCreate);

  letterArr.forEach((eachLetter) => {
    squareCreate = document.createElement("div");
    squareCreate.id = `${eachLetter}${rankDivs}`;
    squareCreate.className = `${letterArr.indexOf(eachLetter)}`;
    squareCreate.setAttribute(
      "style",
      `background-color: rgb(207, 223, 205); ${squareStyle}`
    );
    squareElementsArr.push(squareCreate);

    if (squareCreate.className % 2 == 1 && rankCreate.className % 2 == 0) {
      squareCreate.setAttribute(
        "style",
        `background-color: rgb(68, 75, 67); ${squareStyle}`
      );
    } else if (
      squareCreate.className % 2 == 0 &&
      rankCreate.className % 2 == 1
    ) {
      squareCreate.setAttribute(
        "style",
        `background-color: rgb(68, 75, 67); ${squareStyle}`
      );
    }
    rankCreate.appendChild(squareCreate);
  });
}

// INFO: easier management of the svg sources on the board
function pieceImageDirectory(pieceType) {
  const pieceImages = {
    wking: "assets/phes/lightkingimg.svg",
    bking: "assets/phes/darkkingimg.svg",
    wquee: "assets/phes/lightqueenimg.svg",
    bquee: "assets/phes/darkqueenimg.svg",
    wpawn: "assets/phes/lightpawnimg.svg",
    bpawn: "assets/phes/darkpawnimg.svg",
    wrook: "assets/phes/lightrookimg.svg",
    brook: "assets/phes/darkrookimg.svg",
    wbish: "assets/phes/lightbishopimg.svg",
    bbish: "assets/phes/darkbishopimg.svg",
    wnigh: "assets/phes/lightknightimg.svg",
    bnigh: "assets/phes/darkknightimg.svg",
  };
  return pieceImages[pieceType];
}

// INFO: using the pieceType parameter, it places the pieces on their
// designated squares using info from startPosArr. it determines how
// many copies of that piece are needed based on the amount of elements
// on each array in startPosArr.
for (const [pieceType, positions] of Object.entries(startPosArr)) {
  positions.forEach((position) => {
    pieceCreate = document.createElement("img");
    pieceCreate.src = pieceImageDirectory(pieceType);
    pieceCreate.id = pieceType;
    pieceCreate.setAttribute("style", `width: 96px;`);
    pieceElementsArr.push(pieceCreate);

    const startPosSquare = document.getElementById(position);

    // INFO: gonna be honest, i haven't a clue what this does.
    if (startPosSquare) {
      startPosSquare.appendChild(pieceCreate);
    }
    movementMain();
  });
}

function movementMain() {
  pieceElementsArr.forEach((eachPiece) => {
    eachPiece.addEventListener("click", (pieceClick) => {
      // INFO: my saving grace :heart:
      pieceClick.stopPropagation();

      currentPieceSelect = eachPiece;
      inSelect = true;
    });
  });
  squareElementsArr.forEach((eachSquare) => {
    eachSquare.onclick = function () {
      inSelect = false;
      currentPieceSelect.remove();
      eachSquare.appendChild(currentPieceSelect);
    };
  });
}
