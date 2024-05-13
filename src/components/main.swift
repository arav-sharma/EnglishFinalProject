import MerlinKarel

class ActionPlan: KarelExecutor {
    func turnRight() {
     turnLeft()
     turnLeft()
     turnLeft()
    }

func moveFunction() {
    move()
    move()
    move()
    move()
    move()
    while isBeeperHere() == true {
        pickUpBeeper()
    }
    while anyBeepersInBag() == true {
        move()
        putDownBeeper ()
    }
    while isFrontClear () {
        move ()
    }
    turnLeft()
    move()
    turnLeft()
    while isFrontClear() {
        move()
    }
    turnLeft()
    turnLeft()
}

    override func run() {
    turnRight()
    for _ in 1...9 {
        moveFunction()
    }
    while isFrontClear() {
        move ()
    }
    turnLeft()
    }
}