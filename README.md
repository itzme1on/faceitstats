# 📊 Faceit Stats - OLD VERSION

### Overview
1. [About Faceit Stats](https://github.com/itzme1on/faceitstats#about-faceit-stats)
2. [Installation](https://github.com/itzme1on/faceitstats#installation)
3. [Running](https://github.com/itzme1on/faceitstats#running)
4. [Commands](https://github.com/itzme1on/faceitstats#commands)
5. [Dependencies](https://github.com/itzme1on/faceitstats#dependencies)

## About Faceit Stats 
Faceit Stats bot will help you find out brief and detailed statistics about player, such as the count of wins, winrate, skill level, average K/D, etc. Bot is very easy to use.

## Installation
Clone the repository (you will need `git` installed)
```sh
$ git clone https://github.com/itzme1on/faceitstats
$ cd faceitstats
```
Install `Node.js v12+` if you haven't already then install [dependencies](https://github.com/itzme1on/faceitstats#dependencies):
```sh
$ npm install
```
Go to `src` directory and open `config.json` file. Here you need to insert your [Discord Bot token](https://discord.com/developers/applications) and [Faceit API access token](https://developers.faceit.com/dashboard). In order to get an Faceit API access token, you need to have a Faceit account, then you must log in and create a new app. Enter the name of your application and add description. Then go to `API KEYS` and add a new api key. In `type` parameter select `Server side` and click `Create`. Copy your api key and paste it into `faceitapitoken`. Don't forget to insert the token of your Discord bot into `token`. If desired, you can also change the bot status and commands prefix.

## Running
You should open the console in the bot folder, than go to `src` and use `node bot.js`
```sh
$ cd faceitstats
$ cd src
$ node bot.js
```

## Commands
Command | Description
------------ | -------------
fs!help | Open help section and displays all bot's commands
fs!player \[nickname\] | Display short player statistic
fs!stats \[nickname\] | Display detailed player statistic

## Dependencies
Package | Version | Link
------------ | ------------- | -------------
Node.js | `v12` | [\*click*](https://nodejs.org/en/)
discord.js | `v12` | [![NPM](https://nodei.co/npm/discord.js.png)](https://nodei.co/npm/discord.js/)
faceit-js | `v0.0.3` | [![NPM](https://nodei.co/npm/faceit-js.png)](https://nodei.co/npm/faceit-js/)
faceit-js-api | `v0.3.3` | [![NPM](https://nodei.co/npm/faceit-js-api.png)](https://nodei.co/npm/faceit-js-api/)
request | `v2.88.2` | [![NPM](https://nodei.co/npm/request.png)](https://nodei.co/npm/request/)
