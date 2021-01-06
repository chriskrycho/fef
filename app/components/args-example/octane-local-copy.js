import Component from '@glimmer/component';
import { localCopy } from 'tracked-toolbox';

export default class OctaneLocalCopyComponent extends Component {
  @localCopy('args.value') value;

  updateLocalValue = (newValue) => (this.value = newValue);

  persist = (event) => {
    event.preventDefault();
    this.args.onPersist(this.value);
  };
}
