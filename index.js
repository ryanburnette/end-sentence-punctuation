(function () {
  function endSentencePunctuation(str) {
    if (!str) {
      return str;
    }
    var lastChar = str[str.length - 1];
    var lastCharMatch = lastChar.match(/[\.|\"|\?|\!]/);
    if (!lastCharMatch) {
      str = str + '.';
    }
    return str;
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = endSentencePunctuation;
  } else {
    if (typeof define === 'function' && define.amd) {
      define([], function () {
        return endSentencePunctuation;
      });
    } else {
      window.endSentencePunctuation = endSentencePunctuation;
    }
  }
})();
