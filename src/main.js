let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
};

let game = new Phaser.Game(config);

//configurable variables that help determine the white border + green bar on the game UI
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve blank variables for keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT