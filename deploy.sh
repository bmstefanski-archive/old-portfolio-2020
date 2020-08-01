#!/usr/bin/env sh
yarn build
git push origin `git subtree split --prefix dist master`:gh-pages --force