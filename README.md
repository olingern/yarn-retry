## Description

This is a proof of concept to address issue [#7663](https://github.com/yarnpkg/yarn/pull/7663?notification_referrer_id=MDE4Ok5vdGlmaWNhdGlvblRocmVhZDYxOTQ3MTMxOToxNDcwMjk3#issuecomment-643509044)

`app.js` is a simple web server that simulates `500's` similar to what someone may experience on a CI server. The server will simulate 4 consecutive failures and then succeed on the 5th retry.

`yarn-retry.sh` is a simple shell script that will retry up to 5 times and pause for 5 seconds between retries.

## Usage

Copy `yarn-retry.sh` and place in your project. Your CI command should now use this script to handle retries.
