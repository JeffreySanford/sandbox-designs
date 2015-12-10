(function IFEE() {
  function* generator() {
    document.getElementById("generatorFunction").innerHTML += "hello";
    yield null;
    document.getElementById("generatorFunction").innerHTML += " world";
    yield null;
    document.getElementById("generatorFunction").innerHTML += "This will 	never be shown.";
    yield null;
  }

  var doThis = generator();
  doThis.next();
  doThis.next();
  /**  
   * There is supposed to be a .close() method 
   * but it doesn't seem to be working.  .send also
   * will pass a variable to the function generator.
   */
})();