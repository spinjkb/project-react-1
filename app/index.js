import _ from 'lodash';
function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  /*_.join，这个 _ 实际上是 lodash 暴露的全局变量。*/ 
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());