# teams-for-linux

[![pipeline status](https://gitlab.com/ivelkov/teams-for-linux/badges/master/pipeline.svg)](https://gitlab.com/ivelkov/teams-for-linux/pipelines)

Unofficial Microsoft Teams client for Linux using [Electron](http://electron.atom.io/).
It uses the Web App and wrapps it as a standalone application using Electron.

NOTE: This is an experimental fork of ivelkov's excellent work.  I originally forked the project because I wanted to fix a systray related issue on my Fedora KDE Linux system.  Since I am a total newbie to Electron programming, I began by creating a new project with Electron Forge - because I thought that's what people normally used.  After creating the project and moving the code into my new tree, I worked out the icon problem.  In the process, I discovered that suddenly, other functionality began working; specifically video and audio.  I have to confess I have no idea why, but I'm very happy it works now.

If you clone this project and find that it works on your system, great!  If not, I would be very little help since I am very new at this Electron/node.js stuff, but I'd like to hear about it anyway.

-rdlittle


## Install

You can download the tarball, rpm, deb or pacman from the [releases page](https://github.com/ivelkov/teams-for-linux/releases).

## Run from source

```bash
$ npm i && (cd app && npm i)
$ npm start
```

## License

GPLv3
