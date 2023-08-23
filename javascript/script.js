// script.js
window.addEventListener("load", function () {
    const loading = document.querySelector(".loading-screen");
    const content = document.querySelector("#content");
    const images = document.querySelectorAll("img");
    const totalImages = images.length;
    let loadedImages = 0;
	
    // Function to check if all images are loaded
    function checkAllImagesLoaded() {
        loadedImages++;
        if (loadedImages === totalImages) {
            // All images are loaded
            content.style.display = "block";
			loading.style.display = "none";
        }
    }

    // Preload images
    images.forEach((img) => {
        if (img.complete) {
            checkAllImagesLoaded();
        } else {
            img.addEventListener("load", checkAllImagesLoaded);
        }
        img.addEventListener("error", checkAllImagesLoaded); // In case of an error loading the image
    });
});




var currentVolume = 0;
function musicFunction(mapNumber) {
	for (var i = 1; i < 8; i++) {
		if (i != 2) {
			var music = document.getElementById("music" + i);
			music.load();
		}
	}
	if (mapNumber == 2 || mapNumber == 8 || mapNumber == 9) {
		mapNumber = 1;
	}
	if (mapNumber == 10) {
		mapNumber = 7;
	}
	music = document.getElementById("music" + mapNumber);
	music.load();
	music.play();
	if (mapNumber == 7 && currentVolume > 0) {
		currentVolume = 0.25;
	} else if (mapNumber == 5 && currentVolume > 0) {
		currentVolume = 0.85;
	} else if (mapNumber == 3 || mapNumber == 4) {
		if (currentVolume > 0) {
			currentVolume = 1;
		}
	} else if (mapNumber == 1 || mapNumber == 2 || mapNumber == 8 || mapNumber == 9) {
		if (currentVolume > 0) {
			currentVolume = 0.5;
		}
	} else if (mapNumber == 6 && currentVolume > 0) {
		currentVolume = 0.9;
	} 
	music.volume = currentVolume;
	music.loop = true;
}
// ---------------------------------------------------------------------- 

var musicState = false;
function musicStateFunction() {
	if(musicState == false) {
		musicState = true;
		document.getElementById("music1").volume = 0.5;
		document.getElementById("music3").volume = 1;
		document.getElementById("music4").volume = 1;
		document.getElementById("music5").volume = 0.85;
		document.getElementById("music6").volume = 0.9;
		document.getElementById("music7").volume = 0.25;
		currentVolume = 1;
		if (language == "german") {
			document.getElementById("musicStatePic").src = "source/settings/soundOnGer.png"
		} else {
			document.getElementById("musicStatePic").src = "source/settings/soundOnEng.png"
		}
	} else {
		musicState = false;
		for (var i = 1; i < 8; i++) {
			if (i != 2) {
				var music = document.getElementById("music" + i);
				music.volume = 0;
				currentVolume = 0;
			}
		}
		if (language == "german") {
			document.getElementById("musicStatePic").src = "source/settings/soundOffGer.png"
		} else {
			document.getElementById("musicStatePic").src = "source/settings/soundOffEng.png"
		}
	}
}
// ---------------------------------------------------------------------- 

var rollingSoundEffectState = false;
function rollingSoundEffectFunction() {
	if(rollingSoundEffectState == false) {
		rollingSoundEffectState = true;
		if (language == "german") {
			document.getElementById("soundEffectPic").src = "source/settings/soundOnGer.png"
		} else {
			document.getElementById("soundEffectPic").src = "source/settings/soundOnEng.png"
		}
	} else {
		rollingSoundEffectState = false;
		if (language == "german") {
			document.getElementById("soundEffectPic").src = "source/settings/soundOffGer.png"
		} else {
			document.getElementById("soundEffectPic").src = "source/settings/soundOffEng.png"
		}
	}
}
// ---------------------------------------------------------------------- 

function rollingSoundFunction() { 
	var rollingSound = document.getElementById("rollingSound");
	rollingSound.load();
	rollingSound.play();
	rollingSound.volume = 0.75;
//	document.getElementById("rollingSound").loop = true;
}
// ---------------------------------------------------------------------- 

var oddsCurrent = 1;
function heroesOddsFunction(tabNumber) {
	// just when button is not already pressed
	if (oddsCurrent != tabNumber) {	
		// highlight clicked button
		for (var i = 1; i < 6; i++) {
			if (i == tabNumber) {
				//	source/settings/oddsButton1On.png
				document.getElementById("heroesOddsPic" + i).src = "source/settings/oddsButton" + i + "On.png";
				oddsCurrent = i;
			} else {
				document.getElementById("heroesOddsPic" + i).src = "source/settings/oddsButton" + i + "Off.png";
			}
		}
		// reset odds
		heroClassOdds = [];
		if (oddsCurrent == 1) {
			// set odds for button 1
			eliteOdds = 60;
			sacrificeOdds = 25;
			ordinaryOdds = 10;
			legendaryOdds = 5;	
		} else if (oddsCurrent == 2) {
			// set odds for button 2
			eliteOdds = 57;
			sacrificeOdds = 24;
			ordinaryOdds = 9;
			legendaryOdds = 10;	
		} else if (oddsCurrent == 3) {
			// set odds for button 3
			eliteOdds = 51;
			sacrificeOdds = 21;
			ordinaryOdds = 8;
			legendaryOdds = 20;	
		} else if (oddsCurrent == 4) {
			// set odds for button 4
			eliteOdds = 32;
			sacrificeOdds = 13;
			ordinaryOdds = 5;
			legendaryOdds = 50;	
		} else if (oddsCurrent == 5) {
			// set odds for button 5
			eliteOdds = 0;
			sacrificeOdds = 0;
			ordinaryOdds = 0;
			legendaryOdds = 100;	
		}
		// add hero chances
		for(var i = 0; i < eliteOdds; i++) {
			heroClassOdds.push("Elite");
		}
		for(var i = 0; i < sacrificeOdds; i++) {
			heroClassOdds.push("Sacrifice");
		}
		for(var i = 0; i < ordinaryOdds; i++) {
			heroClassOdds.push("Ordinary");
		}
		for(var i = 0; i < legendaryOdds; i++) {
			heroClassOdds.push("Legendary");
		}
	}
}
// ---------------------------------------------------------------------- 

// additional heroes button
var heroesOption = "standard";
function heroesOptionButtonFunction() {
	var heroesOptionButton = document.getElementById("heroesOptionButtonPic");
	var heroesOptionInfo = document.getElementById("heroesOptionInfo");
	if (heroesOption == "standard") {
		heroesOption = "event";
		if (language == "english") {
			heroesOptionButton.src = "source/settings/heroesEventEng.png";
		} else {
			heroesOptionButton.src = "source/settings/heroesEventGer.png";
		}
		heroesOptionInfo.innerHTML = rollOptionEvent;
	} else if (heroesOption == "event") {
		heroesOption = "japan";
		if (language == "english") {
			heroesOptionButton.src = "source/settings/heroesJapanEng.png";
		} else {
			heroesOptionButton.src = "source/settings/heroesJapanGer.png";
		}
		heroesOptionInfo.innerHTML = rollOptionJapan;
	} else if (heroesOption == "japan") {
		heroesOption = "all";
		if (language == "english") {
			heroesOptionButton.src = "source/settings/heroesAllEng.png";
		} else {
			heroesOptionButton.src = "source/settings/heroesAllGer.png";
		}
		heroesOptionInfo.innerHTML = rollOptionAll;
	} else if (heroesOption == "all") {
		heroesOption = "standard";
		if (language == "english") {
			heroesOptionButton.src = "source/settings/heroesStandardEng.png";
		} else {
			heroesOptionButton.src = "source/settings/heroesStandardGer.png";
		}
		heroesOptionInfo.innerHTML = rollOptionStandard;
	} else {
		alert("error -> heroesOption: " + heroesOption);
	}
}
// ---------------------------------------------------------------------- 

var evolutionState = false;
var nonEvoSrc = [];
function evolutionFunction() {
	var evolutionButtonPic = document.getElementById("evolutionButtonPic");
	if (evolutionState == false) {
		evolutionState = true;
		// image change
		if (language == "german") {
			evolutionButtonPic.src = "source/settings/soundOnGer.png"
		} else {
			evolutionButtonPic.src = "source/settings/soundOnEng.png"
		}
		// hero change
		for (var ii = 1; ii < 4; ii++) {
			// heroes src change
			var element = document.getElementById("box" + ii + "herobox").children;
			for (var i = 0; i < element.length; i++) {
				element[i].src = "source/heroes/heroesEvo/" + heroesEng[i] + ".png";
			}
		}
		// complete animation changes
		for (var i = 1; i < 4; i++) {
			// light ring change
			document.getElementById("box" + i + "purpleLightRingPic").src = "source/heroes/animations/purpleLightRingEvo.png";
			// light stripes change
			document.getElementById("box" + i + "purpleLightStripes").src = "source/heroes/animations/purpleLightStripesEvo.png";
			// light stars change
			var element = document.getElementById("box" + i + "purpleLightStars").children;
			for (ii = 0; ii < element.length; ii++) {
				element[ii].src = "source/heroes/animations/purpleLightStarsEvo.png";
			}
			// light bars change
			var element = document.getElementById("box" + i + "purpleLightBar").children;
			for (ii = 0; ii < element.length; ii++) {
				element[ii].src = "source/heroes/animations/purpleLightBarEvo.png";
			}
			// light circle change
			document.getElementById("box" + i + "purpleLightCircle").src = "source/heroes/animations/purpleLightCircleEvo.png";
			// light change
			document.getElementById("box" + i + "purpleLight").src = "source/heroes/animations/purpleLightEvo.png";
			// purple box change
			document.getElementById("box" + i + "purpleBox").src = "source/background/purpleBoxEvo.png";
		}
	} else {
		evolutionState = false;
		// image change
		if (language == "german") {
			evolutionButtonPic.src = "source/settings/soundOffGer.png"
		} else {
			evolutionButtonPic.src = "source/settings/soundOffEng.png"
		}
		// hero change
		for (var ii = 1; ii < 4; ii++) {
			// heroes src change
			var element = document.getElementById("box" + ii + "herobox").children;
			for (var i = 0; i < element.length; i++) {
				element[i].src = "source/heroes/heroesNormal/" + heroesEng[i] + ".png";
			}
		}
		// complete animation changes
		for (var i = 1; i < 4; i++) {
			// light ring change
			document.getElementById("box" + i + "purpleLightRingPic").src = "source/heroes/animations/purpleLightRing.png";
			// light stripes change
			document.getElementById("box" + i + "purpleLightStripes").src = "source/heroes/animations/purpleLightStripes.png";
			// light stars change
			var element = document.getElementById("box" + i + "purpleLightStars").children;
			for (ii = 0; ii < element.length; ii++) {
				element[ii].src = "source/heroes/animations/purpleLightStars.png";
			}
			// light bars change
			var element = document.getElementById("box" + i + "purpleLightBar").children;
			for (ii = 0; ii < element.length; ii++) {
				element[ii].src = "source/heroes/animations/purpleLightBar.png";
			}
			// light circle change
			document.getElementById("box" + i + "purpleLightCircle").src = "source/heroes/animations/purpleLightCircle.png";
			// light change
			document.getElementById("box" + i + "purpleLight").src = "source/heroes/animations/purpleLight.png";
			// purple box change
			document.getElementById("box" + i + "purpleBox").src = "source/background/purpleBox.png";
		}
	}
	// rolled heroes disappear on button toggle
	/*
	backgroundDisplayReset();
	heroNameDisplayReset();
	animationPurpleLightReset();
	animationPurpleLightCircleReset();
	animationPurpleLightStarsReset();
	animationPurpleLightBarReset();
	animationRingReset();
	animationSpawnReset();
	animationLightReset();
	animationLightStripesReset();
	animationLightRotationReset();
	animationLightStarsReset();
	*/
}



function languageChange() {
	if (language == "english") {
		document.getElementById("languageButton").src = "source/settings/language_german.png";
		language = "german";
	} else {
		document.getElementById("languageButton").src = "source/settings/language_english.png";
		language = "english";
	}
	languageFunction();
}

var mapNumberRound = 1;
function mapNumberRoundFunction() {
	if (mapNumberRound == 1) {
		mapNumberRound = 2;
		document.getElementById("mapArrow").src = "source/settings/arrowLeft.png";
		for (var i = 1; i < 6; i++) {
			document.getElementById("mapButton" + i).src = "source/maps/coupon" + (i + 5) + ".png";
		}
	} else {
		mapNumberRound = 1;
		document.getElementById("mapArrow").src = "source/settings/arrowRight.png";
		for (var i = 1; i < 6; i++) {
			document.getElementById("mapButton" + i).src = "source/maps/coupon" + i + ".png";
		}
	}
}

var mapHeadlineState = false;
function mapHeadlineFunction() {
	var mapHeadline = document.getElementById("mapHeadline");
	if (mapHeadlineState == false) {
		mapHeadlineState = true;
		document.getElementById("all3").style.opacity = 0;
		mapHeadline.style.color = "#2d2d2d";
		mapHeadline.style.textShadow = "1.5px 0px 1.5px white, -1.5px 0px 1.5px white, 0px -0.75px 0.75px white, 0px 2px 2px white"; 
	} else {
		mapHeadlineState = false;
		document.getElementById("all3").style.opacity = 0.75;
		mapHeadline.style.color = "white";
		mapHeadline.style.textShadow = "1.5px 0px 1.5px black, -1.5px 0px 1.5px black, 0px -0.75px 0.75px black, 0px 2px 2px black"; 
	}
}

