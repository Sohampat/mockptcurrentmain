namespace SpriteKind {
    export const Block = SpriteKind.create()
    export const Player22 = SpriteKind.create()
    export const NiceMob = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player22, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Plr1Attacking) {
        sprites.destroy(otherSprite)
    }
})
function NiceMobRngMove (list: any[]) {
    for (let index4 = 0; index4 <= list.length; index4++) {
        if (list[index4]) {
            if (Math.percentChance(25)) {
                for (let index = 0; index < 10; index++) {
                    list[index4].vx = 15
if (list[index4].tileKindAt(TileDirection.Right, img`
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                        `) || list[index4].tileKindAt(TileDirection.Right, img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 7 7 7 . . . . . . . 
                        . . . 7 7 7 7 7 7 7 7 . . . . . 
                        . . 7 7 7 7 7 7 7 7 7 7 . . . . 
                        . . 7 7 7 7 7 7 7 7 7 7 . . . . 
                        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
                        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
                        . . . 7 7 7 7 7 7 7 7 7 . . . . 
                        . . . . . 7 e 7 e 7 . . . . . . 
                        . . . . . e 7 e e e . . . . . . 
                        . . . . . e e e e e . . . . . . 
                        . . . . . e e e e e . . . . . . 
                        . . . . . e e e e e . . . . . . 
                        . . . . . e e e e e . . . . . . 
                        . . . . . e e e e e . . . . . . 
                        . . . . . e e e e e . . . . . . 
                        `)) {
                        list[index4].y += -20
list[index4].x += 23
                    }
                }
                list[index4].ay = 300
            }
        }
    }
}
function FillInsideOfCave () {
    for (let index222 = 0; index222 <= 300; index222++) {
        for (let index2 = 0; index2 <= BlockHeightLimit; index2++) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index2 - 1), assets.tile`transparency16`) && tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index2 + 1), Stone) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index2), assets.tile`transparency16`) || tiles.tileAtLocationEquals(tiles.getTileLocation(index222, index2), Iron))) {
                tiles.setTileAt(tiles.getTileLocation(index222, index2), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index222, index2), Lava)
            }
        }
    }
    for (let index2222 = 0; index2222 <= 300; index2222++) {
        for (let index22 = 0; index22 <= BlockHeightLimit; index22++) {
            if (Math.percentChance(50) && tiles.tileAtLocationEquals(tiles.getTileLocation(index2222, index22), Lava)) {
                tiles.setTileAt(tiles.getTileLocation(index2222, index22 - 1), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index2222, index22 - 1), Lava)
            } else if (Math.percentChance(50) && tiles.tileAtLocationEquals(tiles.getTileLocation(index2222, index22), Lava)) {
                tiles.setTileAt(tiles.getTileLocation(index2222, index22 - 1), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index2222, index22 - 1), Stone)
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index2222 + 1, index22), Lava) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index2222, index22), assets.tile`transparency16`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index2222 - 1, index22), Lava) || tiles.tileAtLocationEquals(tiles.getTileLocation(index2222 + 1, index22), Lava)))) {
                tiles.setTileAt(tiles.getTileLocation(index2222, index22), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index2222, index22), Lava)
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index2222, index22 - 1), Lava) && tiles.tileAtLocationEquals(tiles.getTileLocation(index2222, index22), assets.tile`transparency16`)) {
                tiles.setTileAt(tiles.getTileLocation(index2222, index22), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index2222, index22), Lava)
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index2222, index22), Lava) && tiles.tileAtLocationEquals(tiles.getTileLocation(index2222 + 1, index22), assets.tile`transparency16`)) {
                tiles.setTileAt(tiles.getTileLocation(index2222 + 1, index22), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index2222 + 1, index22), Lava)
                console.log("SpecialCase1")
            }
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(index2222, index22), Lava) && tiles.tileAtLocationEquals(tiles.getTileLocation(index2222, index22 + 1), assets.tile`transparency16`)) {
                tiles.setTileAt(tiles.getTileLocation(index2222 + 1, index22), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index2222 + 1, index22), Lava)
                console.log("SpecialCase2")
            }
        }
    }
    for (let index2223 = 0; index2223 <= 300; index2223++) {
        for (let index3 = 0; index3 <= BlockHeightLimit; index3++) {
            if (Math.percentChance(50) && tiles.tileAtLocationEquals(tiles.getTileLocation(index2223, index3), Lava)) {
                tiles.setTileAt(tiles.getTileLocation(index2223, index3 - 1), Stone)
                tiles.setTileAt(tiles.getTileLocation(index2223, index3 - 1), Stone)
            } else if (Math.percentChance(25) && tiles.tileAtLocationEquals(tiles.getTileLocation(index2223, index3), Lava)) {
                tiles.setTileAt(tiles.getTileLocation(index2223, index3 - 1), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(index2223, index3 - 1), Iron)
            }
            if (Math.percentChance(25) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index2223, index3), Stone) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index2223, index3 + 1), assets.tile`transparency16`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index2223, index3 + 2), assets.tile`transparency16`) && (tiles.tileAtLocationEquals(tiles.getTileLocation(index2223, index3 + 3), assets.tile`transparency16`) && tiles.tileAtLocationEquals(tiles.getTileLocation(index2223, index3 + 4), assets.tile`transparency16`)))))) {
                RandomNumb = randint(2, 3)
                for (let indexx = 0; indexx <= RandomNumb; indexx++) {
                    tiles.setTileAt(tiles.getTileLocation(index2223, index3 + indexx), Stalagmites)
                    tiles.setTileAt(tiles.getTileLocation(index2223, index3 + (RandomNumb + 1)), StalagmiteTip)
                }
            }
        }
    }
}
function GenerateTutorialTerrain () {
    current_tilemap_level = tilemap`level2`
    tiles.setCurrentTilemap(current_tilemap_level)
    for (let index22222 = 0; index22222 <= 10000; index22222++) {
        DefaultBlockHeight = 2
        ColumBlockHeight = DefaultBlockHeight
        PlaceBlockColumn1(index22222, ColumBlockHeight)
    }
    game.showLongText("This is the tutorial screen.", DialogLayout.Bottom)
    game.showLongText("Here are the controls: ", DialogLayout.Bottom)
    game.showLongText("W, A, S, D for normal movement", DialogLayout.Bottom)
    game.showLongText("E for attack", DialogLayout.Bottom)
    game.showLongText("Spacebar To Toggle Between Mining And Normal Movement.", DialogLayout.Bottom)
    game.showLongText("The keys for mining are the normal movement keys", DialogLayout.Bottom)
    game.showLongText("Explore the world, fight monsters, and survive(or find the amethyst block and win) This is still in testing and will be refined in the future.", DialogLayout.Bottom)
    GenerateTerrain()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    Plr2Attacking = true
    if (Sprite2LookLeft == true) {
        animation.stopAnimation(animation.AnimationTypes.All, Player2)
        animation.runImageAnimation(
        Player2,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            .........11.f222feeeeff.
            .......cc1..feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            .....1..1.ff222eeeeeeff.
            ....1..11.feeeefffeeeef.
            ....1.11.fe2222eeefffff.
            ......1..f2efffff222efff
            ..cc..1..fffeeefffffffff
            ..cdcc...fee44fbbe44efef
            ..ccddcc..feddfbb4d4eef.
            ....cdddceefddddd4eeef..
            .....ccdcddee2222222f...
            ......cccdd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ......1....feeeeffeeeef.
            .....11.11fe2222eefffff.
            .....1..1.f2effff222efff
            ....11.1..fffeeeffffffff
            ....1..1..fee44fbe44efef
            ....11.1...feddfb4d4eef.
            .....1.11.c.eeddd4eeef..
            ....c11c11ceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ....1......fffeeefffffff
            ...11.11...fee44fbe44eff
            ...1..1.....feddf14d4eef
            ...1..11.....fdddd4eeef.
            ...1...1.....fe444eddf..
            ....1..1.....ccc22eddf..
            ....1..11....cdc22fee...
            ....11..11..cddc4444f...
            .....1...11cddcfffff....
            .....11...cddc..fff.....
            ......11..cdc...........
            .......11.cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        50,
        false
        )
    } else if (Sprite2LookRight == true) {
        animation.stopAnimation(animation.AnimationTypes.All, Player2)
        animation.runImageAnimation(
        Player2,
        [img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.11..........
            .ffeeeef222f.1..........
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef.....1.....
            .fffffee2222ef.1..11....
            fffe222ffffe2f.11..11...
            ffffffffeeefff..11..1...
            fefe44ebf44eef...11.1...
            .fee4d4bfddef.....1.....
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef.1....1.....
            .ffffee2222ef11...11....
            .fe222ffffe2f.11...11...
            fffffffeeefff..1....1...
            ffe44ebf44eef...1....1..
            fee4d41fddef....1....1..
            .feee4ddddf.....1.....1.
            ..fdde444ef.....11....1.
            ..fdde22ccc......1....1.
            ...eef22cdc.....11....1.
            ...f4444cddc....1.....1.
            ....fffffcddc...1...111.
            .....fff..cddc.11.......
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        50,
        false
        )
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Player1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Player1.vy == 0) {
        Player1.vy = -150
    }
    if (Player1Mining) {
        tiles.setTileAt(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
        tiles.setWallAt(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), false)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Player2Mining) {
        Player2Mining = false
    } else {
        Player2Mining = true
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (Player2Mining) {
        Hotbar(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).row, Player2.tilemapLocation().column)
        tiles.setTileAt(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), false)
    }
})
function CreateCaves (col: number, row: number) {
    row = row + 10
    for (let index223 = 0; index223 <= 200; index223++) {
        if (Math.percentChance(5)) {
            currentTile = tiles.getTileLocation(index223, row)
            if (tiles.tileAtLocationEquals(currentTile, Stone)) {
                radius = 5
                createCircle(index223, row, radius)
                if (Math.percentChance(10)) {
                    createCircle(index223 - randint(0, -9), row - randint(0, 9), Math.sqrt(randint(1, 15)))
                }
                if (Math.percentChance(40)) {
                    createCircle(index223 - randint(0, -9), row + randint(0, 9), Math.sqrt(randint(1, 15)))
                }
                if (Math.percentChance(50)) {
                    createCircle(index223 + randint(0, 9), row, Math.sqrt(randint(1, 15)))
                }
                if (Math.percentChance(50)) {
                    createCircle(index223 - randint(0, 9), row + randint(0, 9), Math.sqrt(randint(1, 15)))
                }
            } else if (tiles.tileAtLocationEquals(currentTile, assets.tile`transparency16`)) {
            	
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.NiceMob, function (sprite, otherSprite) {
    if (Plr1Attacking) {
        sprites.destroy(otherSprite)
        info.player1.changeLifeBy(1)
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Player2)
})
sprites.onOverlap(SpriteKind.Player22, SpriteKind.NiceMob, function (sprite, otherSprite) {
    if (Plr1Attacking) {
        sprites.destroy(otherSprite)
        info.player2.changeLifeBy(2)
    }
})
function UnderGroundColumn (Column: number, Row: number) {
    for (let i = 0; i <= Row; i++) {
        tiles.setTileAt(tiles.getTileLocation(Column, i + 7), Stone)
        if (Math.percentChance(5 + i / 10)) {
            tiles.setTileAt(tiles.getTileLocation(Column, i + 7), Iron)
            if (Math.percentChance(2 + i / 20)) {
                tiles.setTileAt(tiles.getTileLocation(Column, i + 7), assets.tile`transparency16`)
                tiles.setTileAt(tiles.getTileLocation(Column, 0 + 7), AmethystBlock)
            }
        }
    }
}
function distanceFromEnemy (start: Sprite, end: Sprite) {
    xDistance = start.x - end.x
    yDistance = start.y - end.y
    return Math.sqrt(xDistance ** 2 + yDistance ** 2)
}
function Hotbar (Row: number, Col: number) {
    TileChanged = false
    BrokenBlock = tiles.tileImageAtLocation(tiles.getTileLocation(Col, Row))
    if (BrokenBlock != assets.tile`transparency16`) {
        emptySlotIndex = -1
        for (let index5 = 0; index5 <= ToolBarArray.length - 1; index5++) {
            if (ToolBarArray[index5].get_text(ItemTextAttribute.Name) == "") {
                emptySlotIndex = index5
                break;
            } else if (ToolBarArray[index5].get_image() == BrokenBlock) {
                TileChanged = true
                break;
            }
        }
        if (emptySlotIndex == -1 && !(TileChanged)) {
            Placeholderitem = Inventory.create_item("Grass", BrokenBlock)
            ToolBarArray[0] = Placeholderitem
            toolbar.update()
            TileChanged = true
        }
        if (!(TileChanged) && emptySlotIndex != -1) {
            Placeholderitem = Inventory.create_item("Grass", BrokenBlock)
            ToolBarArray[emptySlotIndex] = Placeholderitem
            toolbar.update()
            TileChanged = true
        }
    }
}
scene.onOverlapTile(SpriteKind.Player22, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(true)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (Player2.vy == 0) {
        Player2.vy = -150
    }
    if (Player2Mining) {
        Hotbar(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top).row, Player2.tilemapLocation().column)
        tiles.setTileAt(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), assets.tile`transparency16`)
        tiles.setWallAt(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top), false)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Sprite2LookLeft = false
    Sprite2LookRight = true
    animation.stopAnimation(animation.AnimationTypes.All, Player2)
    animation.runImageAnimation(
    Player2,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
    if (Player2Mining) {
        Hotbar(Player2.tilemapLocation().row, Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column)
        tiles.setTileAt(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
        tiles.setWallAt(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
    }
})
function SpawnAllMobs () {
    if (Math.percentChance(10)) {
        PlaceHolderSprite = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
        PlaceHolderSprite.setFlag(SpriteFlag.GhostThroughTiles, true)
        PlaceHolderSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        MobList.unshift(PlaceHolderSprite)
        PlaceHolderSprite.x += Player1.x + randint(-1000, 1000)
        PlaceHolderSprite.y += Player1.y + randint(-15, 20)
    } else if (Math.percentChance(10)) {
        PlaceHolderSprite = sprites.create(assets.image`myImage2`, SpriteKind.Enemy)
        MobList.unshift(PlaceHolderSprite)
        PlaceHolderSprite.x += Player1.x + randint(-1000, 1000)
        if (Math.percentChance(50)) {
            if (Math.percentChance(25)) {
                PlaceHolderSprite = sprites.create(assets.image`myImage`, SpriteKind.NiceMob)
                PlaceHolderSprite.ay = 300
                AnimalList.unshift(PlaceHolderSprite)
                PlaceHolderSprite.setPosition(Player1.x + randint(-1000, 1000), Player1.y - 300)
            } else if (Math.percentChance(25)) {
                PlaceHolderSprite = sprites.create(assets.image`myImage0`, SpriteKind.NiceMob)
                PlaceHolderSprite.ay = 300
                AnimalList.unshift(PlaceHolderSprite)
                PlaceHolderSprite.setPosition(Player1.x + randint(-1000, 1000), Player1.y - 300)
            }
        }
    }
}
function PlaceBlockColumn1 (Column: number, Row: number) {
    for (let l = 0; l <= Row; l++) {
        tiles.setTileAt(tiles.getTileLocation(Column, l * -1 + 7), dirt)
        if (l == Row) {
            tiles.setTileAt(tiles.getTileLocation(Column, l * -1 + 7 - 1), grass)
        }
        if (Math.percentChance(5)) {
            tiles.setTileAt(tiles.getTileLocation(Column, l * -1 + 7 - 2), tree)
        }
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
    pause(2000)
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    pause(500)
    Plr2Attacking = false
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Sprite2LookLeft = true
    Sprite2LookRight = false
    animation.stopAnimation(animation.AnimationTypes.All, Player2)
    animation.runImageAnimation(
    Player2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
    if (Player2Mining) {
        Hotbar(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).row, Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column)
        tiles.setTileAt(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency16`)
        tiles.setWallAt(Player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player22, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    pause(2000)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    Sprite1Lookleft = false
    Sprite1LookRight = true
    animation.stopAnimation(animation.AnimationTypes.All, Player1)
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    200,
    true
    )
    if (Player1Mining) {
        Hotbar(Player1.tilemapLocation().row, Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Right).column)
        tiles.setTileAt(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`transparency16`)
        tiles.setWallAt(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), false)
    }
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Player1Mining) {
        Player1Mining = false
    } else {
        Player1Mining = true
    }
})
function GenerateTerrain () {
    current_tilemap_level = tilemap`level2`
    tiles.setCurrentTilemap(current_tilemap_level)
    for (let index222222 = 0; index222222 <= 10000; index222222++) {
        DefaultBlockHeight = 2
        ColumBlockHeight = DefaultBlockHeight + randint(-1, 1) * randint(-1, Noise)
        PlaceBlockColumn1(index222222, ColumBlockHeight)
        UnderGroundColumn(index222222, BlockHeightLimit)
    }
    CreateCaves(2, 7)
    FillInsideOfCave()
    tileUtil.setWalls(Stone, true)
}
info.player1.onLifeZero(function () {
    game.gameOver(false)
})
info.player2.onLifeZero(function () {
    game.gameOver(false)
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Player2)
})
function createCircle (centerX: number, centerY: number, radius: number) {
    for (let heightIndex = -radius; heightIndex <= radius; heightIndex++) {
        for (let index23 = -radius; index23 <= radius; index23++) {
            if (index23 * index23 + heightIndex * heightIndex <= radius * radius) {
                tiles.setTileAt(tiles.getTileLocation(centerX + index23, centerY + heightIndex), assets.tile`transparency16`);
            }
        }
    }
console.log("CircleMade")
}
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    Plr1Attacking = true
    if (Sprite1Lookleft == true) {
        animation.stopAnimation(animation.AnimationTypes.All, Player1)
        animation.runImageAnimation(
        Player1,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            .........11.f222feeeeff.
            .......cc1..feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            .....1..1.ff222eeeeeeff.
            ....1..11.feeeefffeeeef.
            ....1.11.fe2222eeefffff.
            ......1..f2efffff222efff
            ..cc..1..fffeeefffffffff
            ..cdcc...fee44fbbe44efef
            ..ccddcc..feddfbb4d4eef.
            ....cdddceefddddd4eeef..
            .....ccdcddee2222222f...
            ......cccdd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ......1....feeeeffeeeef.
            .....11.11fe2222eefffff.
            .....1..1.f2effff222efff
            ....11.1..fffeeeffffffff
            ....1..1..fee44fbe44efef
            ....11.1...feddfb4d4eef.
            .....1.11.c.eeddd4eeef..
            ....c11c11ceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            ............feeeeffeeef.
            ...........fe2222eeffff.
            ...........f2effff222ef.
            ....1......fffeeefffffff
            ...11.11...fee44fbe44eff
            ...1..1.....feddf14d4eef
            ...1..11.....fdddd4eeef.
            ...1...1.....fe444eddf..
            ....1..1.....ccc22eddf..
            ....1..11....cdc22fee...
            ....11..11..cddc4444f...
            .....1...11cddcfffff....
            .....11...cddc..fff.....
            ......11..cdc...........
            .......11.cc............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        50,
        false
        )
    } else if (Sprite1LookRight == true) {
        animation.stopAnimation(animation.AnimationTypes.All, Player1)
        animation.runImageAnimation(
        Player1,
        [img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.11..........
            .ffeeeef222f.1..........
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef.....1.....
            .fffffee2222ef.1..11....
            fffe222ffffe2f.11..11...
            ffffffffeeefff..11..1...
            fefe44ebf44eef...11.1...
            .fee4d4bfddef.....1.....
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef.1....1.....
            .ffffee2222ef11...11....
            .fe222ffffe2f.11...11...
            fffffffeeefff..1....1...
            ffe44ebf44eef...1....1..
            fee4d41fddef....1....1..
            .feee4ddddf.....1.....1.
            ..fdde444ef.....11....1.
            ..fdde22ccc......1....1.
            ...eef22cdc.....11....1.
            ...f4444cddc....1.....1.
            ....fffffcddc...1...111.
            .....fff..cddc.11.......
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        50,
        false
        )
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Player1)
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Released, function () {
    pause(500)
    Plr1Attacking = false
})
function EnemyFunction (list: any[]) {
    for (let index42 = 0; index42 <= list.length; index42++) {
        if (list[index42]) {
            Plr1Distance = distanceFromEnemy(list[index42], Player1)
            Plr2Distance = distanceFromEnemy(list[index42], Player2)
            if (Plr1Distance < 80) {
                list[index42].follow(Player1, 50)
            } else if (Plr2Distance < 80) {
                list[index42].follow(Player2, 50)
            }
        }
    }
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    Sprite1Lookleft = true
    Sprite1LookRight = false
    animation.stopAnimation(animation.AnimationTypes.All, Player1)
    animation.runImageAnimation(
    Player1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    200,
    true
    )
    if (Player1Mining) {
        Hotbar(Player1.tilemapLocation().row, Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Left).column)
        tiles.setTileAt(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`transparency16`)
        tiles.setWallAt(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), false)
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (Player1Mining) {
        Hotbar(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom).row, Player1.tilemapLocation().column)
        tiles.setTileAt(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), assets.tile`transparency16`)
        tiles.setWallAt(Player1.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom), false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Plr1Attacking) {
        sprites.destroy(otherSprite)
        info.player1.changeLifeBy(2)
    }
})
let Plr2Distance = 0
let Plr1Distance = 0
let Sprite1LookRight = false
let Sprite1Lookleft = false
let PlaceHolderSprite: Sprite = null
let Placeholderitem: Inventory.Item = null
let emptySlotIndex = 0
let BrokenBlock: Image = null
let TileChanged = false
let yDistance = 0
let xDistance = 0
let currentTile: tiles.Location = null
let Player2Mining = false
let Player1Mining = false
let Sprite2LookRight = false
let Sprite2LookLeft = false
let Plr2Attacking = false
let ColumBlockHeight = 0
let DefaultBlockHeight = 0
let current_tilemap_level: tiles.TileMapData = null
let RandomNumb = 0
let Plr1Attacking = false
let toolbar: Inventory.Toolbar = null
let ToolBarArray: Inventory.Item[] = []
let AnimalList: Sprite[] = []
let MobList: Sprite[] = []
let row = 0
let StalagmiteTip: Image = null
let Stalagmites: Image = null
let Lava: Image = null
let Iron: Image = null
let Stone: Image = null
let tree: Image = null
let dirt: Image = null
let grass: Image = null
let AmethystBlock: Image = null
let Noise = 0
let BlockHeightLimit = 0
let range2 = 0
let range = 0
let HeightIndex = 0
let Player1: Sprite = null
let Player2: Sprite = null
let radius = 0
let newItem = null
BlockHeightLimit = 150
Noise = 1
AmethystBlock = assets.image`Amethyst`
grass = img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `
dirt = img`
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `
tree = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . 7 7 7 7 7 7 7 7 . . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 . . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 e 7 e 7 . . . . . . 
    . . . . . e 7 e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    . . . . . e e e e e . . . . . . 
    `
