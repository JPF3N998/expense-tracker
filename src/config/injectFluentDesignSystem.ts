import {
  provideFluentDesignSystem,
  fluentCard,
  fluentButton,
  fluentTextField,
  fluentNumberField,
  fluentTextArea
} from '@fluentui/web-components';

const fluentDesignSystem = provideFluentDesignSystem();

const components = [
  fluentCard,
  fluentButton,
  fluentTextField,
  fluentNumberField,
  fluentTextArea
]

components.forEach((component) => {
  fluentDesignSystem.register(component());
})