function mapChange(mapNumber) {
	// background change
	if (mapNumberRound == 1) {
		document.getElementById("all2").src = "source/maps/background" + mapNumber + ".png";
		musicFunction(mapNumber);
	} else {
		document.getElementById("all2").src = "source/maps/background" + (mapNumber + 5) + ".png";
		musicFunction(mapNumber + 5);
	}
}

var frameSetting = false;
function frameSettingFunction() {
	var frameRoll = document.getElementById("frameRoll");
	var frameRollSettings = document.getElementById("frameRollSettings");
	var settingsButton = document.getElementById("settingsButton");
	var headline = document.getElementById("rollHeadline");
	if(frameSetting == false) {
		frameSetting = true;
		frameRoll.style.visibility = "hidden";
		frameRollSettings.style.display = "block";
		settingsButton.src = "source/background/setting2.png";
		headline.innerHTML = settingsHeadline;
	} else {
		frameSetting = false;
		frameRoll.style.visibility = "visible";
		frameRollSettings.style.display = "none";
		settingsButton.src = "source/background/setting.png";
		headline.innerHTML = rollHeadline;
	}
}

// all global variables
var language, heroesEng, heroesGer, ratio, ccWindow, centerWidth, centerHeight, randNum1, randNum2, randNum3, hero1, hero2, hero3, heroClass1, heroClass2, heroClass3;
// ----------------------------------------------------------------------

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.addEventListener("pageshow", languageFunction);
// language:
language = "german";
function languageFunction() {
	if (language == "english") {
		allTab = "All";
		legendaryTab = "Legend";
		eliteTab = "Elite";
		ordinaryTab = "Ordinary";
		sacrificeTab = "Sacrifice";
		rollHeadline = "Hire Heroes";
		settingsHeadline = "Settings";
		rollOptionStandard = "* Rolling for default heroes <br> &nbsp&nbsp like in the game.";
		rollOptionEvent = "* Rolling for default and <br> &nbsp&nbsp Event heroes.";
		rollOptionJapan = "* Rolling for default and <br> &nbsp&nbsp Japanise heroes.";
		rollOptionAll = "* Rolling for default, Event <br> &nbsp&nbsp and Japanise heroes.";
		heroesOddsHeadline = "Legendary Chances:";
		copyrightInfo = 
			'&#9400IGG Inc. All Rights Reserved.<br>' +
			'This is just a Fanmade Simulator.<br>' +
			'The chances for rolling each hero are based on estimations. <i class="fa fa-exclamation-circle"></i>'
		mapHeadlineText = "Maps:";
	}
	if (language == "german") {
		allTab = "Alle";
		legendaryTab = "Legende";
		eliteTab = "Elite";
		ordinaryTab = "Gewöhnlich";
		sacrificeTab = "Opfer";
		rollHeadline = "Helden anwerben";
		settingsHeadline = "Einstellungen";
		rollOptionStandard = "* Anwerben von Helden <br> &nbsp&nbsp wie im Spiel.";
		rollOptionEvent = "* Zusätzliches Anwerben <br> &nbsp&nbsp von Event Helden.";
		rollOptionJapan = "* Zusätzliches Anwerben <br> &nbsp&nbsp von Japanischen Helden.";
		rollOptionAll = "* Zusätzliches Anwerben von <br> &nbsp&nbsp Event & Japanischen Helden.";
		heroesOddsHeadline = "Legendäre Chancen:";
		copyrightInfo = 	
			'&#9400IGG Inc. Alle Rechte vorbehalten.<br>' +
			'Das ist nur ein selbst erstellter Simulator.<br>' +
			'Die Chancen für Helden basieren auf Vermutungen. <i class="fa fa-exclamation-circle"></i>'
		mapHeadlineText = "Welten:";
	}
	// storage tab change (big)
	if ((heroCardNumberpurple + heroCardNumberblue + heroCardNumbergreen + heroCardNumbersacrifice) != 0) {
		document.getElementById("storageFlagBigName1").innerHTML = 
			allTab + "<br>" + "(" +
			(heroCardNumberpurple + 
			heroCardNumberblue + 
			heroCardNumbergreen +
			heroCardNumbersacrifice) +
			")";
	} else {
		document.getElementById("storageFlagBigName1").innerHTML =
			allTab + "<br>" + "<br>";
	}
	if (heroCardNumberpurple != 0) {
		document.getElementById("storageFlagBigName2").innerHTML = 
			legendaryTab + "<br>" + "(" + 
			heroCardNumberpurple + ")";
	} else {
		document.getElementById("storageFlagBigName2").innerHTML = 
			legendaryTab + "<br>" + "<br>";
	}
	if (heroCardNumberblue != 0) {
		document.getElementById("storageFlagBigName3").innerHTML = 
			eliteTab + "<br>" + "(" +
			heroCardNumberblue + ")";
	} else {
		document.getElementById("storageFlagBigName3").innerHTML = 
			eliteTab + "<br>" + "<br>";
	}
	if (heroCardNumbergreen != 0) {
		document.getElementById("storageFlagBigName4").innerHTML =
			ordinaryTab + "<br>" + "(" + 
			heroCardNumbergreen + ")";
	} else {
		document.getElementById("storageFlagBigName4").innerHTML = 
			ordinaryTab + "<br>" + "<br>";
	}
	if (heroCardNumbersacrifice != 0) {
		document.getElementById("storageFlagBigName5").innerHTML =
			sacrificeTab + "<br>" + "(" + 
			heroCardNumbersacrifice + ")";
	} else {
		document.getElementById("storageFlagBigName5").innerHTML = 
			sacrificeTab + "<br>" + "<br>";
	}
	// storage tab change (small)
	document.getElementById("storageFlagSmallName1").innerHTML = allTab;
	document.getElementById("storageFlagSmallName2").innerHTML = legendaryTab;
	document.getElementById("storageFlagSmallName3").innerHTML = eliteTab;
	document.getElementById("storageFlagSmallName4").innerHTML = ordinaryTab;
	document.getElementById("storageFlagSmallName5").innerHTML = sacrificeTab;
	// headline
	if (frameSetting == false) {
		// rolling headline change
		document.getElementById("rollHeadline").innerHTML = rollHeadline;
	} else {
		// settings headline change
		document.getElementById("rollHeadline").innerHTML = settingsHeadline;
	}
	// language image
	document.getElementById("languageButton").src = `source/settings/language_${language}.png`;
	// current hero name change
	for (var ii = 1; ii < 4; ii++) {
		var element = document.getElementById("box" + ii + "heroName").innerHTML;
		for (var i = 0; i < heroesEng.length; i++) {
			if (heroesEng[i] == element || heroesGer[i] == element) {
				if (language == "german") {
					document.getElementById("box" + ii + "heroName").innerHTML = heroesGer[i];
				} else {
					document.getElementById("box" + ii + "heroName").innerHTML = heroesEng[i];
				}
			}
		}
	}
	// current hero hiding in storage
	document.getElementById("storageHero").style.opacity = 0;
	// heroes option button change
	if (heroesOption == "all") {
		if (language == "english") {
			document.getElementById("heroesOptionButtonPic").src = "source/settings/heroesAllEng.png";
		} else {
			document.getElementById("heroesOptionButtonPic").src = "source/settings/heroesAllGer.png";
		}
	} else if (heroesOption == "standard") {
		if (language == "english") {
			document.getElementById("heroesOptionButtonPic").src = "source/settings/heroesStandardEng.png";
		} else {
			document.getElementById("heroesOptionButtonPic").src = "source/settings/heroesStandardGer.png";
		}
	} else if (heroesOption == "event") {
		if (language == "english") {
			document.getElementById("heroesOptionButtonPic").src = "source/settings/heroesEventEng.png";
		} else {
			document.getElementById("heroesOptionButtonPic").src = "source/settings/heroesEventGer.png";
		}
	} else if (heroesOption == "japan") {
		if (language == "english") {
			document.getElementById("heroesOptionButtonPic").src = "source/settings/heroesJapanEng.png";
		} else {
			document.getElementById("heroesOptionButtonPic").src = "source/settings/heroesJapanGer.png";
		}
	}
	// rolling option info text
	var heroesOptionInfo = document.getElementById("heroesOptionInfo");
	if (heroesOption == "standard") {
		heroesOptionInfo.innerHTML = rollOptionStandard;
	} else if (heroesOption == "event") {
		heroesOptionInfo.innerHTML = rollOptionEvent;
	} else if (heroesOption == "japan") {
		heroesOptionInfo.innerHTML = rollOptionJapan;
	} else if (heroesOption == "all") {
		heroesOptionInfo.innerHTML = rollOptionAll;
	}
	// heroes odds headline
	document.getElementById("heroesOddsInfo").innerHTML = heroesOddsHeadline;
	// copyright text
	document.getElementById("iggInfo").innerHTML = copyrightInfo;
	// sound button adapt
	if(rollingSoundEffectState == false) {
		if (language == "german") {
			document.getElementById("soundEffectPic").src = "source/settings/soundOffGer.png"
		} else {
			document.getElementById("soundEffectPic").src = "source/settings/soundOffEng.png"
		}
	} else {
		if (language == "german") {
			document.getElementById("soundEffectPic").src = "source/settings/soundOnGer.png"
		} else {
			document.getElementById("soundEffectPic").src = "source/settings/soundOnEng.png"
		}
	}
	// music button adapt
	if(musicState == false) {
		if (language == "german") {
			document.getElementById("musicStatePic").src = "source/settings/soundOffGer.png"
		} else {
			document.getElementById("musicStatePic").src = "source/settings/soundOffEng.png"
		}
	} else {
		if (language == "german") {
			document.getElementById("musicStatePic").src = "source/settings/soundOnGer.png"
		} else {
			document.getElementById("musicStatePic").src = "source/settings/soundOnEng.png"
		}
	}
	// evolution button adapt
	if(evolutionState == false) {
		if (language == "german") {
			document.getElementById("evolutionButtonPic").src = "source/settings/soundOffGer.png"
		} else {
			document.getElementById("evolutionButtonPic").src = "source/settings/soundOffEng.png"
		}
	} else {
		if (language == "german") {
			document.getElementById("evolutionButtonPic").src = "source/settings/soundOnGer.png"
		} else {
			document.getElementById("evolutionButtonPic").src = "source/settings/soundOnEng.png"
		}
	}
	// map headline adapt
	document.getElementById("mapHeadline").innerHTML = mapHeadlineText;
}
// ----------------------------------------------------------------------

// english hero names
heroesEng = [
	"Alchemist",
	"Angel",
	"Anubis",
	"Arctica",
	"Aries",
	"Assassin",
	"Athene",
	"Atlanticore",
	"Beast Tamer",
	"Candy Kane",
	"Champion",
	"Crystal Ooze",
	"Cupid",
	"Cyclops",
	"Death Knight",
	"Demogorgon",
	"Destroyer",
	"Dracax",
	"Dread Drake",
	"Druid",
	"Dryad",
	"Engineer",
	"Executioner",
	"Exorcist",
	"Creation-01",
	"Frost Witch",
	"Gelatinous Champion",
	"Ghoulem",
	"Great Sage",
	"Grimfiend",
	"Grizzly Reaper",
	"Gunslinger",
	"Harpy Queen",
	"Heartbreaker",
	"Hill Giant",
	"Ice Demon",
	"Immortep",
	"Juggernaut",
	"Kungfu Master",
	"Lady Leo",
	"Lil Nick",
	"Marauder",
	"Marksman",
	"Master Slime",
	"Mechtessa",
	"Medusa",
	"Michael",
	"Minotaur Chieftain",
	"Moltanica",
	"Ninja",
	"Orksbane",
	"Pain-Da",
	"Paladin",
	"Phantom Fighter",
	"Phantom King",
	"Pixie",
	"Pumpkin Duke",
	"Revenant",
	"Rockno",
	"Ronin",
	"Santa Boom",
	"Serpent Queen",
	"Shaman",
	"Siren",
	"Skeletica",
	"Skull Knight",
	"Slime",
	"Snowzilla",
	"Spirit Mage",
	"Succubus",
	"Thunder God",
	"Treantaur",
	"Triton",
	"Trixie Treat",
	"Valentina",
	"Vlad Dracula",
	"Wallawalla",
	"Warlock",
	"Werewolf",
];
// german hero names
heroesGer = [
	"Alchemist",
	"Engel",
	"Anubis",
	"Arktika",
	"Aries",
	"Assassine",
	"Athene",
	"Atlanticore",
	"Biestmeister",
	"Candy Kane",
	"Champion",
	"Kristallschleim",
	"Eros",
	"Zyklop",
	"Todesritter",
	"Electrica",
	"Zerstörer",
	"Dracax",
	"Kapitän Weißbart",
	"Druide",
	"Dryade",
	"Ingenieur",
	"Henker",
	"Exorzist",
	"Schöpfung 1.0",
	"Frosthexe",
	"Gallertchampion",
	"Gargoyle",
	"Großer Sage",
	"Grimfiend",
	"Schnitter",
	"Rose",
	"Harpienkönigin",
	"Lady Boom",
	"Bergriese",
	"Eisdemon",
	"Immortep",
	"Juggernaut",
	"Kungfu Meister",
	"Lady Leo",
	"Rudolph",
	"Marodeur",
	"Scharfschütze",
	"Meisterschleim",
	"Mechtessa",
	"Medusa",
	"Michael",
	"Minotauros",
	"Moltanica",
	"Ninja",
	"Orksbane",
	"Pain-Da",
	"Paladin",
	"Phantomkämpfer",
	"Phantomkönig",
	"Pixie",
	"Kürbis Herzog",
	"Wiedergänger",
	"Rockno",
	"Ronin",
	"Santa Boom",
	"Schlangenkönigin",
	"Shamane",
	"Kalypso",
	"Skeletica",
	"Schädelkrieger",
	"Schleim",
	"Snowzilla",
	"Geistmagier",
	"Sukkubus",
	"Donnergott",
	"Treantaur",
	"Triton",
	"Kürbis Hexe",
	"Valentina",
	"Vlad Dracula",
	"Wallawalla",
	"Hexenmeister",
	"Werwolf",
];

