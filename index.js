
function getFirstSelector(selector) {
  const firstElement = document.querySelector(selector);
  return firstElement;
}

function  nestedTarget(){
  const firstElement = document.querySelector("#nested .target");
  return firstElement;
}

function  deepestChild(){
  const firstElement = document.querySelector('#grand-node div div div div');
  return firstElement;

}

function  increaseRankBy(n){

}
