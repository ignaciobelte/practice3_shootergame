/**
 * Main character of the game. Inherits from the Character class
 * @extends Character
 */
class Player extends Character {
    /**
    * Initializes a player
    * @param game {Game} The instance of the game to which the player belongs
    */

    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImage = PLAYER_PICTURE,
            myImageDead = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
        this.LIVES = PLAYER_LIVES;
    }

    /**
     * Update the position attributes of the player and the shots based on the keys pressed
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Kill the player
     */
    collide() {
        if (!this.dead) {
            // Decrease lives when hit
            this.LIVES--;

            if (this.LIVES > 0) {
                // If player still has lives, revive after 2 seconds
                setTimeout(() => {
                    this.image.src = this.myImage; // Recover original image
                    this.dead = false;
                }, 2000);
                super.collide(); // Sets dead = true and shows dead image temporarily
            } else {
                // If no lives are left, die permanently and end game after 2 seconds
                setTimeout(() => {
                    this.game.endGame();
                }, 2000);
                super.collide();
            }
        }
    }
}