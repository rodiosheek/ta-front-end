class creditCardController {
  constructor() {
    this.forms = {};

    this.paymentsNumber = Array.from({ length: 6 }, (v, k) => k).splice(1, 6);
  }

  $onInit() {

  }

  selectPaymentsNum(num) {
    console.log(num);
  }


}

creditCardController.$inject = [];

export default creditCardController;