import { app } from '../app';


export class BootstrapUITestController {
  testArray
  constructor() {
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
}

app.controller('bootstrapUITestController', BootstrapUITestController);