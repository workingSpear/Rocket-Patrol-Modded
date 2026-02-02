// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, input) {
    super(scene, x, y, texture, frame)

    scene.add.existing(this); // adds to existing, displayList, updateList
    this.isFiring = false;    // tracks the rocket's state
    this.moveSpeed = 0.2;       // rocket's speed in pixels/frame
    this.sfxShot = scene.sound.add('sfx-shot');
    this.sceneInput = input;
  }

  update(delta) {
    let speedThisFrame = this.moveSpeed * delta;

    // left/right movement
    if(!this.isFiring) {
      this.x = this.sceneInput.activePointer.x;
      }

      //fire
      if(this.sceneInput.activePointer.isDown && !this.isFiring) {
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