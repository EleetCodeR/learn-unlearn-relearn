
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // O(n) time | O(d) space d- depth of the tree.
  function validateBst(tree) {
    return validateBstHelper(tree.-Infinity,Infinity);
  }
  
  
  function validateBstHelper(tree,min,max){
      if(tree === null) return true;
      if(tree.value < min || tree.value >= max) return false;
      const leftIsValid =  validateBstHelper(tree.left,min,tree.value);
      const rightIsValid =  validateBstHelper(tree.right,tree.value,max);
      return leftIsValid && rightIsValid;
  }
  

  exports.BST = BST;
  exports.validateBst = validateBst;
  