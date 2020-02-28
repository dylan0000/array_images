let count = 0
let coin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f . . . . . . . 
. . . . . f 5 5 5 f f f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 f f . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f f 5 5 5 5 5 5 5 5 5 5 f . 
. . . f 5 5 5 5 5 5 5 5 5 5 f . 
. . . f f f f 5 5 5 5 5 5 f f . 
. . . . . . . f f f f f f f . . 
`, SpriteKind.Player)
let list = [img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`, img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 d 1 5 b . 
. b 5 3 1 5 b . 
. c 5 3 1 d c . 
. c 5 1 d d c . 
. . f d d f . . 
. . . f f . . . 
`, img`
. . . b b . . . 
. . b 5 5 b . . 
. . b 1 1 b . . 
. . b 5 5 b . . 
. . b d d b . . 
. . c d d c . . 
. . c 3 3 c . . 
. . . f f . . . 
`, img`
. . . b b . . . 
. . b 5 5 b . . 
. b 5 1 d 5 b . 
. b 5 1 3 5 b . 
. c d 1 3 5 c . 
. c d d 1 5 c . 
. . f d d f . . 
. . . f f . . . 
`, img`
. . . b b b . . 
. . b 5 5 5 b . 
. b 5 d 3 d 5 b 
. b 5 1 5 3 5 b 
. c d 1 5 3 5 c 
. c d d 1 d 5 c 
. . f d d d f . 
. . . f f f . . 
`]
game.onUpdateInterval(100, function () {
    coin.setImage(list[count])
    if (count < 6) {
        count += 1
    } else {
        count = 0
    }
})
