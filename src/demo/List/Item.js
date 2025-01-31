import $ from 'jquery'
import getCart from '../ShoppingCart/GetCart'
import StateMachine from 'javascript-state-machine'
import { log } from '../utils/log'


export default class Item {
    constructor(list, data) {
        this.list = list
        this.data = data
        this.$el = $('<div>')
        this.cart = getCart()
    }

    initContent() {
        let $el = this.$el
        let data = this.data
        $el.append($(`<p>名称： ${data.name}</p>`))
        $el.append($(`<p>名称： ${data.price}</p>`))
    }
    initBtn() {
        let $el = this.$el
        let $btn = $('<button>')
        let _this = this
        let fsm = new StateMachine({
            init: '加入购物车',
            transitions: [
                {
                    name: 'addToCart', from: '加入购物车', to: '从购物车中删除'
                },
                {
                    name: 'deleteFromCart', from: '从购物车中删除', to: '加入购物车'
                }
            ],
            methods: {
                onDeleteFromCart() {
                    _this.deleteFromCartHandle()
                    updateText()
                },
                onAddToCart() {
                    _this.addToCartHandle()
                    updateText()
                }
            }
        })
        function updateText() {
            $btn.html(fsm.state)
        }
        $btn.click(() => {
            // 添加到购物车  or
            // 从购物车删除
            if (fsm.is('加入购物车')) {
                fsm.addToCart()
            } else {
                fsm.deleteFromCart()
            }
        })
        $el.append($btn)
        updateText()
    }
    // 添加到购物车
    @log('add')
    addToCartHandle() {
        this.cart.add(this.data)
    }
    // 从购物车删除
    @log('delete')
    deleteFromCartHandle() {
        this.cart.del(this.data.id)
    }
    render() {
        this.list.$el.append(this.$el)
    }
    init() {
        this.initContent()
        this.initBtn()
        this.render()
    }
}