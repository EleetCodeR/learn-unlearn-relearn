function inOrderTraverse(tree, array) {
  //left
  if (tree.left !== null) inOrderTraverse(tree.left, array);
  //value
  array.push(tree.value);
  //right
  if (tree.right !== null) inOrderTraverse(tree.right, array);

  return array;
}

function preOrderTraverse(tree, array) {
  //value
  array.push(tree.value);
  //left
  if (tree.left !== null) preOrderTraverse(tree.left, array);
  //right
  if (tree.right !== null) preOrderTraverse(tree.right, array);

  return array;
}

function postOrderTraverse(tree, array) {
  //left
  if (tree.left !== null) postOrderTraverse(tree.left, array);
  //right
  if (tree.right !== null) postOrderTraverse(tree.right, array);
  //value
  array.push(tree.value);
  return array;
}

exports.inOrderTraverse = inOrderTraverse;
exports.preOrderTraverse = preOrderTraverse;
exports.postOrderTraverse = postOrderTraverse;
