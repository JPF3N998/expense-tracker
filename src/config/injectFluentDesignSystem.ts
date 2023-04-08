import {
  fluentAccordion,
  fluentAccordionItem,
  fluentNumberField,
  fluentOption,
  fluentSelect,
  fluentTextArea,
  fluentTextField,
  provideFluentDesignSystem,
} from '@fluentui/web-components';

const fluentDesignSystem = provideFluentDesignSystem();

export const components = [
  fluentAccordion,
  fluentAccordionItem,
  fluentNumberField,
  fluentOption,
  fluentSelect,
  fluentTextArea,
  fluentTextField,
];

components.forEach((component) => {
  fluentDesignSystem.register(component());
});
