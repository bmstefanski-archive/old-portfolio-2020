#!/usr/bin/env sh
yarn build
git push origin `git subtree split --prefix dist origin master`:gh-pages --force