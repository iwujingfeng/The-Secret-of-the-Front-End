set -e
npm run build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:iwujingfeng/iwujingfeng.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 下面这行是官网没有的，如果是多人开发项目，务必执行此命令
# git pull https://github.com/JDsecretFE/quist-ui.git master 

# git push -f git@github.com:iwujingfeng/The-Secret-of-the-Front-End.git master:gh-pages
git push -f git@github.com:iwujingfeng/The-Secret-of-the-Front-End.git master:gh-pages
# https://github.com/iwujingfeng/The-Secret-of-the-Front-End

cd -