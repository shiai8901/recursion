// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  result = "";

    if (stringifiable(obj)) {
      if (typeof obj === 'number' || typeof obj === 'boolean' || typeof obj === 'undefined' || obj == null) {
        result = result + obj;
      } else if (typeof obj === 'string') {
        result = result + '"' + obj + '"';
      } else if (Array.isArray(obj)) {
        result = stringifyArray(obj); 
      } else if (typeof obj === 'object' && obj !== null) {
        result = stringifyObj(obj);
      } 
    }  
  return result;

// check if target is stringfiable
  function stringifiable(target) {
    return !(typeof target === 'undefined' || typeof target === 'symbol' || typeof target === 'function' 
        || target === 'undefined' || target === 'symbol' || target === 'function');
  }  
  
 // stringify Array
  function stringifyArray(array){
    var valueArray = [];
    for(var i = 0; i < array.length; i++){
      var keyValue = array[i];
      var keyValueString;
      if (stringifiable(keyValue)) {
        if (typeof keyValue === 'number' || typeof keyValue === 'boolean') {
            keyValueString = keyValue;
          } else if (keyValue === null) {
            keyValueString = "null";
          } else if (typeof keyValue === 'string') {
            keyValueString = '"' + keyValue + '"';
          } else if (Array.isArray(keyValue)) {
            keyValueString = stringifyArray(keyValue);
          } else if (typeof keyValue === 'object') {
            keyValueString = stringifyObj(keyValue);
          } 
          valueArray.push(keyValueString);
      }
    }
    return "[" + valueArray.join(",") + "]";
  }

 // stringify object
  function stringifyObj(obj) {
    var keyArray = Object.keys(obj);
    var valueArray = [];
    for(var i = 0; i < keyArray.length; i++) {
      var keyString = '"' + keyArray[i] + '"';
      var keyValue = obj[keyArray[i]];
      var keyValueString;
      if (stringifiable(keyValue) && stringifiable(keyArray[i])) {
        if (typeof keyValue === 'number' || typeof keyValue === 'boolean' || keyValue === null) {
          keyValueString = keyValue;
        } else if (typeof keyValue === 'string') {
          keyValueString = '"' + keyValue + '"';
        } else if (Array.isArray(keyValue)) {
          keyValueString = stringifyArray(keyValue);
        } else if (typeof keyValue === 'object') {
          keyValueString = stringifyObj(obj[keyArray[i]]);
        }
        valueArray.push(keyString + ":" + keyValueString);        
      }
    }
    return "{" + valueArray.join(",") + "}";
  }
  
};
