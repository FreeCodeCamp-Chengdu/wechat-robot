const roomList = require('./room.json'),
    replyMap = require('./reply.json');

exports.roomJoin = async (room, list, guy) => {
    const topic = await room.topic(),
        name = guy.name();

    list = list.map(guy => guy.name());

    console.log(`【加群】${topic} 的 ${name} 邀请了 ${list}`);

    return room.say(`欢迎喜爱编程的小伙伴入群：
${list.map((name, index) => `  ${++index}. ${name}`)}

请新人按照“昵称 - 技术栈”的格式修改自己的群名，并仔细阅读群公告中的【FCC 社区行为准则】：
https://fcc-cd.tk/profile/code-of-conduct/

若以上新人有因违反【行为准则】而被踢，邀请人 ${name} 也将负连带责任，被一起踢出本群。`);
};

exports.message = async message => {
    const room = message.room(),
        text = message.text();

    if (!room || !roomList.includes(await room.topic())) return;

    for (let pattern in replyMap)
        if (text.match(new RegExp(pattern, 'i'))) {
            console.log(`【回复】
    ${text}
  =>
    ${replyMap[pattern]}`);

            return message.say(replyMap[pattern]);
        }
};
