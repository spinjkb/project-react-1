import _ from 'lodash';
import j from 'jquery';
import foo from './foo'
function component () {
  //var element = document.createElement('div');
  var element = j('<div></div>');
  /* lodash is required for the next line to work */
  /*_.join，这个 _ 实际上是 lodash 暴露的全局变量。*/ 
  //element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.html(_.join(['Hi','webpack'], ' '))
  //return element;
  return element.get(0);
}
document.body.appendChild(component());
// console.log(1)
console.log(foo)
console.log(foo())