import template from './thankyou-page.template.html';

require('./thankyou-page.style.scss');

const thankYouPageComponent = {
  template: template,
  controller: function() {
    angular.element('.footer').style({
      'position': 'fixed',
      'bottom': '0'
    })
  }
};

export default thankYouPageComponent;