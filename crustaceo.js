var config = {
type: Phaser.AUTO,
width: 800,
height: 600,

scene: {
    preload: preload,
    create: create,
    update: update,
}

};

var game = new Phaser.Game(config);

var peixe;

function preload(){
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('peixe', 'assets/peixe/crustaceo.png');

    this.load.image('algas', 'assets/algas.png.png');
}

function create(){
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    this.add.image(400, 525, 'algas').setScale(0.3).setOrigin(1.2, 0.7);

    peixe = this.add.image(400, 300, 'peixe');

    peixe.setFlip(true, false);
}

function update(){
    peixe.x = this.input.x;
    peixe.y = this.input.y;
}