import { modifier } from 'ember-modifier';

export default modifier(function focus(element) {
  element.focus();
});
