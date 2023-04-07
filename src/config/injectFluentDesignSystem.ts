import {
  provideFluentDesignSystem,
  fluentTextField,
  fluentNumberField,
  fluentTextArea
} from '@fluentui/web-components';

const fluentDesignSystem = provideFluentDesignSystem();

export const components = [
  fluentNumberField,
  fluentTextArea,
  fluentTextField,
]

components.forEach((component) => {
  fluentDesignSystem.register(component());
})