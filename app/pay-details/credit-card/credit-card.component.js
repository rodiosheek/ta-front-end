import template from './credit-card.template.html';

import creditCardController from './credit-card.controller';
require('./credit-card.style.scss');

const creditCardComponent = {
  template: template,
  controller: creditCardController,
  bindings: {
    cradData: '='
  }
};

export default creditCardComponent;