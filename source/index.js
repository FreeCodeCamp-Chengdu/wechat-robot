const { Wechaty } = require('wechaty'),
    QRCoder = require('qrcode-terminal');

const { roomJoin } = require('./core');

const robot = new Wechaty();

robot
    .on('scan', qrcode => {
        console.log(QRCoder.generate(qrcode, { small: true }));
    })
    .on('login', user => console.log('登录成功：' + user))
    .on('logout', user => console.log('登出成功：' + user))
    .on('room-join', roomJoin)
    .on('message', message => console.log('收到消息：' + message))
    .start();
