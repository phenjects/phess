"use strict";

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

for (let rankDivs = 8; rankDivs > 0; rankDivs--) {
  const letterArr = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const rankCreate = document.createElement("section");
  const phessboard = document.getElementById("phessboardID");

  rankCreate.id = rankDivs;
  rankCreate.className = rankDivs;
  rankCreate.style = `display: flex; justify-content: center;`;
  phessboard.appendChild(rankCreate);

  letterArr.forEach((eachLetter) => {
    const squareCreate = document.createElement("div");
    const squareStyle = `color: transparent; width: 96px; height: 96px; border: none; margin: 0px;`;
    squareCreate.id = `${eachLetter}${rankDivs}`;
    squareCreate.className = `${letterArr.indexOf(eachLetter)}`;
    squareCreate.setAttribute(
      "style",
      `background-color: rgb(207, 223, 205); ${squareStyle}`,
    );
    squareElementsArr.push(squareCreate);

    if (squareCreate.className % 2 == 1 && rankCreate.className % 2 == 0) {
      squareCreate.setAttribute(
        "style",
        `background-color: rgb(68, 75, 67); ${squareStyle}`,
      );
    } else if (
      squareCreate.className % 2 == 0 &&
      rankCreate.className % 2 == 1
    ) {
      squareCreate.setAttribute(
        "style",
        `background-color: rgb(68, 75, 67); ${squareStyle}`,
      );
    }
    rankCreate.appendChild(squareCreate);
  });
}

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

for (const [pieceType, positions] of Object.entries(startPosArr)) {
  positions.forEach((position) => {
    const pieceCreate = document.createElement("img");
    pieceCreate.src = pieceImageDirectory(pieceType);
    pieceCreate.id = pieceType;
    pieceCreate.dataset.color = pieceType.charAt(0);
    pieceCreate.setAttribute("style", `width: 96px;`);
    pieceElementsArr.push(pieceCreate);

    const startPosSquare = document.getElementById(position);

    startPosSquare ? startPosSquare.appendChild(pieceCreate) : console.clear();
  });
}

function movementMain() {
  let inSelect = false;
  let currentPieceSelect;

  pieceElementsArr.forEach((eachPiece) => {
    eachPiece.addEventListener("click", (piece) => {
      piece.stopPropagation();

      switch (inSelect) {
        case false:
          currentPieceSelect = eachPiece;
          inSelect = true;
          break;

        case true:
          piece.target.replaceWith(currentPieceSelect);
          inSelect = false;
          break;
      }
    });
  });
  squareElementsArr.forEach((eachSquare) => {
    eachSquare.addEventListener("click", (square) => {
      switch (inSelect) {
        case true:
          eachSquare.appendChild(currentPieceSelect);
          inSelect = false;
        case false:
          console.error("ERROR: Please select a piece on the board.");
      }
    });
  });
}

movementMain();
