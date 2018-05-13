import template from './flight-filter.template.html';
import controller from './flight-filter.controller';

require('./flight-filter.style.scss');

const flightFilterCompoenent = {
    template: template,
    controller: controller,
    bindings: {
        onUpdate: '&'
    }
}

export default flightFilterCompoenent;

