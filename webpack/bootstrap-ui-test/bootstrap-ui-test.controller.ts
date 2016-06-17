export class BootstrapUITestController {
  testArray
  static $inject = ['$uibModal'];
  constructor(private $uibModal: ng.ui.bootstrap.IModalService) {

    this.testArray = [
      {
        name: 'Santiago',
        value: 1,
      },
      {
        name: 'Chillán',
        value: 2,
      },
      {
        name: 'Concepción',
        value: 3,
      },
      {
        name: 'Temuco',
        value: 4,
      },
    ]
  }

  openModal() {
    this.$uibModal.open({
      template: `
        <div class="modal-header">
            <h3 class="modal-title">Ciudades!</h3>
        </div>
        <div class="modal-body">
            <ul>
                <li ng-repeat="item in vm.testArray">
                    {{item.name}}
                </li>
            </ul>
        </div>`,
        controller: BootstrapUITestController,
        controllerAs: 'vm',
    });
  }
}