import { provideFluentDesignSystem, fluentCard, fluentButton } from '@fluentui/web-components';

const fluentDesignSystem = provideFluentDesignSystem();

const components = [
  fluentCard,
  fluentButton
]

components.forEach((component) => {
  fluentDesignSystem.register(component());
})