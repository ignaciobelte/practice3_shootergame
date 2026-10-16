class Boss extends Opponent {
    constructor(game) {
        super(game);
        this.myImage = "assets/boss.png";
        this.myImageDead = "assets/boss_dead.png";
        this.image.src = this.myImage;
        this.speed = OPPONENT_SPEED * 2;
        this.x = (this.game.width - this.width) / 2;
        this.y = 40;
    }
}