// Kait Srivastav
//your modification's title (e.g. Rocket Patrol Reloaded IV: The Rocketing)
//the approximate time it took to complete the project (in hours)
//the mods you chose from the list below, their point values, and if necessary, an explanation of their implementation
//citations for any sources you used in your code (you do not need to cite Nathan's code or Phaser documentation)

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
};

let game = new Phaser.Game(config);

// config vars for scoring
let onMissTimeReduction = 3000; // in ms
let onHitTimeIncrease = 500; // in ms 
let missed = false;

//configurable variables that help determine the white border + green bar on the game UI
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve blank variables for keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT