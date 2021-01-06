import Component from '@glimmer/component';

export default class ModifierExampleOctaneBadComponent extends Component {
  setFocus() {
    document.getElementById('octane-bad-id-2').focus();
  }
}
