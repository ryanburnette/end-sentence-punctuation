'use strict';

var punctuate = require('./index.js');

test('sentence ending with word', function () {
  expect(punctuate('Hello world')).toBe('Hello world.');
});

test('sentence ending with period', function () {
  var sentence = 'Hello world.';
  expect(punctuate(sentence)).toBe(sentence);
});

test('sentence ending with quote', function () {
  var sentence = 'He said, "she said."';
  expect(punctuate(sentence)).toBe(sentence);
});

test('sentence ending with question mark', function () {
  var sentence = 'What did she say?';
  expect(punctuate(sentence)).toBe(sentence);
});

test('sentence with extra spaces at the end', function () {
  var sentenceBefore = 'She said some stuff, but I did not listen. ';
  var sentenceAfter = 'She said some stuff, but I did not listen.';
  expect(punctuate(sentenceBefore)).toBe(sentenceAfter);
});
