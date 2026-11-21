scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    junebug.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(true)
})
let junebug: Sprite = null
scene.setBackgroundColor(9)
junebug = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f f 
    . . . . . . . . . . . . f 5 f f 
    f f f f f f f f f f f f f f f f 
    . . . f f f f f f f f f f f f . 
    . . . f f f f f f f f f f f f . 
    . . . f . f . . . . . . f . f . 
    . . . f . f . . . . . . f . f . 
    . . . 1 . 1 . . . . . . 1 . 1 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(junebug, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
junebug.ay = 350
scene.cameraFollowSprite(junebug)
