// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var result = [];

  function depthFirstReversal(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
      depthFirstReversal(node, func);
      node = node.nextSibling;
    }
  }

  depthFirstReversal(document.body, function (node) {
    if(node.classList && node.classList.contains(className)) {
      result.push(node);
    }
  });

  return result;
};
