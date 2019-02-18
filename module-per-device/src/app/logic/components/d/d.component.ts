
export abstract class DComponent {

  protected value: string;

  constructor(value: string) {
    console.log('>> ' + value);
    this.value = value;
  }

}