// A L L   O D D S
// odds for different classes in %
var heroClassOdds = [];

var eliteOdds = 60;
var sacrificeOdds = 25;
var ordinaryOdds = 10;
var legendaryOdds = 5;

//
for(var i = 0; i < eliteOdds; i++) {
	heroClassOdds.push("Elite");
}
for(var i = 0; i < sacrificeOdds; i++) {
	heroClassOdds.push("Sacrifice");
}
for(var i = 0; i < ordinaryOdds; i++) {
	heroClassOdds.push("Ordinary");
}
for(var i = 0; i < legendaryOdds; i++) {
	heroClassOdds.push("Legendary");
}

// odds in sacrifice class in %
var heroSacrificeOdds = [];
var crystaloozeOdds = 85;
var gelatinouschampionOdds = 15;
for(var i = 0; i < crystaloozeOdds; i++) {
	heroSacrificeOdds.push("Crystal Ooze");
}
for(var i = 0; i < gelatinouschampionOdds; i++) {
	heroSacrificeOdds.push("Gelatinous Champion");
}

// odds in legendary class in %
var heroLegendaryOdds = [];
var shardOdds = 45;
var gemOdds = 55;
for(var i = 0; i < shardOdds; i++) {
	heroLegendaryOdds.push("Shard");
}
for(var i = 0; i < gemOdds; i++) {
	heroLegendaryOdds.push("Gem");
}

// odds in elite class
var heroEliteOdds = [
    "Assassin",
    "Cyclops",
    "Executioner",
    "Ice Demon",
    "Pain-Da",
    "Serpent Queen",
    "Shaman",
    "Triton",
    "Werewolf"
];
// odds in elite class with japanise
var heroEliteOddsJapan = [
    "Assassin",
    "Cyclops",
    "Executioner",
    "Ice Demon",
    "Juggernaut",
    "Kungfu Master",
    "Pain-Da",
    "Serpent Queen",
    "Shaman",
    "Triton",
    "Werewolf"
];

// odds in ordinary class
var heroOrdinaryOdds = [
    "Alchemist",
    "Angel",
    "Dryad",
    "Engineer",
    "Frost Witch",
    "Hill Giant",
    "Marauder",
    "Marksman"
];

// odds in shard class
var heroShardOdds = [
    "Atlanticore",
    "Champion",
    "Druid",
    "Grizzly Reaper",
    "Immortep",
    "Ninja",
    "Paladin",
    "Succubus",
    "Thunder God"
];

// odds in gem class
var heroGemOdds = [
    "Anubis",
    "Aries",
	"Athene",
    "Beast Tamer",
    "Candy Kane",
	"Creation-01",
    "Cupid",
    "Death Knight",
    "Dracax",
    "Dread Drake",
    "Ghoulem",
    "Grimfiend",
    "Gunslinger",
    "Harpy Queen",
    "Heartbreaker",
    "Lady Leo",
    "Lil Nick",
    "Mechtessa",
    "Medusa",
    "Michael",
    "Orksbane",
	"Phantom King",
    "Pixie",
    "Pumpkin Duke",
    "Revenant",
    "Rockno",
    "Ronin",
    "Santa Boom",
    "Siren",
    "Skull Knight",
    "Snowzilla",
    "Treantaur",
    "Trixie Treat",
    "Valentina",
    "Vlad Dracula",
    "Wallawalla",
    "Warlock"
];
// odds in gem class for "Event"
var heroGemOddsEvent = [
    "Anubis",
	"Arctica", 
    "Aries",
	"Athene",
    "Beast Tamer",
    "Candy Kane",
	"Creation-01",
    "Cupid",
    "Death Knight",
	"Demogorgon",
	"Destroyer",
    "Dracax",
    "Dread Drake",
    "Ghoulem",
    "Grimfiend",
    "Gunslinger",
    "Harpy Queen",
    "Heartbreaker",
    "Lady Leo",
    "Lil Nick",
    "Mechtessa",
    "Medusa",
    "Michael",
	"Minotaur Chieftain",
	"Moltanica",
    "Orksbane",
	"Phantom King",
    "Pixie",
    "Pumpkin Duke",
    "Revenant",
    "Rockno",
    "Ronin",
    "Santa Boom",
    "Siren",
	"Skeletica",
    "Skull Knight",
    "Snowzilla",
	"Spirit Mage",
    "Treantaur",
    "Trixie Treat",
    "Valentina",
    "Vlad Dracula",
    "Wallawalla",
    "Warlock"
];
// odds in gem class for "japan"
var heroGemOddsJapan = [
    "Anubis",
    "Aries",
	"Athene",
    "Beast Tamer",
    "Candy Kane",
	"Creation-01",
    "Cupid",
    "Death Knight",
    "Dracax",
    "Dread Drake",
	"Exorcist",
    "Ghoulem",
	"Great Sage",
    "Grimfiend",
    "Gunslinger",
    "Harpy Queen",
    "Heartbreaker",
    "Lady Leo",
    "Lil Nick",
    "Mechtessa",
    "Medusa",
    "Michael",
    "Orksbane",
	"Phantom Fighter",
	"Phantom King",
    "Pixie",
    "Pumpkin Duke",
    "Revenant",
    "Rockno",
    "Ronin",
    "Santa Boom",
    "Siren",
    "Skull Knight",
    "Snowzilla",
    "Treantaur",
    "Trixie Treat",
    "Valentina",
    "Vlad Dracula",
    "Wallawalla",
    "Warlock"
];
// odds in gem class for "all"
var heroGemOddsAll = [
    "Anubis",
	"Arctica", 
    "Aries",
	"Athene",
    "Beast Tamer",
    "Candy Kane",
	"Creation-01",
    "Cupid",
    "Death Knight",
	"Demogorgon",
	"Destroyer",
    "Dracax",
    "Dread Drake",
	"Exorcist",
    "Ghoulem",
	"Great Sage",
    "Grimfiend",
    "Gunslinger",
    "Harpy Queen",
    "Heartbreaker",
    "Lady Leo",
    "Lil Nick",
    "Mechtessa",
    "Medusa",
    "Michael",
	"Minotaur Chieftain",
	"Moltanica",
    "Orksbane",
	"Phantom Fighter",
	"Phantom King",
    "Pixie",
    "Pumpkin Duke",
    "Revenant",
    "Rockno",
    "Ronin",
    "Santa Boom",
    "Siren",
	"Skeletica",
    "Skull Knight",
    "Snowzilla",
	"Spirit Mage",
    "Treantaur",
    "Trixie Treat",
    "Valentina",
    "Vlad Dracula",
    "Wallawalla",
    "Warlock"
];


function heroChances(number) {
	var id, oddsClass;
	switch(number) {
		case 3:
			// B O X   1
			id = Math.floor(Math.random() * heroClassOdds.length);
			oddsClass = heroClassOdds[id];
			if (oddsClass == "Elite") {
				if (heroesOption == "japan" || heroesOption == "all") {
					id = Math.floor(Math.random() * heroEliteOddsJapan.length);
					hero1 = heroEliteOddsJapan[id];
				} else {
					id = Math.floor(Math.random() * heroEliteOdds.length);
					hero1 = heroEliteOdds[id];
				}
				heroClass1 = "blue";
			}
			if (oddsClass == "Sacrifice") {
				id = Math.floor(Math.random() * heroSacrificeOdds.length);
				hero1 = heroSacrificeOdds[id];
				if (hero1 == "Crystal Ooze") {
					heroClass1 = "blue";
				} else {
					heroClass1 = "sacrifice";
				}
			}
			if (oddsClass == "Ordinary") {
				id = Math.floor(Math.random() * heroOrdinaryOdds.length);
				hero1 = heroOrdinaryOdds[id];
				heroClass1 = "green";
			}
			if (oddsClass == "Legendary") {
				id = Math.floor(Math.random() * heroLegendaryOdds.length);
				oddsClass = heroLegendaryOdds[id];
				if (oddsClass == "Shard") {
					id = Math.floor(Math.random() * heroShardOdds.length);
					hero1 = heroShardOdds[id];
				}
				if (oddsClass == "Gem") {
					if (heroesOption == "standard") {
						id = Math.floor(Math.random() * heroGemOdds.length);
						hero1 = heroGemOdds[id];
					} else if (heroesOption == "event") {
						id = Math.floor(Math.random() * heroGemOddsEvent.length);
						hero1 = heroGemOddsEvent[id];
					} else if (heroesOption == "japan") {
						id = Math.floor(Math.random() * heroGemOddsJapan.length);
						hero1 = heroGemOddsJapan[id];
					} else if (heroesOption == "all") {
						id = Math.floor(Math.random() * heroGemOddsAll.length);
						hero1 = heroGemOddsAll[id];
					}
				}
				heroClass1 = "purple";
			}
			// B O X   3
			id = Math.floor(Math.random() * heroClassOdds.length);
			oddsClass = heroClassOdds[id];
			if (oddsClass == "Elite") {
				if (heroesOption == "japan" || heroesOption == "all") {
					id = Math.floor(Math.random() * heroEliteOddsJapan.length);
					hero3 = heroEliteOddsJapan[id];
				} else {
					id = Math.floor(Math.random() * heroEliteOdds.length);
					hero3 = heroEliteOdds[id];
				}
				heroClass3 = "blue";
			}
			if (oddsClass == "Sacrifice") {
				id = Math.floor(Math.random() * heroSacrificeOdds.length);
				hero3 = heroSacrificeOdds[id];
				if (hero3 == "Crystal Ooze") {
					heroClass3 = "blue";
				} else {
					heroClass3 = "sacrifice";
				}
			}
			if (oddsClass == "Ordinary") {
				id = Math.floor(Math.random() * heroOrdinaryOdds.length);
				hero3 = heroOrdinaryOdds[id];
				heroClass3 = "green";
			}
			if (oddsClass == "Legendary") {
				id = Math.floor(Math.random() * heroLegendaryOdds.length);
				oddsClass = heroLegendaryOdds[id];
				if (oddsClass == "Shard") {
					id = Math.floor(Math.random() * heroShardOdds.length);
					hero3 = heroShardOdds[id];
				}
				if (oddsClass == "Gem") {
					if (heroesOption == "standard") {
						id = Math.floor(Math.random() * heroGemOdds.length);
						hero3 = heroGemOdds[id];
					} else if (heroesOption == "event") {
						id = Math.floor(Math.random() * heroGemOddsEvent.length);
						hero3 = heroGemOddsEvent[id];
					} else if (heroesOption == "japan") {
						id = Math.floor(Math.random() * heroGemOddsJapan.length);
						hero3 = heroGemOddsJapan[id];
					} else if (heroesOption == "all") {
						id = Math.floor(Math.random() * heroGemOddsAll.length);
						hero3 = heroGemOddsAll[id];
					}
				}
				heroClass3 = "purple";
			}
		case 1:
			// B O X   2
			// odds for class
			id = Math.floor(Math.random() * heroClassOdds.length);
			// select class according to number above
			oddsClass = heroClassOdds[id];
			if (oddsClass == "Elite") {
				if (heroesOption == "japan" || heroesOption == "all ") {
					id = Math.floor(Math.random() * heroEliteOddsJapan.length);
					hero2 = heroEliteOddsJapan[id];
				} else {
					id = Math.floor(Math.random() * heroEliteOdds.length);
					hero2 = heroEliteOdds[id];
				}
				heroClass2 = "blue";
			}
			if (oddsClass == "Sacrifice") {
				id = Math.floor(Math.random() * heroSacrificeOdds.length);
				hero2 = heroSacrificeOdds[id];
				if (hero2 == "Crystal Ooze") {
					heroClass2 = "blue";
				} else {
					heroClass2 = "sacrifice";
				}
			}
			if (oddsClass == "Ordinary") {
				id = Math.floor(Math.random() * heroOrdinaryOdds.length);
				hero2 = heroOrdinaryOdds[id];
				heroClass2 = "green";
			}
			if (oddsClass == "Legendary") {
				id = Math.floor(Math.random() * heroLegendaryOdds.length);
				oddsClass = heroLegendaryOdds[id];
				if (oddsClass == "Shard") {
					id = Math.floor(Math.random() * heroShardOdds.length);
					hero2 = heroShardOdds[id];
				}
				if (oddsClass == "Gem") {
					if (heroesOption == "standard") {
						id = Math.floor(Math.random() * heroGemOdds.length);
						hero2 = heroGemOdds[id];
					} else if (heroesOption == "event") {
						id = Math.floor(Math.random() * heroGemOddsEvent.length);
						hero2 = heroGemOddsEvent[id];
					} else if (heroesOption == "japan") {
						id = Math.floor(Math.random() * heroGemOddsJapan.length);
						hero2 = heroGemOddsJapan[id];
					} else if (heroesOption == "all") {
						id = Math.floor(Math.random() * heroGemOddsAll.length);
						hero2 = heroGemOddsAll[id];
					}
				}
				heroClass2 = "purple";
			}
			break;
	}
}
// ----------------------------------------------------------------------

// ccWindow resize
window.addEventListener("pageshow", resize);
window.addEventListener("resize", resize);
// music start
window.addEventListener("pageshow", function(){musicFunction(1)});
// startup sound
//window.addEventListener("pageshow", function(){document.getElementById("music0").load();document.getElementById("music0").play()});

