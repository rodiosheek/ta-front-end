import template from './ta-checkbox.template.html';

require('./ta-checkbox.style.scss');

const taCheckbox = {
    template: template,
    bindings: {
        model: '=modelData',
        change: '&changeAction',
        title: '@titleData'
    }
}

export default taCheckbox;