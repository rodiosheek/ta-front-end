import template from './customer-form.template.html';
import controller from './customer-form.controller';

require('./customer-form.style.scss');

const customerFormComponent = {
    template: template,
    controller: controller,
    bindings: {
        customer: '=customerData',
        index: '<indexData'
    }
}

export default customerFormComponent;