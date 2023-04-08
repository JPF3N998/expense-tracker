import {
  fluentAccordion,
  fluentAccordionItem,
  fluentButton,
  fluentDialog,
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
  fluentButton,
  fluentDialog,
  fluentOption,
  fluentSelect,
  fluentTextArea,
  fluentTextField,
];

components.forEach((component) => {
  fluentDesignSystem.register(component());
});