// main function resizing ccWindow
function resize() {
	keepRatio();
	heroNameFontResize();
	storageTabFontResize();
	rollHeadlineFontResize();
	evolutionButtonHeadlineFontResize();
	mapHeadlineFontResize();
	gemCounterFontResize();
	storageNumberFontResize();
	storageHeroNameFontResize();
	heroesOddsFontResize();
	heroesOptionInfoFontResize();
	copyrightFontResize();
	// evolution rune width resize
	var storageHeroEvolutionDiv = document.getElementById("storageHeroEvolutionDiv");
	var storageHeroEvolution = document.getElementById("storageHeroEvolution");
	if (storageHeroEvolutionDiv != undefined) {
		storageHeroEvolutionDiv.style.width = (storageHeroEvolution.offsetHeight * 0.88) + "px";
	}
/*	if (placeholderOn == true) {
		placeholder();
	}*/
}
// ---------------------------------------------------------------------- 

// function keeping ccWindow in a ratio
function keepRatio() {
	ratio = (((window.screen.width - 16.5286) * 0.838) - 1) / window.screen.height;
	if (ratio > 1.75 | ratio < 1.25) {
		ratio = 1.5;
	}
	ccWindow = document.getElementById('all');
	ccWindow1 = document.getElementById('all1');
	ccWindow2 = document.getElementById('all2');
	ccWindow3 = document.getElementById('all3');
	ccWindow.style.height =  window.innerHeight + "px";
	ccWindow.style.width = (ccWindow.offsetHeight * ratio) + "px";
	
	if (ccWindow.offsetWidth > ((window.innerWidth - 16.5286) * 0.838)) {
		ccWindow.style.width = ((window.innerWidth - 16.5286) * 0.838) + "px";
		ccWindow.style.height =  (ccWindow.offsetWidth / ratio) + "px";
	}
	ccWindow.style.left = (((window.innerWidth - 16.5286) - ccWindow.offsetWidth) / 2) + "px";
		
	ccWindow3.style.height = ccWindow2.offsetHeight + "px";
	ccWindow3.style.width = ccWindow2.offsetWidth + "px";
	
	ccWindow1.style.top = ccWindow.offsetHeight + "px";
	ccWindow1.style.height = ccWindow.offsetHeight + "px";
	ccWindow1.style.width = (ccWindow.offsetWidth * 0.89) + "px";
	ccWindow1.style.left = (((window.innerWidth - 16.5286) - ccWindow1.offsetWidth) / 2) + "px";
}
// ---------------------------------------------------------------------- 

// function handling screen outside of ccWindow
function placeholder() {
	var placeholderTop, placeholderBottom, placeholderLeft, placeholderRight;
	placeholderTop = document.getElementsByClassName('placeholderTop');
	placeholderBottom = document.getElementsByClassName('placeholderBottom');
	placeholderLeft = document.getElementsByClassName('placeholderLeft');
	placeholderRight = document.getElementsByClassName('placeholderRight');
	for (var i = 0; i < placeholderTop.length; i++) {
        placeholderTop[i].style.height = centerHeight;
	}
	for (var i = 0; i < placeholderBottom.length; i++) {
        placeholderBottom[i].style.height = centerHeight; 
	}
	for (var i = 0; i < placeholderLeft.length; i++) {
        placeholderLeft[i].style.width = centerWidth; 
	}
	for (var i = 0; i < placeholderRight.length; i++) {
        placeholderRight[i].style.width = centerWidth; 
	}
}
// ---------------------------------------------------------------------- 

// function resizing font size of storage number
function storageNumberFontResize() {
	var factor = ccWindow.offsetHeight / 630;
	for(var i = 0; i < heroesEng.length; i++) {
		var id = 'storageboxsacrifice' + heroesEng[i];
		var element = document.getElementById(id);
		if(element != undefined) {
			element.style.fontSize = (20 * factor) + 'px';
		}
	}
	for(var i = 0; i < heroesEng.length; i++) {
		var id = 'storageboxgreen' + heroesEng[i];
		var element = document.getElementById(id);
		if(element != undefined) {
			element.style.fontSize = (20 * factor) + 'px';
		}
	}
	for(var i = 0; i < heroesEng.length; i++) {
		var id = 'storageboxblue' + heroesEng[i];
		var element = document.getElementById(id);
		if(element != undefined) {
			element.style.fontSize = (20 * factor) + 'px';
		}
	}
	for(var i = 0; i < heroesEng.length; i++) {
		var id = 'storageboxpurple' + heroesEng[i];
		var element = document.getElementById(id);
		if(element != undefined) {
			element.style.fontSize = (20 * factor) + 'px';
		}
	}
}
// ---------------------------------------------------------------------- 

// function resizing font size of hero name in storage
function copyrightFontResize() {
	var factor, copyrightElement;
	factor = (ccWindow.offsetHeight / 943);
	copyrightElement = document.getElementById("iggInfo");
	copyrightElement.style.fontSize = (22 * factor) + "px";
}
// ---------------------------------------------------------------------- 

// function resizing font size of hero name in storage
function heroesOptionInfoFontResize() {
	var factor, heroesOptionInfoElement;
	factor = (ccWindow.offsetHeight / 943);
	heroesOptionInfoElement = document.getElementById("heroesOptionInfo");
	heroesOptionInfoElement.style.fontSize = (27 * factor) + "px";
}
// ---------------------------------------------------------------------- 

// function resizing font size of hero name in storage
function heroesOddsFontResize() {
	var factor, heroesOddsElement;
	factor = (ccWindow.offsetHeight / 943);
	heroesOddsElement = document.getElementById("heroesOddsInfo");
	heroesOddsElement.style.fontSize = (32 * factor) + "px";
}
// ---------------------------------------------------------------------- 

// function resizing font size of hero name in storage
function storageHeroNameFontResize() {
	var factor, storageHeroName;
	factor = (ccWindow.offsetHeight / 709);
	storageHeroName = document.getElementById("storageHeroName");
	storageHeroName.style.fontSize = (20 * factor) + "px";
	storageHeroName.style.textShadow = '0px 0px ' + (1 * factor) + 'px white, 0px 0px ' + (2 * factor) + 'px white, 0px 0px ' + (3 * factor) + 'px white, ' + (-1.2 * factor) + 'px 0 ' + (1.2 * factor) + 'px black, 0 ' + (1.2 * factor) + 'px ' + (1.2 * factor) + 'px black, ' + (1.2 * factor) + 'px 0 ' + (1.2 * factor) + 'px black, 0 ' + (-1.2 * factor) + 'px ' + (1.2 * factor) + 'px black';
}
// ---------------------------------------------------------------------- 

// function resizing font size of gem counter
function gemCounterFontResize() {
	var factor, gemCounterNumber, heroCounterNumber, gemFontSize, gemShadowSize;
	factor = (ccWindow.offsetHeight / 943);
	gemFontSize = (25 * factor) + "px";
	gemShadowSize = (-2 * factor) + 'px 0 ' + (2 * factor) + 'px black, ' + (2 * factor) + 'px 0 ' + (2 * factor) + 'px black, 0 ' + (-1 * factor) + 'px ' + (1 * factor) + 'px black, 0 ' + (3 * factor) + 'px ' + (3 * factor) + 'px black';
	gemCounterNumber = document.getElementById("gemCounterNumber");
	heroCounterNumber = document.getElementById("heroCounterNumber");
	gemCounterNumber.style.fontSize = gemFontSize;
	gemCounterNumber.style.textShadow = gemShadowSize;
	heroCounterNumber.style.fontSize = gemFontSize;
	heroCounterNumber.style.textShadow = gemShadowSize;
	
}
// ---------------------------------------------------------------------- 

// function resizing font size of heroname
function heroNameFontResize() {
	var factor, id, element;
	factor = (ccWindow.offsetHeight / 1080);
	for(var i = 1; i < 4; i++) {
		id = "box" + i + "heroName";
		element = document.getElementById(id);
		element.style.fontSize = (33 * factor) + "px";
		element.style.textShadow = "0px 0px " + (1 * factor) + "px white, 0px 0px " + (2 * factor) + "px white, 0px 0px " + (3 * factor) + "px white, " + (-1.7 * factor) + "px 0 " + (1 * factor) + "px black, 0 " + (2 * factor) + "px " + (1 * factor) + "px black, " + (1.5 * factor) + "px 0 " + (1 * factor) + "px black, 0 " + (-1.5 * factor) + "px " + (1 * factor) + "px black";
	}
}
// ---------------------------------------------------------------------- 

// function resizing font size of map headline
function mapHeadlineFontResize() {
	var factor, id, mapHeadline;
	factor = (ccWindow.offsetHeight / 709);
	id = "mapHeadline";
	mapHeadline = document.getElementById(id); 
	mapHeadline.style.fontSize = (31 * factor) + "px";
	if (mapHeadlineState == false) {
		var mapHeadline1 = (1.5 * factor) + 'px 0px ' + (1.5 * factor) + 'px black, ' + (-1.5 * factor) + 'px 0px ' + (1.5 * factor) + 'px black, 0px ' + (-0.75 * factor) + 'px ' + (0.75 * factor) + 'px black, 0px ' + (2 * factor) + 'px ' + (2 * factor) + 'px black';
	} else {
		var mapHeadline1 = (1.5 * factor) + 'px 0px ' + (1.5 * factor) + 'px white, ' + (-1.5 * factor) + 'px 0px ' + (1.5 * factor) + 'px white, 0px ' + (-0.75 * factor) + 'px ' + (0.75 * factor) + 'px white, 0px ' + (2 * factor) + 'px ' + (2 * factor) + 'px white';
	}
	mapHeadline.style.textShadow = mapHeadline1;
}
// ----------------------------------------------------------------------

// function resizing font size of rolling headline
function rollHeadlineFontResize() {
	var factor, id, rollHeadline;
	factor = (ccWindow.offsetHeight / 943);
	id = "rollHeadline";
	rollHeadline = document.getElementById(id);
	rollHeadline.style.fontSize = (81 * factor) + "px";
	var rollHeadline1 = '-' + (3 * factor) + 'px 0px ' + (3 * factor) + 'px black, ' + (2 * factor) + 'px 0px ' + (3 * factor) + 'px black, 0px ' + (-1 * factor) + 'px ' + (1 * factor) + 'px black, 0px ' + (7 * factor) + 'px ' + (2 * factor) + 'px black, ' + (-3 * factor) + 'px ' + (7 * factor) + 'px ' + (2 * factor) + 'px black, ' + (2 * factor) + 'px ' + (7 * factor) + 'px ' + (2 * factor) + 'px black, ' + (-3 * factor) + 'px 0px ' + (3 * factor) + 'px black, ' + (2 * factor) + 'px 0px ' + (3 * factor) + 'px black, 0px ' + (-1 * factor) + 'px ' + (1 * factor) + 'px black, 0px ' + (7 * factor) + 'px ' + (2 * factor) + 'px black, ' + (-3 * factor) + 'px ' + (7 * factor) + 'px ' + (2 * factor) + 'px black, ' + (2 * factor) + 'px ' + (7 * factor) + 'px ' + (2 * factor) + 'px black';
	rollHeadline.style.textShadow = rollHeadline1;
}
// ----------------------------------------------------------------------

// function resizing font size of evolution button headline
function evolutionButtonHeadlineFontResize() {
	var factor, id, rollHeadline;
	factor = (ccWindow.offsetHeight / 943);
	id = "evolutionButtonHeadline";
	rollHeadline = document.getElementById(id);
	rollHeadline.style.fontSize = (42 * factor) + "px";
	var rollHeadline1 = (1.5 * factor) + 'px 0px ' + (1.5 * factor) + 'px black, ' + (-2 * factor) + 'px 0px ' + (2 * factor) + 'px black, 0px ' + (-0.75 * factor) + 'px ' + (0.75 * factor) + 'px black, 0px ' + (4 * factor) + 'px ' + (4 * factor) + 'px black';
	rollHeadline.style.textShadow = rollHeadline1;
}
// ----------------------------------------------------------------------

 // function resizing font size of tab headline
function storageTabFontResize() {
	var factor, id, storageFlag1, storageFlag2;
	factor = (ccWindow.offsetHeight / 768);
	id = "storageFlag";
	storageFlag1 = document.getElementById(id).children;
	for(var i = 0; i < storageFlag1.length; i++) {
		var storageFlag2 = storageFlag1[i].children
		for(var ii = 0; ii < storageFlag2.length; ii++) {
			storageFlag2[ii].style.fontSize = (24 * factor) + "px";
			storageFlag2[ii].style.textShadow = "0px 0px " + (1 * factor) + "px white, 0px 0px " + (2 * factor) + "px white, 0px 0px " + (3 * factor) + "px white, " + (-1.7 * factor) + "px 0px " + (1 * factor) + "px black, 0px " + (2 * factor) + "px " + (1 * factor) + "px black, " + (1.5 * factor) + "px 0 " + (1 * factor) + "px black, 0 " + (-1.5 * factor) + "px " + (1 * factor) + "px black";
		}
	}
}
// ---------------------------------------------------------------------- 
  
// main hero roll function accessing all part functions of the roll
function heroRoll(number) {	
	// missing 0.55s delay/"lag" till new roll if wanted
	var lagDuration = 0; // milliseconds
	var lag = setInterval(lagFunction, lagDuration);
	function lagFunction() {
		// all resets
		backgroundDisplayReset();
		heroNameDisplayReset();
		animationPurpleLightReset();
		animationPurpleLightCircleReset();
		animationPurpleLightStarsReset();
		animationPurpleLightBarReset();
		animationRingReset();
		animationSpawnReset();
		animationLightReset();
		animationLightStripesReset();
		animationLightRotationReset();
		animationLightStarsReset();
		//
		RollCounter(number);
		heroChances(number);
		backgroundDisplay(number);
		heroNameDisplay(number);
		heroCard(number);
		// short delay for animations in order to work properly after reset
		var delay = setInterval(delay, 100);
		function delay() {
			animationPurpleLight(number);
			animationPurpleLightCircle(number);
			animationPurpleLightStars(number);
			animationPurpleLightBar(number);
			animationRing(number);
			animationSpawn(number);
			animationLight(number);
			animationLightStripes(number);
			animationLightRotation(number);
			animationLightStars(number);
			// rolling sound
			if (rollingSoundEffectState == true) {
				rollingSoundFunction()
			}
			clearInterval(delay);
		}
		clearInterval(lag);
	}
}
// ----------------------------------------------------------------------

