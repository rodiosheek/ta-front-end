import template from './service-table.template.html';

require('./service-table.style.scss');

class serviceTableController {
  constructor(storeService) {
    this.selected = [];
    this.storeService = storeService;

    this.checkbox = {};
  }

  $onChanges(obj) {
    if(obj.services.currentValue) {
            let store = this.storeService.getStore();
            if(store.services && store.services.length > 0) {
                this.selected = obj.services.currentValue.filter(fl => store.services.includes(fl.id));
                store.services.forEach(el => this.checkbox[el] = true);
            }
        }
  }

  checkService(service) {

    let ids = this.selected.map(fl => fl.id).indexOf(service.id);

    if (ids !== -1) {
      this.selected.splice(ids, 1);
      this.onUpdate({service: service, add: false});
    } else {
      this.selected.push(service);
      this.onUpdate({service: service, add: true});
    }
  }
}

serviceTableController.$inject = ['storeService'];

const serviceTableComponent = {
  template: template,
  controller: serviceTableController,
  bindings: {
    services: '<',
    onUpdate: '&'
  }
}

export default serviceTableComponent;
