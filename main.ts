namespace SpriteKind {
    export const weaponmid = SpriteKind.create()
}
function title_screen () {
	
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    mySprite2.vy = -100
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.InBackground)
})
function player_with_movement () {
    mySprite = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 f f f f f 2 2 f f f f 
        2 2 2 2 2 2 2 f f 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 f f f f f f 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    mySprite2 = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 f f f 8 8 f f f 8 8 8 
        8 8 f 8 8 8 8 f 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 f f f f f 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, SpriteKind.Player)
    controller.player2.moveSprite(mySprite2, 100, 0)
    controller.player1.moveSprite(mySprite, 100, 0)
    mySprite2.ay = 200
    mySprite.ay = 200
    mySprite.setPosition(12, 95)
    mySprite2.setPosition(144, 95)
}
function medium_wepon (iswepthere: boolean) {
    if (iswepthere && true) {
    	
    } else {
    	
    }
}
function music2 () {
    music.play(music.createSong(hex`0078000408040100001c00010a006400f401640000040000000000000000000000000005000004ac000000040001220c001000011b10001400011e14001800011b18001c00011d1c002000021d2520002400012224002800031b1e2528002c0001252c003000011d3000340002222a34003800012038003c0001253c004000011d4000440001274400480002222a4c005000021b2250005400021b255400580002202758005c0001255c006000012060006400012764006800012268006c00021e226c007000012070007400012474007800021e27`), music.PlaybackMode.LoopingInBackground)
}
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
player_with_movement()
tiles.setCurrentTilemap(tilemap`level1`)
medium_wepon(true)
let medweps = [
sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . c . . . . . . . . . 
    . . . c c . . . . . . . . 
    . . . . c c c c c c c c c 
    . . . . c c c c c c c c c 
    f f f f f . . c . . . f . 
    f f f f f f f . . . . f . 
    f f f . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.weaponmid),
sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . f f f f f c c c . 
    . . . f f f f f f f c c . 
    . . f f f . . f f f . . . 
    . . f f . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.weaponmid),
sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . f f c c c c c c c c c 
    . . f . . c c c c c c c c 
    . . f . . c c c . c . . . 
    . . . . . f f c . . . . . 
    . . . . . . f . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.weaponmid),
sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . f . . . . . 
    f f f c c c c c f f f . . 
    f f f . c c c c c c f f f 
    f f . . f f . . . f f . . 
    . . . . f f . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `, SpriteKind.weaponmid)
]
let medwepsspawn = sprites.allOfKind(SpriteKind.weaponmid)
music2()
