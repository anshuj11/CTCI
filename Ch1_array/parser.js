class TreeNode {
  constructor(value, str = "") {
    this.value = value;
    this.left = null;
    this.right = null;
    this.string = str;
  }
}
function makeTree(value) {
    let alpha = "abcdefghijklmnopqrstuvwxyz".split("");
    
  let ptr = new TreeNode(["0", -1]);
  let root = ptr;
  let i = 0;
  let arr = [];
  arr.push(ptr); //[  node[2], node[23], ]
  while (arr.length > 0) {
    ptr = arr.shift(); //ptr = node(12)
    let i = ptr.value[1] + 1;
    console.log("Node(val) Parent: ", ptr);
    let val = value.slice(i, i + 1);
    val = parseInt(val, 10);
    console.log("Vale: ", val);
    if (val > 0 && val < 27 ) {
      let node = new TreeNode([val, i], ptr.string + alpha[val-1]);
      ptr.left = node;
      arr.push(ptr.left);
      console.log("Node(val) Left: ", node.value);
    }
      val = value.slice(i, i + 2);
      val = parseInt(val, 10);
      if (val > 0 && val < 27 ) {
      node = new TreeNode([val, i + 1], ptr.string + alpha[val-1]);

      console.log("Node(val) Right: ", node.value);

      ptr.right = node;
      arr.push(ptr.right);
    }
    //console.log("arr:", arr)
    //i++;
  }
  console.log("root: ", root);
  let cPtr = root;
  let ansStr = "";
  let stack = [];
  let ans = [];
  stack.push(root);
  while (stack.length > 0) {
    cPtr = stack.pop();
    if (cPtr.left) {
      stack.push(cPtr.left);
      console.log("cPtr(val): ", cPtr.left.string);
      //cPtr = cPtr.left;
    }
    if (cPtr.right) {
      stack.push(cPtr.right);
      console.log("cPtr(val): ", cPtr.right.string);
    }
    if (cPtr.left) cPtr = cPtr.left;
    else if (cPtr.right) cPtr = cPtr.right;
    else {
      ans.push(cPtr.string);
    }
  }

  // }
  console.log("ans", ans);
  return ans;
}

console.log(makeTree("1234"));
console.log(makeTree("12258"));