class Receiver {
    exec() {
        console.log('执行中...');
    }
}

class Command {
    constructor(receiver) {
        this.receiver = receiver
    }
    cmd() {
        console.log('请执行')
        this.receiver.exec()
    }
}


class Invoker {
    constructor(command) {
        this.command = command;
    }
    invoke() {
        console.log('命令已下发')
        this.command.cmd()
    }
}

let soldier = new Receiver()
let command = new Command(soldier)
let general = new Invoker(command)
general.invoke()