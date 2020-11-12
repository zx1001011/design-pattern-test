import StateMachine from 'javascript-state-machine'
import $ from 'jquery'

var fsm = new StateMachine({
    init: '收藏',
    transitions: [
        { name: 'dostore', from: '取消收藏', to: '收藏' },
        { name: 'deletestore', from: '收藏', to: '取消收藏' }
    ],
    methods: {
        onDostore: function () {
            console.log('收藏')
            updateContext()
        },
        onDeletestore: function () {
            console.log('取消收藏')
            updateContext()
        }
    }
})

function updateContext() {
    console.log(fsm)
    // console.log(fsm.allStates())
    // console.log(fsm.state)
    $('#btn1').text(fsm.state)
}

$(document).ready(() => {
    console.log('ready')
    $('body').append('<button id="btn1"></button>');
    $('#btn1').unbind()
    $('#btn1').bind('click', function () {
        if (fsm.is('收藏')) {
            fsm.deletestore()  // 必须写成不带on的
        } else {
            fsm.dostore()
        }
    })
    updateContext()
})