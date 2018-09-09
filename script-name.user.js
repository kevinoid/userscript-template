/* eslint-disable max-len */
// ==UserScript==
// @name        Script name
// @namespace   https://kevinlocke.name/userscripts
// @description Script description
// @match       <all_urls>
// @version     0.0.1
// @license     MIT
// @grant       none
// @supportURL  https://github.com/kevinoid/userscript-template
// ==/UserScript==
/* eslint-enable max-len */

'use strict';

// Amount of information to log to the console.  Lower = more.
const logLevel = 3;

// Simple logging framework
function notLogged() {}
const log = {
  /* eslint-disable no-console */
  error: logLevel < 5 ? console.error : notLogged,
  warn: logLevel < 4 ? console.warn : notLogged,
  info: logLevel < 3 ? console.info : notLogged,
  log: logLevel < 2 ? console.log : notLogged,
  debug: logLevel < 1 ? (console.debug || console.log) : notLogged
  /* eslint-enable no-console */
};

// ==== Utility functions ====
function forEach(arrayLike, callback, thisArg) {
  Array.prototype.forEach.call(arrayLike, callback, thisArg);
}

// ==== Userscript functions ====

// ==== Call script entry point ====
