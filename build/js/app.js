(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, entry) {
  this.title = title;
  this.entry = entry;
}

Journal.prototype.wordCount = function() {
  return this.entry.split(" ");


  // return entry.split(/[\s,]+/).length - 1;
};

Journal.prototype.vowelCount = function() {

  // add vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  //

  /// return something?
};

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./backend').journalModule;

$(document).ready(function(){

  $(".form").submit(function(e){
    e.preventDefault();

    var userTitle = $('#titleInput').val();
    var userEntry = $('#entryInput').val();
    var newEntry = new Journal(userTitle, userEntry);

    newEntry.wordCount(userEntry);
    // console.log(newEntry.wordCount());
    // console.log(newEntry);

    $('.output').each(function(){
      $('.output').append("<li>" + userEntry + "</li>");
    });
    // console.log(newEntry);
  });




});

},{"./backend":1}]},{},[2,1]);
