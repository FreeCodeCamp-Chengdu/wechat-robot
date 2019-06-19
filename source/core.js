exports.roomJoin = function(room, list, guy) {
    room.say(`欢迎喜爱编程的小伙伴入群：
${list.map((guy, index) => `  ${++index}. ${guy.name()}`)}

请新人按照“昵称 - 技术栈”的格式修改自己的群名，并仔细阅读群公告中的【FCC 社区行为准则】：
https://fcc-cd.tk/profile/code-of-conduct/

若以上新人有因违反【行为准则】而被踢，邀请人 ${guy.name()} 也将负连带责任，被一起踢出本群。`);
};
