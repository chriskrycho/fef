import Component from '@ember/component';

export default class ModifierExampleClassic extends Component {
  didInsertElement() {
    super.didInsertElement(...arguments);
    this.element.querySelector('#classic-id-2').focus();
  }
}
