const electron = require('electron');
const { app, BrowserWindow } = electron;
const express = require('express');
const server = new express();
const path = require('path');

app.on('ready', () => {
  server.use('/dist', express.static(path.join(__dirname, 'dist') ));
  server.use('/src/css', express.static(path.join(__dirname, 'src/css') ));
  server.use('/instruments', express.static(path.join(__dirname, 'instruments') ));
  
  server.use(express.static(__dirname + '/src/css'));
  server.get('/', function (request, response) {
    response.sendFile(`${__dirname}/index.html`);
  });
  server.listen(5000);


  const mainWindow = new BrowserWindow({});
  //mainWindow.loadURL(`file://${__dirname}/index.html`);
  //mainWindow.maximize();
  mainWindow.loadURL('http://localhost:5000/');
  mainWindow.maximize();

});




/*
app.on('ready', function () {
  express();
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    autoHideMenuBar: true,
    useContentSize: true,
    resizable: false,
  });
  mainWindow.loadURL('http://localhost:5000/');
  mainWindow.focus();

});
*/