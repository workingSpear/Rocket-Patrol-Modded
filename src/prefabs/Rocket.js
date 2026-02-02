// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)

    scene.add.existing(this); // adds to existing, displayList, updateList
    this.isFiring = false;    // tracks the rocket's state
    this.moveSpeed = 0.2;       // rocket's speed in pixels/frame
    this.sfxShot = scene.sound.add('sfx-shot');
  }

  update(delta) {
    let speedThisFrame = this.moveSpeed * delta;

    // left/right movement
    if(!this.isFiring) {
      if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
        this.x -= speedThisFrame;
      }
      else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width)
      {
        this.x += speedThisFrame;
      }
      }

      //fire
      if(Phaser.Input.Keyboard.JustDown(keyFIRE) && !this.isFiring) {
        this.isFiring = true;
        this.sfxShot.play();
      }

      // move up based on firing state
      if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
        this.y -= speedThisFrame;
      }

      // reset on miss
      if(this.y <= borderUISize * 3 + borderPadding) {
        this.reset();
      }
  }

  // reset rocket to "ground"
  reset() {
    this.isFiring = false;
    this.y = game.config.height - borderUISize - borderPadding;
  }
}