// function for activating auto roll window
var autoRollState = false;
function rollAutoRollFunction() {
	var rollButtonWindow = document.getElementById("rollButtonWindow");
	var autoRollWindow = document.getElementById("autoRollWindow");
	var rollAutoRollButtonPic = document.getElementById("rollAutoRollButtonPic");
	// diable auto roll
	if (autoRollState == true) {
		rollButtonWindow.style.display = "block";
		autoRollWindow.style.display = "none";
		rollAutoRollButtonPic.src = "source/background/autoRollOff.png";
		autoRollState = false;
		clearInterval(autoRollInterval);
	// enable auto roll
	} else {
		rollButtonWindow.style.display = "none";
		autoRollWindow.style.display = "block";
		rollAutoRollButtonPic.src = "source/background/autoRollOn.png";
		autoRollState = true;
		// unhighlight tab
		if (tabCurrent != 0) {
			document.getElementById("rollAutoRollPic" + tabCurrent).src = "source/background/rollAutoRollPicOff" + tabCurrent + ".png";
			tabCurrent = 0;
		}
	}
}
// ----------------------------------------------------------------------

// auto roll option rolling only 3
var autoRollOption = "mix";
function rollAutoRollOptionFunction() {
	var autoRollOnly3Button = document.getElementById("rollAutoRollMixPic");
	if (autoRollOption == "mix") {
		autoRollOption = 3;
		autoRollOnly3Button.src = "source/background/autoRollOption3.png";
	} else if (autoRollOption == 3) {
		autoRollOption = 1;
		autoRollOnly3Button.src = "source/background/autoRollOption1.png";
	} else {
		if (tabCurrent == 4) {
			autoRollOption = 3;
			autoRollOnly3Button.src = "source/background/autoRollOption3.png";
		} else {
			autoRollOption = "mix";
			autoRollOnly3Button.src = "source/background/autoRollOptionmix.png";
		}
	}
}


// ----------------------------------------------------------------------

function autoHeroRoll() {
	if (autoRollOption == "mix") {
		if (Math.random() < 0.5) {
			heroRoll(1);
		} else {
			heroRoll(3);
		}
	} else if (autoRollOption == 1) {
		heroRoll(1);
	} else {
		heroRoll(3);
	}
}


var autoRollInterval;
var tabCurrent = 0;
function rollAutoRollSpeedFunction(ms, tabNumber) {
	// auto roll
	clearInterval(autoRollInterval);
	// stop auto roll if same tab is clicked twice
	if (tabCurrent != tabNumber) {
		autoRollInterval = setInterval(autoHeroRoll, ms);
	}

	
	// highlight clicked tab
	for (var i = 1; i < 5; i++) {
		if (i == tabNumber) {
			// if clicked one is aleady highlighted -> unhighlight
			if (tabCurrent == tabNumber) {
				document.getElementById("rollAutoRollPic" + i).src = "source/background/rollAutoRollPicOff" + i + ".png";
				// no current button
				tabCurrent = 0;
			} else {
				document.getElementById("rollAutoRollPic" + i).src = "source/background/rollAutoRollPicOn" + i + ".png";
				tabCurrent = i;
			}
		} else {
			document.getElementById("rollAutoRollPic" + i).src = "source/background/rollAutoRollPicOff" + i + ".png";
		}
		// change auto roll option when on x8 tab
		if (tabCurrent == 4 && autoRollOption == "mix") {
			rollAutoRollOptionFunction()
		}
		
	}
}

// function for couting gems and heroes rolled
var counterGems = 0; 
var counterHeroes = 0;
var counterInfinity = 0;
function RollCounter(number) {
	// counter
	counterGems = counterGems + (150 * number);
	counterHeroes = counterHeroes + (1 * number);
	// set numbers
	var gemsCounterNumber = document.getElementById("gemCounterNumber");
	var heroCounterNumber = document.getElementById("heroCounterNumber");
	if (counterInfinity == 0) {
		gemsCounterNumber.innerHTML = '<b>' + counterGems + '</b>';
		heroCounterNumber.innerHTML = '<b>' + counterHeroes + '</b>';
	}
	// changing gem image
	/*
	steps:
	- 0k
	- 5k
	- 10k
	- 25k
	- 50k
	- 100k
	*/
	var gemCounterPic = document.getElementById("gemCounterPic");
	if (counterGems == 5100 || counterGems == 5250 || counterGems == 5400) {
		gemCounterPic.src = "source/background/Gem2.png";
	}
	if (counterGems == 10050 || counterGems == 10200 || counterGems == 10350) {
		gemCounterPic.src = "source/background/Gem3.png";
	}
	if (counterGems == 25050 || counterGems == 25200 || counterGems == 25350) {
		gemCounterPic.src = "source/background/Gem4.png";
	}
	if (counterGems == 50100 || counterGems == 50250 || counterGems == 50400) {
		gemCounterPic.src = "source/background/Gem5.png";
	}
	if (counterGems == 100050 || counterGems == 100200 || counterGems == 100350) {
		gemCounterPic.src = "source/background/Gem6.png";
	}
	if (counterGems == 100000050 || counterGems == 1000002000 || counterGems == 100000350) {
		gemsCounterNumber.innerHTML = '<b>&#8734</b>';
		heroCounterNumber.innerHTML = '<b>&#8734</b>';
		counterInfinity = 1;
		
	}
}
// ----------------------------------------------------------------------

// function for hero card evolution in storage
function heroCardEvolution(heroName) {
	if (heroCardEvo == false) {
		var id = "storageHeroPic";
		var storageHeroPic = document.getElementById(id);
		var scalingHeroesState = false;
		for (var i = 0; i < scalingHeroesEvo.length; i++) {
			if (heroName == scalingHeroesEvo[i]) {
				storageHeroPic.src = "source/heroes/heroesEvo/" + heroName + " Storage.png";
				scalingHeroesState = true;
			}
		}
		if (scalingHeroesState == false) {
			storageHeroPic.src = "source/heroes/heroesEvo/" + heroName + ".png";
		}
		heroCardEvo = true;
		var id = "storageHeroPic";
		storageHeroEvolution.src = "source/background/evolution2.png";
	} else {
		var id = "storageHeroPic"
		var storageHeroPic = document.getElementById(id);
		var scalingHeroesState = false;
		for (var i = 0; i < scalingHeroes.length; i++) {
			if (heroName == scalingHeroes[i]) {
				storageHeroPic.src = "source/heroes/heroesEvo/" + heroName + " Storage.png";
				scalingHeroesState = true;
			}
		}
		if (scalingHeroesState == false) {
			storageHeroPic.src = "source/heroes/heroesNormal/" + heroName + ".png";
		}
		heroCardEvo = false;
		var id = "storageHeroPic";
		storageHeroEvolution.src = "source/background/evolution1.png";
	}
}
// ----------------------------------------------------------------------

var scalingHeroes = [
	"Anubis",
	"Creation-01",
	"Crystal Ooze",
	"Cyclops",
	"Death Knight",
	"Engineer",
	"Gelatinous Champion",
	"Ghoulem",
	"Juggernaut",
	"Marauder",
    "Rockno",
    "Snowzilla",
    "Triton",
    "Wallawalla",
    "Warlock"
];
var scalingHeroesEvo = [
	"Anubis",
	"Creation-01",
	"Ghoulem",
    "Rockno",
    "Snowzilla",
    "Wallawalla",
];
//snowzilla(1,2) ghoulem(1,2) wallawalla(1,2) anubis(1,2) rockno(1,2) creation(1,2) cyclops shaman triton sacrifices juggernaut ingeneur marauader
var heroCardEvo = false;
// function for hero card detail showing on the right side in storage
function heroCardDetail(heroName, heroClassSpecial) {
	document.getElementById("storageHero").style.opacity = 1;
	// name change
	var id = "storageHeroName"
	var storageHeroName = document.getElementById(id);
	if (language == "german") {
		for (i = 0; i < heroesEng.length; i++) {
			if (heroesEng[i] == heroName) {
				var heroNameDisplay = heroesGer[i];
			}
		}
	} else {
		heroNameDisplay = heroName;
	}
	storageHeroName.innerHTML = heroNameDisplay;
	// evolution rune when hero is legendary
	if (heroClassSpecial == "purple") {
		var heroNameSpecial = "'" + heroName + "'";
		storageHeroName.innerHTML +=
		'<div id="storageHeroEvolutionDiv" class="storageHeroEvolution storageHeroEvolutionZIndex buttonPress" onclick="heroCardEvolution(' + heroNameSpecial + ')">' +
			'<img id="storageHeroEvolution" class="coverImage" src="source/background/evolution1.png" alt="Evolution1.error" style="z-index: -3"' + '<br>' +
			'<div class="coverImage" style="z-index: -2"</div>' + '<br>' +
		'</div>';
		document.getElementById("storageHeroEvolutionDiv").style.width = (document.getElementById("storageHeroEvolution").offsetHeight * 0.88) + "px";
		if (heroCardEvo == true) {
			var id = "storageHeroEvolution";
			var storageHeroEvolution = document.getElementById(id);
			storageHeroEvolution.src = "source/background/evolution2.png";
		}
	}
	// image change
	var id = "storageHeroPic"
	var storageHeroPic = document.getElementById(id);
	if (heroClassSpecial == "purple" && heroCardEvo == true) {
		var scalingHeroesState = false;
		for (var i = 0; i < scalingHeroesEvo.length; i++) {
			if (heroName == scalingHeroesEvo[i]) {
				storageHeroPic.src = "source/heroes/heroesEvo/" + heroName + " Storage.png";
				scalingHeroesState = true;
			}
		}
		if (scalingHeroesState == false) {
			storageHeroPic.src = "source/heroes/heroesEvo/" + heroName + ".png";
		}
	} else {
		var scalingHeroesState = false;
		for (var i = 0; i < scalingHeroes.length; i++) {
			if (heroName == scalingHeroes[i]) {
				storageHeroPic.src = "source/heroes/heroesNormal/" + heroName + " Storage.png";
				scalingHeroesState = true;
			}
		}
		if (scalingHeroesState == false) {
			storageHeroPic.src = "source/heroes/heroesNormal/" + heroName + ".png";
		}
	}
	storageHeroPic.alt = heroName + ".error";
	// skill image change
	var id = "storageHeroSkill"
	var storageHeroSkill = document.getElementById(id);
	storageHeroSkill.src = "source/heroes/skills/" + heroName + ".png";
	storageHeroSkill.alt = heroName + ".error";
	// tag image change
	var id = "storageHeroTag"
	var storageHeroTag = document.getElementById(id);
	if (heroName == "Crystal Ooze") {
		storageHeroTag.src = "source/background/tagblue.png";
	} else {
		storageHeroTag.src = "source/background/tag" + heroClassSpecial + ".png";
	}
	storageHeroTag.alt = heroClassSpecial + "Tag.error";
}


// ----------------------------------------------------------------------

// function for tab change in storage
function storageTabChange(tabNumber) {
	var id = "storageFlag"
	var storageFlag = document.getElementById(id).children;
	for(var i = 0; i < storageFlag.length; i++) {
		if ((i + 1) == tabNumber) {
			document.getElementById("storageFlagSmall" + (i + 1)).style.opacity = 0;
			document.getElementById("storageFlagBig" + (i + 1)).style.opacity = 1;
			document.getElementById("storageFlagSmallName" + (i + 1)).style.opacity = 0;
			document.getElementById("storageFlagBigName" + (i + 1)).style.opacity = 1;
		} else {
			document.getElementById("storageFlagSmall" + (i + 1)).style.opacity = 1;
			document.getElementById("storageFlagBig" + (i + 1)).style.opacity = 0;
			document.getElementById("storageFlagSmallName" + (i + 1)).style.opacity = 1;
			document.getElementById("storageFlagBigName" + (i + 1)).style.opacity = 0;
		}
	}
	if (tabNumber == 1) {
		var tabClass = "all";
	}
	if (tabNumber == 2) {
		var tabClass = "purple";
	}
	if (tabNumber == 3) {
		var tabClass = "blue";
	}
	if (tabNumber == 4) {
		var tabClass = "green";
	}
	if (tabNumber == 5) {
		var tabClass = "sacrifice";
	}	
	if (tabClass == "all") {
		var id = "storageData"
		var storageData = document.getElementById(id).children;
		for(var i = 0; i < storageData.length; i++) {
			storageData[i].style.display = "inline";
		}
	} else {
		var id = "storageData"
		var storageData = document.getElementById(id).children;
		for(var i = 0; i < storageData.length; i++) {
			storageData[i].style.display = "none";
		}
		document.getElementById("storage" + tabClass).style.display = "inline";
	}
}
// ----------------------------------------------------------------------

