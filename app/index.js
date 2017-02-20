import _ from 'lodash';
import './css/common/bundle-this.css';
import './css/ads/static.css';

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());
