import {
  accentPalette,
  fluentAccordion,
  fluentAccordionItem,
  fluentButton,
  fluentDialog,
  fluentOption,
  fluentSelect,
  fluentTextArea,
  fluentTextField,
  PaletteRGB,
  provideFluentDesignSystem,
  SwatchRGB,
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

accentPalette.withDefault(
  PaletteRGB.from(SwatchRGB.from({ r: 148, g: 112, b: 244 }))
);

components.forEach((component) => {
  fluentDesignSystem.register(component());
});