// function for storage cards
//global variables:
var allTab;
var legendaryTab;
var eliteTab;
var ordinaryTab;
var sacrificeTab;
var rollHeadline;
//
var heroCardUsed = [];
var heroCardNumberpurple = 0;
var heroCardNumberblue = 0;
var heroCardNumbergreen = 0;
var heroCardNumbersacrifice = 0;
var heroCardPressNumber = 0;
function heroCard(number) {
	switch (number) {
		case 3:
			// B O X   1
			heroCardUsed.push(hero1);
			heroCardNumber = 0;
			for(var i = 0; i < heroCardUsed.length; i++) {
				if (heroCardUsed[i] == hero1) {
					var heroCardNumber = heroCardNumber + 1;
				}
			}
			if (hero1 == "Gelatinous Champion" || hero1 == "Crystal Ooze") {
				heroClass1 = "sacrifice";
			}
			if (heroCardNumber > 1) {
				// class specific tab
				var heroCardNumberId = document.getElementById("storagebox" + heroClass1 + hero1);
				heroCardNumberId.innerHTML = "<b>" + heroCardNumber + "</b>";
			} else {
				// class specific tab
				var id = "storage" + heroClass1;
				var storageColor = document.getElementById(id);
				heroCardPressNumber = heroCardPressNumber + 1;
				var heroSpecial = "'" + hero1 + "'";
				var heroClassSpecial = "'" + heroClass1 + "'";
				if (hero1 == "Crystal Ooze") {
					storageColor.innerHTML +=	
						'<div class="storagebox buttonPress" onclick="heroCardDetail(' + heroSpecial + ', ' + heroClassSpecial + ')">' + 
							'<div class="coverImage" style="z-index: -10">' +
								'<img class="storageHeroCard storageShineZIndex" src="source/heroes/heroCards/blueShine.png" alt="Shine.error">' +
								'<img class="storageLabel storageLabelZIndex" src="source/heroes/heroCards/label.png" alt="storagelabel.error">' +
								'<img class="storageHeroCard storageHeroCardZIndex" src="source/heroes/heroCards/' + hero1 + '.png" alt="storageHeroCard' + hero1 + '.error">' +
								'<div id="storagebox' + heroClass1 + hero1 + '" class="storageboxNumber storageboxNumberZIndex"><b>1</b></div>' +
							'</div>' +
							'<div class="coverImage" style="z-index: -9"></div>' +
						'</div>';
				} else {
					storageColor.innerHTML +=	
						'<div class="storagebox buttonPress" onclick="heroCardDetail(' + heroSpecial + ', ' + heroClassSpecial + ')">' + 
							'<div class="coverImage" style="z-index: -10">' +
								'<img class="storageHeroCard storageShineZIndex" src="source/heroes/heroCards/' + heroClass1 + 'Shine.png" alt="Shine.error">' +
								'<img class="storageLabel storageLabelZIndex" src="source/heroes/heroCards/label.png" alt="storagelabel.error">' +
								'<img class="storageHeroCard storageHeroCardZIndex" src="source/heroes/heroCards/' + hero1 + '.png" alt="storageHeroCard' + hero1 + '.error">' +
								'<div id="storagebox' + heroClass1 + hero1 + '" class="storageboxNumber storageboxNumberZIndex"><b>1</b></div>' +
							'</div>' +
							'<div class="coverImage" style="z-index: -9"></div>' +
						'</div>';
				}
				// counter for heroes per class
				if (heroClass1 == "purple") {
					heroCardNumberpurple = heroCardNumberpurple + 1;
				}
				if (heroClass1 == "blue") {
					heroCardNumberblue = heroCardNumberblue + 1;
				}
				if (heroClass1 == "green") {
					heroCardNumbergreen = heroCardNumbergreen + 1;
				}
				if (heroClass1 == "sacrifice") {
					heroCardNumbersacrifice = heroCardNumbersacrifice + 1;
				}
				if ((heroCardNumberpurple + heroCardNumberblue + heroCardNumbergreen + heroCardNumbersacrifice) != 0) {
				document.getElementById("storageFlagBigName1").innerHTML = 
					allTab + "<br>" + "(" +
					(heroCardNumberpurple + 
					heroCardNumberblue + 
					heroCardNumbergreen +
					heroCardNumbersacrifice) +
					")";
				}
			}
			if (hero1 == "Gelatinous Champion") {
				
				heroClass1 = "sacrifice";
			}
			if (hero1 == "Crystal Ooze") {
				heroClass1 = "blue";
			}
			// B O X   3
			heroCardUsed.push(hero3);
			heroCardNumber = 0;
			for(var i = 0; i < heroCardUsed.length; i++) {
				if (heroCardUsed[i] == hero3) {
					var heroCardNumber = heroCardNumber + 1;
				}
			}
			if (hero3 == "Gelatinous Champion" || hero3 == "Crystal Ooze") {
				heroClass3 = "sacrifice";
			}
			if (heroCardNumber > 1) {
				// class specific tab
				var heroCardNumberId = document.getElementById("storagebox" + heroClass3 + hero3);
				heroCardNumberId.innerHTML = "<b>" + heroCardNumber + "</b>";
			} else {
				// class specific tab
				var id = "storage" + heroClass3;
				var storageColor = document.getElementById(id);
				var heroSpecial = "'" + hero3 + "'";
				var heroClassSpecial = "'" + heroClass3 + "'";
				if (hero3 == "Crystal Ooze") {
					storageColor.innerHTML +=	
						'<div class="storagebox buttonPress" onclick="heroCardDetail(' + heroSpecial + ', ' + heroClassSpecial + ')">' + 
							'<div class="coverImage" style="z-index: -10">' +
								'<img class="storageHeroCard storageShineZIndex" src="source/heroes/heroCards/blueShine.png" alt="Shine.error">' +
								'<img class="storageLabel storageLabelZIndex" src="source/heroes/heroCards/label.png" alt="storagelabel.error">' +
								'<img class="storageHeroCard storageHeroCardZIndex" src="source/heroes/heroCards/' + hero3 + '.png" alt="storageHeroCard' + hero3 + '.error">' +
								'<div id="storagebox' + heroClass3 + hero3 + '" class="storageboxNumber storageboxNumberZIndex"><b>1</b></div>' +
							'</div>' +
							'<div class="coverImage" style="z-index: -9"></div>' +
						'</div>';
				} else {
					storageColor.innerHTML +=	
						'<div class="storagebox buttonPress" onclick="heroCardDetail(' + heroSpecial + ', ' + heroClassSpecial + ')">' + 
							'<div class="coverImage" style="z-index: -10">' +
								'<img class="storageHeroCard storageShineZIndex" src="source/heroes/heroCards/' + heroClass3 + 'Shine.png" alt="Shine.error">' +
								'<img class="storageLabel storageLabelZIndex" src="source/heroes/heroCards/label.png" alt="storagelabel.error">' +
								'<img class="storageHeroCard storageHeroCardZIndex" src="source/heroes/heroCards/' + hero3 + '.png" alt="storageHeroCard' + hero3 + '.error">' +
								'<div id="storagebox' + heroClass3 + hero3 + '" class="storageboxNumber storageboxNumberZIndex"><b>1</b></div>' +
							'</div>' +
							'<div class="coverImage" style="z-index: -9"></div>' +
						'</div>';
				}
				// counter for heroes per class
				if (heroClass3 == "purple") {
					heroCardNumberpurple = heroCardNumberpurple + 1;
				}
				if (heroClass3 == "blue") {
					heroCardNumberblue = heroCardNumberblue + 1;
				}
				if (heroClass3 == "green") {
					heroCardNumbergreen = heroCardNumbergreen + 1;
				}
				if (heroClass3 == "sacrifice") {
					heroCardNumbersacrifice = heroCardNumbersacrifice + 1;
				}
				if ((heroCardNumberpurple + heroCardNumberblue + heroCardNumbergreen) != 0) {
				document.getElementById("storageFlagBigName1").innerHTML = 
					allTab + "<br>" + "(" +
					(heroCardNumberpurple + 
					heroCardNumberblue + 
					heroCardNumbergreen +
					heroCardNumbersacrifice) +
					")";
				}
			}
			if (hero3 == "Gelatinous Champion") {
				heroClass3 = "sacrifice";
			}
			if (hero3 == "Crystal Ooze") {
				heroClass3 = "blue";
			}
		case 1:
			// B O X   2
			heroCardUsed.push(hero2);
			heroCardNumber = 0;
			for(var i = 0; i < heroCardUsed.length; i++) {
				if (heroCardUsed[i] == hero2) {
					var heroCardNumber = heroCardNumber + 1;
				}
			}
			if (hero2 == "Gelatinous Champion" || hero2 == "Crystal Ooze") {
				heroClass2 = "sacrifice";
			}
			if (heroCardNumber > 1) {
				// class specific tab
				var heroCardNumberId = document.getElementById("storagebox" + heroClass2 + hero2);
				heroCardNumberId.innerHTML = "<b>" + heroCardNumber + "</b>";
			} else {
				// class specific tab
				var id = "storage" + heroClass2;
				var storageColor = document.getElementById(id);
				var heroSpecial = "'" + hero2 + "'";
				var heroClassSpecial = "'" + heroClass2 + "'";
				if (hero2 == "Crystal Ooze") {
					storageColor.innerHTML +=	
						'<div class="storagebox buttonPress" onclick="heroCardDetail(' + heroSpecial + ', ' + heroClassSpecial + ')">' + 
							'<div class="coverImage" style="z-index: -10">' +
								'<img class="storageHeroCard storageShineZIndex" src="source/heroes/heroCards/blueShine.png" alt="Shine.error">' +
								'<img class="storageLabel storageLabelZIndex" src="source/heroes/heroCards/label.png" alt="storagelabel.error">' +
								'<img class="storageHeroCard storageHeroCardZIndex" src="source/heroes/heroCards/' + hero2 + '.png" alt="storageHeroCard' + hero2 + '.error">' +
								'<div id="storagebox' + heroClass2 + hero2 + '" class="storageboxNumber storageboxNumberZIndex"><b>1</b></div>' +
							'</div>' +
							'<div class="coverImage" style="z-index: -9"></div>' +
						'</div>';
				} else {
					storageColor.innerHTML +=	
						'<div class="storagebox buttonPress" onclick="heroCardDetail(' + heroSpecial + ', ' + heroClassSpecial + ')">' + 
							'<div class="coverImage" style="z-index: -10">' +
								'<img class="storageHeroCard storageShineZIndex" src="source/heroes/heroCards/' + heroClass2 + 'Shine.png" alt="Shine.error">' +
								'<img class="storageLabel storageLabelZIndex" src="source/heroes/heroCards/label.png" alt="storagelabel.error">' +
								'<img class="storageHeroCard storageHeroCardZIndex" src="source/heroes/heroCards/' + hero2 + '.png" alt="storageHeroCard' + hero2 + '.error">' +
								'<div id="storagebox' + heroClass2 + hero2 + '" class="storageboxNumber storageboxNumberZIndex"><b>1</b></div>' +
							'</div>' +
							'<div class="coverImage" style="z-index: -9"></div>' +
						'</div>';
				}
				// counter for heroes per class
				if (heroClass2 == "purple") {
					heroCardNumberpurple = heroCardNumberpurple + 1;
				}
				if (heroClass2 == "blue") {
					heroCardNumberblue = heroCardNumberblue + 1;
				}
				if (heroClass2 == "green") {
					heroCardNumbergreen = heroCardNumbergreen + 1;
				}
				if (heroClass2 == "sacrifice") {
					heroCardNumbersacrifice = heroCardNumbersacrifice + 1;
				}
				if ((heroCardNumberpurple + heroCardNumberblue + heroCardNumbergreen) != 0) {
				document.getElementById("storageFlagBigName1").innerHTML = 
					allTab + "<br>" + "(" +
					(heroCardNumberpurple + 
					heroCardNumberblue + 
					heroCardNumbergreen +
					heroCardNumbersacrifice) +
					")";
				}
			}
			if (hero2 == "Gelatinous Champion") {
				heroClass2 = "sacrifice";
			}
			if (hero2 == "Crystal Ooze") {
				heroClass2 = "blue";
			}
			// number change in storage
			if (heroCardNumberpurple != 0) {
				document.getElementById("storageFlagBigName2").innerHTML = 
					legendaryTab + "<br>" + "(" + 
					heroCardNumberpurple + ")";
			}
			if (heroCardNumberblue != 0) {
				document.getElementById("storageFlagBigName3").innerHTML = 
					eliteTab + "<br>" + "(" +
					heroCardNumberblue + ")";
			}
			if (heroCardNumbergreen != 0) {
				document.getElementById("storageFlagBigName4").innerHTML =
					ordinaryTab + "<br>" + "(" + 
					heroCardNumbergreen + ")";
			}
			if (heroCardNumbersacrifice != 0) {
				document.getElementById("storageFlagBigName5").innerHTML =
					sacrificeTab + "<br>" + "(" + 
					heroCardNumbersacrifice + ")";
			}
			storageNumberFontResize();
			break;
		default:
			alert(heroCard.error);
	}
}
// ----------------------------------------------------------------------

