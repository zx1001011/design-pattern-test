import $ from 'jquery'
import { GET_LIST } from '../config/config'
import createItem from './CreateItem'

export default class List {
    constructor(app) {
        this.app = app
        this.$el = $('<div>')
    }
    // 获取数据
    loadData() {
        // fetch: 返回一个promise, es6的接口
        return fetch(GET_LIST).then(result => {
            return result.json()
        })
    }

    // 生成列表
    initItemList(data) {
        data.forEach(itemData => {
            // 创建一个 Item 然后 init 
            let item = createItem(this, itemData)
            item.init()
        })
    }

    // 渲染
    render() {
        this.app.$el.append(this.$el)
    }

    init() {
        console.log('init list')
        /**
         * 获取数据 -> 生成列表 -> 渲染
         */
        this.loadData().then(data => {
            this.initItemList(data)
        }).then(() => {
            // 渲染
            this.render()
        })
    }
}