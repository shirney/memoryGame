//var styles = [];
	var correctCount = 0;
	var cardCell1;
	var cardCell2;
	var totalCount = 0;
	var wait;
	window.onload = function() {
		initTable(4, level1)
	};
	function initTable(rowNumber,level) {
		var table = document.getElementById("gameTable");
		//styles = shuffleArray(styles);
		//numbers = shuffleArray(numbers);
		level.init();
		for (var i = 0; i < rowNumber; i++) {
			var row = table.insertRow(0);
			for(var j = 0; j < rowNumber; j++) {
				var cell = row.insertCell(0);
				var id = j + i*4;
				cell.id = id;
				cell.className="normal blankStyle";
				cell.addEventListener("click", function() {clickCard(this, level)});
			}
		}
	};

	function clickCard(cell, level) {
		if(cell.className.indexOf("card_style") != -1)
			return;
		totalCount++;
		level.fillCard(cell);
		if(totalCount%2 == 1) {
			cardCell1 = cell;
			cardCell2 = null;
		} else {
			cardCell2 = cell;
			if(level.isCardMatched(cardCell1, cardCell2)) {
				correctCount = correctCount + 2;
			} else {
				wait = window.setInterval(resetSelectedCards, 200);
			}
		}
		if(correctCount == 16) {
			//alert("You win");
			if(level.nextLevel != null) {
				var nextButton = document.getElementById("toNextLevel");
				nextButton.addEventListener("click", function() {nextLevel(level.nextLevel)});
				nextButton.style.setProperty("display","inline");
			}  else {
				document.getElementById("congratulation").style.setProperty("display","table");
			}


		}
		
	}

	function resetSelectedCards() {
		cardCell1.className = "normal blankStyle";
		cardCell2.className = "normal blankStyle";
		cardCell1.innerHTML = "";
		cardCell2.innerHTML = "";
		console.log("reset");
		window.clearInterval(wait);
	}

	function nextLevel(nextLevel) {
		removeRows();
		init();
		if(nextLevel != null) {
			initTable(4, nextLevel);
		}
	}
	function removeRows() {
		var table = document.getElementById("gameTable");
		while(table.firstChild) {
			table.removeChild(table.firstChild);
		}
	}

	function init() {
		correctCount = 0;
		totalCount = 0;
		usedStyleCount = 0;
		cardCell1 = null;
		cardCell2 = null;
		wait = null;
		var nextButton = document.getElementById("toNextLevel");
		nextButton.style.setProperty("display","none");
	}

	var usedStyleCount = 0;

	function shuffleArray(shuffleArray) {
		var count = shuffleArray.length, swap, temp;
		while(count>0) {
			swap = Math.floor(Math.random() * count);
			count --;
			temp = shuffleArray[count];
			shuffleArray[count] = shuffleArray[swap];
			shuffleArray[swap] = temp;
		}
		return shuffleArray;
	}