// purple light stars flying away from the middle on legendary hero spawn
function animationPurpleLightStars(number) {
	var purpleLightStars;
	switch(number) {
		case 3:
			if (heroClass1 == "purple" && hero1 != "Gelatinous Champion") {
				// div with light stars images as children
				purpleLightStars = document.getElementById("box1purpleLightStars").children;
				for(var i = 0; i < purpleLightStars.length; i++) {
					// random value for 'left:' between -28% and 112%
					purpleLightStars[i].style.left = ((Math.floor((Math.random() * (140 - 0)) + 0)) - 28) + "%";
					// random value for 'bottom:' between -8% and 100%
					purpleLightStars[i].style.bottom = ((Math.floor((Math.random() * (108 - 0)) + 0)) - 8) + "%";
					// random value for 'width:' between 9% and 8%
					purpleLightStars[i].style.width = Math.floor((Math.random() * (9 - 8)) + 8) + "%";
					purpleLightStars[i].style.animationDelay = (i * (0.5 / purpleLightStars.length)) + "s";
					// adds animation class
					purpleLightStars[i].className += " purpleLightStarsAnimation";
				}
			}
			if (heroClass3 == "purple" && hero3 != "Gelatinous Champion") {
				purpleLightStars = document.getElementById("box3purpleLightStars").children;
				for(var i = 0; i < purpleLightStars.length; i++) {
					purpleLightStars[i].style.left = ((Math.floor((Math.random() * (140 - 0)) + 0)) - 28) + "%";
					purpleLightStars[i].style.bottom = ((Math.floor((Math.random() * (108 - 0)) + 0)) - 8) + "%";
					purpleLightStars[i].style.width = Math.floor((Math.random() * (9 - 8)) + 8) + "%";
					purpleLightStars[i].style.animationDelay = (i * (0.5 / purpleLightStars.length)) + "s";
					purpleLightStars[i].className += " purpleLightStarsAnimation";
				}
			}
		case 1:
			if (heroClass2 == "purple" && hero2 != "Gelatinous Champion") {
				purpleLightStars = document.getElementById("box2purpleLightStars").children;
				for(var i = 0; i < purpleLightStars.length; i++) {
					purpleLightStars[i].style.left = ((Math.floor((Math.random() * (140 - 0)) + 0)) - 28) + "%";
					purpleLightStars[i].style.bottom = ((Math.floor((Math.random() * (108 - 0)) + 0)) - 8) + "%";
					purpleLightStars[i].style.width = Math.floor((Math.random() * (9 - 8)) + 8) + "%";
					purpleLightStars[i].style.animationDelay = (i * (0.5 / purpleLightStars.length)) + "s";
					purpleLightStars[i].className += " purpleLightStarsAnimation";
				}
			}
			break;
		default:
			alert("animationPurpleLightStars.error");
	}
}

function animationPurpleLightStarsReset() {
	var id, purpleLightStarsReset;
	for(var ii = 1; ii < 4; ii++) {
		id = "box" + ii + "purpleLightStars";
		purpleLightStarsReset = document.getElementById(id).children;
		for(var i = 0; i < purpleLightStarsReset.length; i++) {
			purpleLightStarsReset[i].className = "LightStars purpleLightStarsZIndex";
		}
	}
}
// ----------------------------------------------------------------------

// purple light bars flying to the middle on legendary hero spawn
function animationPurpleLightBar(number) {
	var purpleLightBarMiddleX, purpleLightBarMiddleY, purpleLightBarDelay, purpleLightBar, purpleLightBarLeft, purpleLightBarX, purpleLightBarY, radius, degrees;
	switch(number) {
		case 3:
			// B O X   1
			if (heroClass1 == "purple" && hero1 != "Gelatinous Champion") {
				// circle center point position in % (left;bottom)
				purpleLightBarMiddleX = 47;
				purpleLightBarMiddleY = 35;
				// start delay at 0
				purpleLightBarDelay = 0;
				// div with light bar images as children
				purpleLightBar = document.getElementById("box1purpleLightBar").children;
					for(var i = 0; i < purpleLightBar.length; i++) {
						// random width between 1.8% and 3.9%
						purpleLightBar[i].style.width = (Math.floor((Math.random() * (38 - 19)) + 19) / 10) + "%";
						// diameter from 'left:start' to 'left:end'
						purpleLightBarLeft = Math.floor((Math.random() * (94 - 0)) + 0);
						// length of x value
						purpleLightBarX = purpleLightBarLeft - purpleLightBarMiddleX;
						// smallest radius length is x or given radius if bigger
						if (Math.abs(purpleLightBarX) > 37) {
							radius = Math.floor((Math.random() * (47 - Math.abs(purpleLightBarX))) + Math.abs(purpleLightBarX))
						} else {
							radius = Math.floor((Math.random() * (47 - 37)) + 37)
						}
						// get according y length to radius and x
						purpleLightBarY = Math.sqrt((radius * radius) -  (purpleLightBarX * purpleLightBarX));
						// random spawn above or under center point
						if (Math.random() >= 0.5) {
							purpleLightBarY = purpleLightBarY * (- 1);
						}
						//get 'bottom:value' according to y length
						purpleLightBarBottom = purpleLightBarMiddleY + purpleLightBarY;
						// set 'left:' and 'bottom:'
						purpleLightBar[i].style.left = purpleLightBarLeft + "%";
						purpleLightBar[i].style.bottom = purpleLightBarBottom + "%";	
						// specific rotation of light bar pointing to center
						degrees = Math.atan(purpleLightBarX / purpleLightBarY) * (180 / Math.PI);
						purpleLightBar[i].style.transform = "rotate(" + degrees + "deg)";
						
						purpleLightBar[i].style.animationDelay = (0 + (purpleLightBarDelay + (i * (0.6 / purpleLightBar.length)))) + "s";
						purpleLightBar[i].className += " purpleLightBarAnimation";
					}
			}
			// B O X   3
			if (heroClass3 == "purple" && hero3 != "Gelatinous Champion") {
				purpleLightBarMiddleX = 47;
				purpleLightBarMiddleY = 35;
				purpleLightBarDelay = 0;
				purpleLightBar = document.getElementById("box3purpleLightBar").children;
					for(var i = 0; i < purpleLightBar.length; i++) {
						purpleLightBar[i].style.width = (Math.floor((Math.random() * (38 - 19)) + 19) / 10) + "%";
						purpleLightBarLeft = Math.floor((Math.random() * (94 - 0)) + 0);
						purpleLightBarX = purpleLightBarLeft - purpleLightBarMiddleX;
						if (Math.abs(purpleLightBarX) > 37) {
							radius = Math.floor((Math.random() * (47 - Math.abs(purpleLightBarX))) + Math.abs(purpleLightBarX))
						} else {
							radius = Math.floor((Math.random() * (47 - 37)) + 37)
						}
						purpleLightBarY = Math.sqrt((radius * radius) -  (purpleLightBarX * purpleLightBarX));
						if (Math.random() >= 0.5) {
							purpleLightBarY = purpleLightBarY * (- 1);
						}
						purpleLightBarBottom = purpleLightBarMiddleY + purpleLightBarY;
						purpleLightBar[i].style.left = purpleLightBarLeft + "%";
						purpleLightBar[i].style.bottom = purpleLightBarBottom + "%";	
						degrees = Math.atan(purpleLightBarX / purpleLightBarY) * (180 / Math.PI);
						purpleLightBar[i].style.transform = "rotate(" + degrees + "deg)";
						purpleLightBar[i].style.animationDelay = (0 + (purpleLightBarDelay + (i * (0.6 / purpleLightBar.length)))) + "s";
						purpleLightBar[i].className += " purpleLightBarAnimation";
					}
			}
		case 1:
			// B O X   2
			if (heroClass2 == "purple" && hero2 != "Gelatinous Champion") {
				purpleLightBarMiddleX = 47;
				purpleLightBarMiddleY = 35;
				purpleLightBarDelay = 0;
				purpleLightBar = document.getElementById("box2purpleLightBar").children;
					for(var i = 0; i < purpleLightBar.length; i++) {
						purpleLightBar[i].style.width = (Math.floor((Math.random() * (38 - 19)) + 19) / 10) + "%";
						purpleLightBarLeft = Math.floor((Math.random() * (94 - 0)) + 0);
						purpleLightBarX = purpleLightBarLeft - purpleLightBarMiddleX;
						if (Math.abs(purpleLightBarX) > 37) {
							radius = Math.floor((Math.random() * (47 - Math.abs(purpleLightBarX))) + Math.abs(purpleLightBarX))
						} else {
							radius = Math.floor((Math.random() * (47 - 37)) + 37)
						}
						purpleLightBarY = Math.sqrt((radius * radius) -  (purpleLightBarX * purpleLightBarX));
						if (Math.random() >= 0.5) {
							purpleLightBarY = purpleLightBarY * (- 1);
						}
						purpleLightBarBottom = purpleLightBarMiddleY + purpleLightBarY;
						purpleLightBar[i].style.left = purpleLightBarLeft + "%";
						purpleLightBar[i].style.bottom = purpleLightBarBottom + "%";	
						degrees = Math.atan(purpleLightBarX / purpleLightBarY) * (180 / Math.PI);
						purpleLightBar[i].style.transform = "rotate(" + degrees + "deg)";
						purpleLightBar[i].style.animationDelay = (0 + (purpleLightBarDelay + (i * (0.6 / purpleLightBar.length)))) + "s";
						purpleLightBar[i].className += " purpleLightBarAnimation";
					}
			}
			break;
		default:
			alert("animationPurpleLightBar.error");
	}
}

function animationPurpleLightBarReset() {
	var purpleLightBarReset;
	for(var ii = 1; ii < 4; ii++) {
		id = "box" + ii + "purpleLightBar";
		purpleLightBarReset = document.getElementById(id).children;
		for(var i = 0; i < purpleLightBarReset.length; i++) {
			purpleLightBarReset[i].className = "purpleLightBar purpleLightBarZIndex";
		}
	}
}
// ----------------------------------------------------------------------

// purple light behind legendary hero on spawn
function animationPurpleLightCircle(number) {
	var purpleLightCircle;
	switch(number) {
		case 3:
			if (heroClass1 == "purple" && hero1 != "Gelatinous Champion") {
				purpleLightCircle = document.getElementById("box1purpleLightCircle");
				purpleLightCircle.className += " purpleLightCircleAnimation";
			}
			if (heroClass3 == "purple" && hero3 != "Gelatinous Champion") {
				purpleLightCircle = document.getElementById("box3purpleLightCircle");
				purpleLightCircle.className += " purpleLightCircleAnimation";
			}
		case 1:
			if (heroClass2 == "purple" && hero2 != "Gelatinous Champion") {
				purpleLightCircle = document.getElementById("box2purpleLightCircle");
				purpleLightCircle.className += " purpleLightCircleAnimation";
			}
			break;
		default:
			alert("animationPurpleLightCircle.error");
	}
}

function animationPurpleLightCircleReset() {
	var purpleLightCircleReset, id;
	for(var ii = 1; ii < 4; ii++) {
		id = "box" + ii + "purpleLightCircle";
		purpleLightCircleReset = document.getElementById(id);
		purpleLightCircleReset.className = "rollBoxBackground purpleLightCircleZIndex";
	}
}
// ----------------------------------------------------------------------

// purple light behind legendary hero on spawn
function animationPurpleLight(number) {
	var purpleLight;
	switch (number) {
		case 3:
			if (heroClass1 == "purple" && hero1 != "Gelatinous Champion") {
				purpleLight = document.getElementById("box1purpleLight");
				purpleLight.className += " purpleLightAnimation";
			}
			if (heroClass3 == "purple" && hero3 != "Gelatinous Champion") {
				purpleLight = document.getElementById("box3purpleLight");
				purpleLight.className += " purpleLightAnimation";
			}
		case 1:
			if (heroClass2 == "purple" && hero2 != "Gelatinous Champion") {
				purpleLight = document.getElementById("box2purpleLight");
				purpleLight.className += " purpleLightAnimation";
			}
			break;
		default:
			alert("animationPurpleLight.error");
	}
}

function animationPurpleLightReset() {
	var purpleLight;
	for(var ii = 1; ii < 4; ii++) {
		id = "box" + ii + "purpleLight";
		purpleLight = document.getElementById(id);
		purpleLight.className = "rollBoxBackground purpleLightZIndex";
	}
}
// ----------------------------------------------------------------------

// light stars go up behind hero
function animationLightStars(number) {
	var id, animationLightStars, animationLightStarsBottom, animationLightStarsLeft;
	switch(number) {
		case 3:
			// B O X   1
			if (heroClass1 != "purple" && hero1 != "Gelatinous Champion") {
				id = "box1" + heroClass1 + "LightStars";
				animationLightStars = document.getElementById(id).children;
				for(var i = 0; i < animationLightStars.length; i++) {
					animationLightStarsBottom = Math.floor((Math.random() * (45 - 15)) + 15);
					animationLightStarsLeft = Math.floor((Math.random() * (74 - 21)) + 20);
					animationLightStars[i].style.bottom = animationLightStarsBottom + "%";
					animationLightStars[i].style.left = animationLightStarsLeft + "%";
					animationLightStars[i].style.width = (Math.floor((Math.random() * (8 - 6)) + 6)) + "%";
					animationLightStars[i].style.animationDelay = ((i * (1 / animationLightStars.length)) + 0.5) + "s";
					animationLightStars[i].className += " LightStarsAnimation";
				}
			}
			// B O X   3
			if (heroClass3 != "purple" && hero3 != "Gelatinous Champion") {
				id = "box3" + heroClass3 + "LightStars";
				animationLightStars = document.getElementById(id).children;
				for(var i = 0; i < animationLightStars.length; i++) {
					animationLightStarsBottom = Math.floor((Math.random() * (45 - 15)) + 15);
					animationLightStarsLeft = Math.floor((Math.random() * (74 - 21)) + 20);
					animationLightStars[i].style.bottom = animationLightStarsBottom + "%";
					animationLightStars[i].style.left = animationLightStarsLeft + "%";
					animationLightStars[i].style.width = (Math.floor((Math.random() * (8 - 6)) + 6)) + "%";
					animationLightStars[i].style.animationDelay = ((i * (1 / animationLightStars.length)) + 0.5) + "s";
					animationLightStars[i].className += " LightStarsAnimation";
				}
			}
		case 1:
			// B O X   2
			if (heroClass2 != "purple" && hero2 != "Gelatinous Champion") {
				id = "box2" + heroClass2 + "LightStars";
				animationLightStars = document.getElementById(id).children;
				for(var i = 0; i < animationLightStars.length; i++) {
					animationLightStarsBottom = Math.floor((Math.random() * (45 - 15)) + 15);
					animationLightStarsLeft = Math.floor((Math.random() * (74 - 21)) + 20);
					animationLightStars[i].style.bottom = animationLightStarsBottom + "%";
					animationLightStars[i].style.left = animationLightStarsLeft + "%";
					animationLightStars[i].style.width = (Math.floor((Math.random() * (8 - 6)) + 6)) + "%";
					animationLightStars[i].style.animationDelay = ((i * (1 / animationLightStars.length)) + 0.5) + "s";
					animationLightStars[i].className += " LightStarsAnimation";
				}
			}
			break;
		default:
			alert("animationLightStars.error");
	}
}

