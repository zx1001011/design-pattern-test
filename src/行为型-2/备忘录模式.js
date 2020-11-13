// 备忘类
class Memento {
    constructor(content) {
        this.content = content
    }
    getContent() {
        return this.content
    }
}
// 备忘列表
class CareTaker {
    constructor() {
        this.list = []
        this.pos = 0
    }
    add(memento) {
        this.list.push(memento)
        this.pos += 1
    }
    get() {
        if (this.pos > 0) {
            this.pos -= 1
            return this.list[this.pos]
        } else {
            return null;
        }
    }
}
class Editor {
    constructor() {
        this.content = null
    }
    setContent(content) {
        this.content = content
    }
    getContent() {
        return this.content
    }
    saveContentToMemento() {
        return new Memento(this.content)
    }
    getContentFromMemento(memento) {
        if (memento !== null) {
            this.content = memento.getContent()
        } else {
            this.content = null
        }
    }
}

let editor = new Editor()
let careTaker = new CareTaker()
editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentToMemento()) // 将当前内容保存到备忘列表
editor.setContent('333')
careTaker.add(editor.saveContentToMemento()) // 将当前内容保存到备忘列表
editor.setContent('444')
careTaker.add(editor.saveContentToMemento()) // 将当前内容保存到备忘列表

console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get()) // 一个一个的撤销获取
console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get()) // 一个一个的撤销获取
console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get()) // 一个一个的撤销获取
console.log(editor.getContent())
editor.getContentFromMemento(careTaker.get()) // 一个一个的撤销获取
console.log(editor.getContent())