import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ModifierExampleController extends Controller {
  options = ['classic', 'Octane (bad)', 'Octane (good)'];

  @tracked selected = this.options[0];
  selectOption = (newSelection) => (this.selected = newSelection);
}
