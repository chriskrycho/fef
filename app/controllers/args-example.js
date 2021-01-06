import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ArgsExampleController extends Controller {
  options = [
    'classic',
    'Octane (broken)',
    'Octane (getter)',
    'Octane (localCopy)',
  ];

  @tracked selected = this.options[0];
  selectOption = (newSelection) => (this.selected = newSelection);

  @tracked currentValue;
  updateValue = (newValue) => (this.currentValue = newValue);
}
