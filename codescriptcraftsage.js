// music_sharing_platform.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = [];
let songs = [];

// 用户注册
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // 实现用户注册逻辑，将用户信息保存到数据库中
    users.push({ username, password });
    res.status(201).json({ message: '用户注册成功' });
});

// 上传音乐
app.post('/upload', (req, res) => {
    const { username, songName } = req.body;
    // 实现音乐上传逻辑，保存音乐到数据库中
    songs.push({ username, songName });
    res.status(201).json({ message: '音乐上传成功' });
});

// 播放音乐
app.get('/play/:songName', (req, res) => {
    const { songName } = req.params;
    // 实现播放音乐逻辑，从数据库中获取音乐并播放
    res.status(200).json({ message: `正在播放音乐：${songName}` });
});

// 监听端口
const port = 3000;
app.listen(port, () => {
    console.log(`音乐分享平台后端运行在 http://localhost:${port}`);
});
