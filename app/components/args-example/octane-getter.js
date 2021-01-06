import Component from '@glimmer/component';

export default class OctaneGetterComponent extends Component {
  get value() {
    return this.args.value ?? 'a default value';
  }
}