Stone = img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `
Iron = assets.image`IronoreImage`
Lava = img`
    4 2 2 2 4 4 4 4 4 2 2 4 4 4 4 4 
    4 2 4 2 2 2 2 2 4 4 2 4 2 2 4 4 
    4 2 2 2 2 2 2 2 4 2 4 2 2 2 2 4 
    4 2 2 2 4 4 4 4 2 2 2 4 2 2 4 4 
    4 2 2 2 2 2 2 2 2 4 4 2 4 4 2 4 
    4 2 4 4 4 4 4 4 4 2 4 4 4 2 2 4 
    4 2 2 2 2 2 4 2 2 2 2 2 2 2 2 4 
    4 4 4 2 2 4 4 4 2 2 2 2 2 2 4 4 
    2 2 4 4 4 2 2 2 2 4 4 4 4 4 4 4 
    4 2 4 2 2 2 2 4 4 2 2 2 2 2 4 4 
    4 4 4 4 4 4 4 4 4 4 2 2 2 2 4 4 
    2 2 2 2 4 4 4 2 2 4 4 4 2 4 4 4 
    2 2 4 2 2 2 4 2 4 4 4 4 2 2 4 4 
    4 2 4 4 4 4 2 2 2 2 2 2 2 2 2 2 
    4 2 4 2 2 2 2 2 4 4 4 4 2 2 2 4 
    4 4 4 4 2 2 2 4 4 2 2 4 4 4 4 4 
    `
Stalagmites = img`
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    `
StalagmiteTip = img`
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . . . d d d d d d d d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
row = 7
Player1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Player2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d 3 d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player22)
controller.player1.moveSprite(Player1, 100, 0)
controller.player2.moveSprite(Player2, 100, 0)
scene.cameraFollowSprite(Player1)
Player1.x += 2000
Player2.x += 2000
Player1.y += 5
Player2.y += 5
Player1.ay = 300
Player2.ay = 300
let myEnemy = sprites.create(assets.image`myImage1`, SpriteKind.Enemy)
MobList = [myEnemy]
AnimalList = []
scene.cameraFollowSprite(Player1)
GenerateTutorialTerrain()
Player1.setFlag(SpriteFlag.StayInScreen, true)
Player2.setFlag(SpriteFlag.StayInScreen, true)
let TestItem = Inventory.create_item("", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
ToolBarArray = [TestItem, TestItem, TestItem]
toolbar = Inventory.create_toolbar(ToolBarArray, 3)
toolbar.left = 4
toolbar.bottom = scene.screenHeight() - 4
toolbar.z = 100
toolbar.setFlag(SpriteFlag.RelativeToCamera, true)
game.onUpdateInterval(5000, function () {
    NiceMobRngMove(AnimalList)
})
game.onUpdateInterval(1000, function () {
	
})
game.onUpdateInterval(10, function () {
    // This is temp code for now
    if ((0 as any) == (1 as any)) {
        tileUtil.centerCameraOnTile(tiles.getTileLocation((Player1.tilemapLocation().column + Player2.tilemapLocation().column) / 2, (Player1.tilemapLocation().row + Player2.tilemapLocation().row) / 2))
        if (distanceFromEnemy(Player1, Player2) >= 130) {
            Player1.setPosition(Player2.x, Player2.y + 5)
        }
    }
    scene.centerCameraAt((Player1.x + Player2.x) / 2, (Player1.y + Player2.y) / 2)
})
game.onUpdateInterval(500, function () {
    tileUtil.setWalls(dirt, true)
    tileUtil.setWalls(tree, true)
    tileUtil.setWalls(Lava, true)
    tileUtil.setWalls(Iron, true)
    tileUtil.setWalls(StalagmiteTip, true)
    tileUtil.setWalls(Stalagmites, true)
    tileUtil.setWalls(grass, true)
    tileUtil.setWalls(AmethystBlock, true)
})
game.onUpdateInterval(500, function () {
	
})
game.onUpdateInterval(500, function () {
    SpawnAllMobs()
    EnemyFunction(MobList)
})
game.onUpdateInterval(500, function () {
    if (Player1) {
        EnemyFunction(MobList)
    }
})