function animationLightStarsReset() {
	var id, animationReset1, animationReset2;
	for(var iii = 1; iii < 4; iii++) {
		id = "box" + iii + "LightStars";
		animationReset1 = document.getElementById(id).children;
		for(var i = 0; i < animationReset1.length; i++) {
			var animationReset2 = animationReset1[i].children;
			for(var ii = 0; ii < animationReset2.length; ii++) {
				animationReset2[ii].className = "LightStars LightStarsZIndex";
			}
		}
	}
}
// ----------------------------------------------------------------------

// light stripes fade out before hero spawn
function animationLightStripes(number) {
	var id, LightStarsAnimation;
	switch(number) {
		case 3:
			// 1
			if (hero1 != "Gelatinous Champion") {
				id = "box1" + heroClass1 + "LightStripes";
				LightStarsAnimation = document.getElementById(id);
				LightStarsAnimation.className += " LightStripesAnimation";
			}
			// 3
			if (hero3 != "Gelatinous Champion") {
				id = "box3" + heroClass3 + "LightStripes";
				LightStarsAnimation = document.getElementById(id);
				LightStarsAnimation.className += " LightStripesAnimation";
			}
		case 1:
			// 2
			if (hero2 != "Gelatinous Champion") {
				id = "box2" + heroClass2 + "LightStripes";
				LightStarsAnimation = document.getElementById(id);
				LightStarsAnimation.className += " LightStripesAnimation";
			}
			break;
		default:
			alert("animationLightStripes.error");
	}
}

// light flash right before hero spawn
function animationLight(number) {
	var id, lightAnimation;
	switch(number) {
		case 3:
			if (heroClass1 != "purple" && heroClass1 != "sacrifice") {
				id = "box1" + heroClass1 + "Light";
				lightAnimation = document.getElementById(id);
				lightAnimation.className += " LightAnimation";
			}
			if (heroClass3 != "purple" && heroClass3 != "sacrifice") {
				id = "box3" + heroClass3 + "Light";
				lightAnimation = document.getElementById(id);
				lightAnimation.className += " LightAnimation";
			}
		case 1:
			if (heroClass2 != "purple" && heroClass2 != "sacrifice") {
				id = "box2" + heroClass2 + "Light";
				lightAnimation = document.getElementById(id);
				lightAnimation.className += " LightAnimation";
			}
			break;
		default:
			alert("animationLight.error")
	}
}

function animationLightReset() {
	// reset for box 1
	var animationReset = document.getElementById("box1light").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "rollBoxBackground lightZIndex";
	}
	// reset for box 2
	var animationReset = document.getElementById("box2light").children;
	for(var i = 0; i < animationReset.length; i++) {
		animationReset[i].className = "rollBoxBackground lightZIndex";
	}
	// reset for box 3
	var animationReset = document.getElementById("box3light").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "rollBoxBackground lightZIndex";
	}
}
// ----------------------------------------------------------------------

// 
function animationLightStripesReset() {
	// reset for box 1
	var animationReset = document.getElementById("box1lightStripes").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "rollBoxBackground lightStripesZIndex";
	}
	// reset for box 2
	var animationReset = document.getElementById("box2lightStripes").children;
	for(var i = 0; i < animationReset.length; i++) {
		animationReset[i].className = "rollBoxBackground lightStripesZIndex";
	}
	// reset for box 3
	var animationReset = document.getElementById("box3lightStripes").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "rollBoxBackground lightStripesZIndex";
	}
}

// display heroname
function heroNameDisplay(number) {
	var element;
	switch(number) {
		case 3:
			if (language == "german") {
				for (i = 0; i < heroesEng.length; i++) {
					if (heroesEng[i] == hero1) {
						var name1 = heroesGer[i];
					}
				}
			} else {
				name1 = hero1;
			}
			element = document.getElementById("box1heroName");
			element.innerHTML = name1;
			
			if (language == "german") {
				for (i = 0; i < heroesEng.length; i++) {
					if (heroesEng[i] == hero3) {
						var name3 = heroesGer[i];
					}
				}
			} else {
				name3 = hero3;
			}
			element = document.getElementById("box3heroName");
			element.innerHTML = name3;
		case 1:
			if (language == "german") {
				for (i = 0; i < heroesEng.length; i++) {
					if (heroesEng[i] == hero2) {
						var name2 = heroesGer[i];
					}
				}
			} else {
				name2 = hero2;
			}
			element = document.getElementById("box2heroName");
			element.innerHTML = name2;
			break;
		default:
			alert("heroNameDisplay.error");
	}
}
function heroNameDisplayReset() {
var id, element;
	// resetting all shown display names before new ones get displayed
	for(var i = 1; i < 4; i++) {
		id = "box" + i + "heroName";
		element = document.getElementById(id);
		element.innerHTML = "";
	}
}
// ----------------------------------------------------------------------

// function resetting all running ring animations when new ones begin
function animationRingReset() {
	// reset for box 1
	var animationReset = document.getElementById("box1Ring").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "rollBoxBackground RingAnimation rollBoxRingZIndex";
	}
	// reset for box 2
	var animationReset = document.getElementById("box2Ring").children;
	for(var i = 0; i < animationReset.length; i++) {
		animationReset[i].className = "rollBoxBackground RingAnimation rollBoxRingZIndex";
	}
	// reset for box 3
	var animationReset = document.getElementById("box3Ring").children;
	for(var i = 0; i < animationReset.length; i++) {
		animationReset[i].className = "rollBoxBackground RingAnimation rollBoxRingZIndex";
	}
}
// ----------------------------------------------------------------------

// function for colored ring animation before hero spawn
function animationRing(number) {
	var animationSet, box;
	switch(number) {
		case 3:
			var animationSet, counter, test
			if (heroClass1 != "purple" && heroClass1 != "sacrifice") {
				animationSet = document.getElementById("box1Ring").children;
				counter = 1;
				test = false;
				if (heroClass1 == "blue") {
					test = true
				}
				for(var i = 0; i < animationSet.length; i++) {
					if (/blue/.test(animationSet[i].id) == test) {
						animationSet[i].className += " Ring" + (counter) +"Animation";
						counter++;
					}
				}
			}
			if (heroClass3 != "purple" && heroClass3 != "sacrifice") {
				animationSet = document.getElementById("box3Ring").children;
				counter = 1;
				test = false;
				if (heroClass3 == "blue") {
					test = true
				}
				for(var i = 0; i < animationSet.length; i++) {
					if (/blue/.test(animationSet[i].id) == test) {
						animationSet[i].className += " Ring" + (counter) +"Animation";
						counter++;
					}
				}
			}
		case 1:
			if (heroClass2 != "purple" && heroClass2 != "sacrifice") {
				animationSet = document.getElementById("box2Ring").children;
				counter = 1;
				test = false;
				if (heroClass2 == "blue") {
					test = true
				}
				for(var i = 0; i < animationSet.length; i++) {
					if (/blue/.test(animationSet[i].id) == test) {
						animationSet[i].className += " Ring" + (counter) +"Animation";
						counter++;
					}
				}
			}
			break;
		default:
			alert("animationRing.error");
	}
}
// ----------------------------------------------------------------------

// animation for hero spawn
function animationSpawn(number) {
	var id, boxheropic;
	switch(number) {
		case 3:
			boxhero = document.getElementById("box1HeroImage");
			boxhero.src = `source/heroes/heroesNormal/${hero1}.png`;
			boxhero.alt = `${hero1}.error`;
			boxhero.style.animationPlayState = "running";
			boxhero.className += " SpawnAnimation";
			
			boxhero = document.getElementById("box3HeroImage");
			boxhero.src = `source/heroes/heroesNormal/${hero3}.png`;
			boxhero.alt = `${hero3}.error`;
			boxhero.style.animationPlayState = "running";
			boxhero.className += " SpawnAnimation";
		case 1:
			boxhero = document.getElementById("box2HeroImage");
			boxhero.src = `source/heroes/heroesNormal/${hero2}.png`;
			boxhero.alt = `${hero2}.error`;
			boxhero.style.animationPlayState = "running";
			boxhero.className += " SpawnAnimation";
			break;
		default:
			alert(animationSpawn.error);
	}
}

function animationSpawnReset() {
	// reset for box 1
	var animationReset = document.getElementById("box1herobox").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "heroPic heroPicZIndex";
	}
	// reset for box 2
	var animationReset = document.getElementById("box2herobox").children;
	for(var i = 0; i < animationReset.length; i++) {
		animationReset[i].className = "heroPic heroPicZIndex";
	}
	// reset for box 3
	var animationReset = document.getElementById("box3herobox").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "heroPic heroPicZIndex";
	}
}
// ----------------------------------------------------------------------

// animation for background light rotation
function animationLightRotation(number) {
	var id;
	switch(number) {
		case 3:
			id = "box1" + heroClass1 + "LightRingPic";
			LightRing = document.getElementById(id);
			if (heroClass1 == "purple" || heroClass1 == "sacrifice") {
				LightRing.className += " purpleLightRingAnimation";
			} else {
				LightRing.className += " LightRingAnimation";
			}
			id = "box3" + heroClass3 + "LightRingPic";
			LightRing = document.getElementById(id);
			if (heroClass3 == "purple" || heroClass3 == "sacrifice") {
				LightRing.className += " purpleLightRingAnimation";
			} else {
				LightRing.className += " LightRingAnimation";
			}
		case 1:
			id = "box2" + heroClass2 + "LightRingPic";
			LightRing = document.getElementById(id);
			if (heroClass2 == "purple" || heroClass2 == "sacrifice") {
				LightRing.className += " purpleLightRingAnimation";
			} else {
				LightRing.className += " LightRingAnimation";
			}
			break;
		default:
			alert("animationLightRotation.error");
	}
}

function animationLightRotationReset() {
	// reset for box 1
	var animationReset = document.getElementById("box1LightRing").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "LightRingPic LightRingZIndex";
	}
	// reset for box 2
	var animationReset = document.getElementById("box2LightRing").children;
	for(var i = 0; i < animationReset.length; i++) {
		animationReset[i].className = "LightRingPic LightRingZIndex";
	}
	// reset for box 3
	var animationReset = document.getElementById("box3LightRing").children;
	for(var i = 0; i < animationReset.length; i++) {
	animationReset[i].className = "LightRingPic LightRingZIndex";
	}
}

// ----------------------------------------------------------------------	

// colored background according to hero class
function backgroundDisplay(number) {
	// show flag + background according to hero
	switch(number) {
		case 3:
			// 1
			var id = "box1" + heroClass1 + "Box";
			document.getElementById(id).style.opacity = 1;
			document.getElementById("box1Flag").style.opacity = 1;
			if (heroClass1 == "purple" && hero1 != "Gelatinous Champion") {
				document.getElementById("box1purpleLight").style.opacity = 1;
			} 
			if (heroClass1 == "blue" || heroClass1 == "green") {
				var id = "box1" + heroClass1 + "Ring1";
				document.getElementById(id).style.opacity = 1;
			}
			// 3
			var id = "box3" + heroClass3 + "Box";
			document.getElementById(id).style.opacity = 1;
			document.getElementById("box3Flag").style.opacity = 1;
			if (heroClass3 == "purple" && hero3 != "Gelatinous Champion") {
				document.getElementById("box3purpleLight").style.opacity = 1;
			}
			if (heroClass3 == "blue" || heroClass3 == "green") {
				var id = "box3" + heroClass3 + "Ring1";
				document.getElementById(id).style.opacity = 1;
			}
		case 1:
			// 2
			var id = "box2" + heroClass2 + "Box";
			document.getElementById(id).style.opacity = 1;
			document.getElementById("box2Flag").style.opacity = 1;
			if (heroClass2 == "purple" && hero2 != "Gelatinous Champion") {
				document.getElementById("box2purpleLight").style.opacity = 1;
			}
			if (heroClass2 == "blue" || heroClass2 == "green") {
				var id = "box2" + heroClass2 + "Ring1";
				document.getElementById(id).style.opacity = 1;
			}
			break;
		default:
			alert("backgroundDisplay.error");
	}
}		
function backgroundDisplayReset() {
	var id, animationSet;
	// reset all shown backgrounds
	for(var i = 1; i < 4; i++) {
		id = "box" + i + "background";
		animationSet = document.getElementById(id).children;
		for(var ii = 0; ii < animationSet.length; ii++) {
			animationSet[ii].style.opacity = 0;
		}
		id = "box" + i + "blueRing1";
		document.getElementById(id).style.opacity = 0;
		id = "box" + i + "greenRing1";
		document.getElementById(id).style.opacity = 0;	
		id = "box" + i + "Flag";
		document.getElementById(id).style.opacity = 0;
		id = "box" + i + "purpleLight";
		document.getElementById(id).style.opacity = 0;
	}
}
// ----------------------------------------------------------------------

// light.png according to class
function lightChoose() {
	switch(heroClass) {
		case "purple":
		case "blue":
		case "green":
			document.getElementById("box1light").innerHTML = '<img id="blueLight1" class="box1light" src="source/heroes/animations/blueLight/blueLight2.png">';
			break;
		default:
			alert("lightChoose.error");
	}
}
// ----------------------------------------------------------------------