// Kait Srivastav
// Rocket Patrol 2077: Faster Than Ever
// 2 hours
// MODS IMPLEMENTED: 
// - Implement a new timing/scoring mechanism that adds time to the clock for successful hits and subtracts time for misses (5)
// - Implement mouse control for player movement and left mouse click to fire (5)
// - Use Phaser's particle emitter to create a particle explosion when the rocket hits the spaceship (5) 
// - Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
// extra notes
// values for time/scoring systems can be found below
// the extra fast ship at the top gives 100 points, over 3x the highest big ship
// it also rewards 10 extra seconds if you are able to hit it
// also this project was kind of hobbled together messily and so I don't really end up
// following the principles of single-responsiblity or encapsulation due to already existing codebase
// I tried to inject any dependencies into my classes and not have them grab any refrences from their parents
// to keep everything loosely coupled

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