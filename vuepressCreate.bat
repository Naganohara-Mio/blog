test-all.bat------
set curdir=%~dp0
cd /d %curdir%
@echo off
echo >>package.json
set var="ECHO is off."
findstr /v %var% "package.json"
echo {"name": "sypt","version": "1.0.0","main": "index.js","license": "MIT","scripts": {"docs:dev": "vuepress dev docs","docs:build": "vuepress build docs"},"dependencies": {"vuepress": "^0.14.8"}} > package.json
md docs
md docs\.vuepress
md docs\.vuepress\public
echo >>docs\.vuepress\config.js
echo module.exports = { >docs\.vuepress\config.js
echo title: 'title', >>docs\.vuepress\config.js
echo description: 'description', >>docs\.vuepress\config.js
echo head: [['link', { rel: 'icon', href: '/favicon.ico' }]], // set webset icon >>docs\.vuepress\config.js
echo base: '/', >>docs\.vuepress\config.js
echo markdown: {lineNumbers: true}, // code lineNumber>>docs\.vuepress\config.js
echo themeConfig: { >>docs\.vuepress\config.js
echo displayAllHeaders: true, // list expand>>docs\.vuepress\config.js
echo sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。 >>docs\.vuepress\config.js
echo sidebar:[], >>docs\.vuepress\config.js
echo nav:[]} >>docs\.vuepress\config.js
echo }; >>docs\.vuepress\config.js
echo >>docs\README.md
echo --- > docs\README.md
echo home: true  >> docs\README.md
echo heroImage: /hero.png  >> docs\README.md
echo heroText: Hero title  >> docs\README.md
echo tagline: Hero Subtitle  >> docs\README.md
echo actionText: OPEN →  >> docs\README.md
echo actionLink: /zh/guide/guide.md  >> docs\README.md
echo features:  >> docs\README.md
echo - title: 111 >> docs\README.md
echo   details: 1111111111111111111  >> docs\README.md
echo - title:222  >> docs\README.md
echo   details: 22222222222 >> docs\README.md
echo - title: 333 >> docs\README.md
echo   details: 33333333333333333 >> docs\README.md
echo footer: MIT Licensed ^| Copyright ？ 2020-present Evan You >> docs\README.md
echo --- >> docs\README.md
md docs\zh
md docs\zh\guide
echo >docs\zh\guide\guide.md
md docs\zh\test
echo # I am test>docs\zh\test\test.md
echo # I am guide > docs\zh\guide\guide.md
echo >deploy.bat
echo set curdir=%~dp0 >deploy.bat
echo cd /d %curdir%/docs/.vuepress/dist >>deploy.bat
echo git init >>deploy.bat
echo git add -A >>deploy.bat
echo git commit -m 'deploy' >>deploy.bat
echo git push -f git@gitee.com:purple_orange/notebook.git master >>deploy.bat
echo pause >>deploy.bat
pause






























