#! /bin/bash

echo "creating temp dir..."
mkdir temp
cd temp
echo "cloning Botfront repo..."
git clone https://github.com/botfront/botfront.git
cd botfront/botfront
echo "installing dev dependencies..."
npm install
echo changing config.js values...
sed -i -e "s/base: '\/'/base: '\/docs\/'/g" docs/.vuepress/config.js
sed -i -e "s/ga: 'UA-110157233-2'/ga: 'UA-110157233-3'" docs/.vuepress/config.js
echo "building docs..."
npm run docs:build
echo "copying docs..."
cp -r docs/.vuepress/dist/ ../../../static/docs/
cd ../../../
rm -rf temp
yarn run build
