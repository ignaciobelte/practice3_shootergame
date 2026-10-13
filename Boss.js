class Boss extends Opponent {
    constructor(game) {
        super(game);
        this.width = 80;
        this.height = 80;
        this.x = this.game.canvas.width / 2 - this.width / 2;
        this.y = 40;
        
        this.myImage = "assets/boss.png";
        this.myImageDead = "assets/boss_dead.png";
        this.image.src = this.myImage;
        
        // Boss specific speed or movement direction if needed
        this.speed = 2; 
    }

    update() {
        super.update();
        // Add custom boss movement here if needed (e.g., side-to-side patrolling)
        this.x += this.speed;
        if (this.x <= 0 || this.x + this.width >= this.game.canvas.width) {
            this.speed = -this.speed; // Reverse direction when hitting walls
        }
    }
}