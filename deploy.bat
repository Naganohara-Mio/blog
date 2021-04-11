set curdir=D:\GitHub\myBlog\ 
cd /d D:\GitHub\myBlog\/docs/.vuepress/dist 
git init 
git add -A 
git commit -m 'deploy' 
git push -f git@gitee.com:purple_orange/notebook.git master 
pause 
