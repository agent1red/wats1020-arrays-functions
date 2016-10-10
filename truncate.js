var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;

var textArray, textArray, arrayLength, textJoin, textJoinSplice, arraySplice, textArraySplice, wordCount, d1, d2, d3, d4;

// this is a  object for the stretch goal area. It is not yeilding the same results but displays how the object works. 

//  A basic object literal 
var twStretch = {
  d1: 'Some text',
  d2: 'Some more text',
  d3: 'some more tex than before',
  d4: 'even more text than the previous variables'

};

// function to construct the object. This can have different values set for the object as well as different functions set. 
var truncateArea = function(twStretch) {
  var originText = twStretch.d1 + ', ' + twStretch.d2 + ', ' + twStretch.d3 + ', ' + twStretch.d4;
  var text = twStretch.d1 + ', ' + twStretch.d2 + ', ' + twStretch.d3 + ', ' + twStretch.d4;
  var textArray1 = text.split(' ');
  var txtArraylength = textArray1.length;
  var wordLimit1 = 8;
  var txtArraylength2 = txtArraylength;
  txtArraylength2 = wordLimit1;
  var textjoin2 = textArray1.join( ' ' );

  document.write(originText);
  document.write(txtArraylength);
  document.write(textjoin2);
  console.log(text);
};
// This is the test function to run all the other fuctions and will be called down below 
var startExample = function() {
  console.log('originalText: ' + originalText);
  newLine();
  explainAssignment();
  newLine();
  truncateWords();
  newLine();
  truncateWordsSplice();
  newLine();
  newLine();
  truncateArea(twStretch);
};

// messing with variables - mix and match to split the sentence .split() 
// then setting the array length to 8 for the word limit 
// then joining the array back with spaces between words to make it look like a sentence .join ('') 
var truncateWords = function() {
  textArray = originalText.split(' ');
  textArray.length = wordLimit;
  arrayLength = textArray.length;
  textJoin = textArray.join(' ');

  console.log('originalText: ' + originalText);
  document.write('<b><u>Split and Join Array original text:</u></b> ' + originalText + "<br/><br/>");
  document.write('<b>Truncated example output:</b> ' + textJoin + "...");
  console.log(textJoin + "...");
};

// Splice version 

var truncateWordsSplice = function() {
  textArraySplice = originalText.split(' ');
  arraySplice = textArraySplice.splice(0, 8); // start at element zero then 8 elements up cut it off "splice" 
  textJoinSplice = arraySplice.join(' ');// joining it all back together 

  console.log('originalText: ' + originalText);
  document.write('<b><u>Splice and Join Array original text:</u></b> ' + originalText + "<br/><br/>");
  document.write('<b>Truncated example output:</b> ' + textJoinSplice + "...");
  console.log(textJoinSplice + "...");
};


var newLine = function() {
  document.write("<br><br><br><br>");
};

var explainAssignment = function() {
  var heading = "This is my examples of <b>truncating</b> a line of text." +
    " Each example here has the same output but the functions are constructed in a diferent way.</br>" +
    " This assignment also displays the use of calling functions within functions. See below examples please. ";

  console.log("This is my examples of truncating a line of text." +
    "Each example here has the same output but the functions are constructed in a diferent way." +
    "This assignment also displays the use of calling functions within functions. ");
  document.write(heading.fontsize(5));
};


// run the JS script here!!
startExample();