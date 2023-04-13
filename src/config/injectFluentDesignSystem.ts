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

// LINK: Fluent Color Palette change:
// 1. https://github.com/microsoft/fast/blob/master/examples/design-system-tutorial/src/main.ts#L123
// 2. https://github.com/microsoft/fluentui/blob/677a67b551966986db34a6fac608cb89ee150471/packages/web-components/src/design-tokens.ts#L315

components.forEach((component) => {
  fluentDesignSystem.register(component());
});
