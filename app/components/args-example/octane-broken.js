import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class OctaneBrokenComponent extends Component {
  @tracked value = this.args.value ?? 'a default value';
}
