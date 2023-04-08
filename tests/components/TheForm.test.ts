import { beforeEach, describe, expect, it } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import { plugin, defaultConfig } from '@formkit/vue';
import { createTestingPinia } from '@pinia/testing';
import TheForm from '@components/TheForm.vue';

// Registering global plugins (FormKit, for instance) in test
// LINK https://stackblitz.com/edit/github-k2bhcr?file=components%2FFormExample.test.js

// LINK Testing Pinia in components: https://pinia.vuejs.org/cookbook/testing.html#unit-testing-components

// Mock window.matchMedia: https://stackoverflow.com/a/42685938
// Using vi from vitest instead of jest

/**
 * Helper to get reference to the inner input element of the Fluent UI custom
 * web component
 */
const unwrapInput = (fluentComponent: HTMLLabelElement) => {
  if (fluentComponent.control) return fluentComponent.control;
  else return fluentComponent;
};

describe('TheForm', async () => {
  await import('@config/injectFluentDesignSystem');
  let component: RenderResult;

  beforeEach(() => {
    component = render(TheForm, {
      global: {
        plugins: [[plugin, defaultConfig(), createTestingPinia()]],
      },
    });
  });

  describe('Rendering', () => {
    describe('the correct fields', () => {
      const fieldLabels = [
        'Transaction name',
        'Amount',
        'Date',
        'Details',
        'Emoji',
        'Currency',
      ];

      it('should have the correct amount of fields', () => {
        const foundElements = document.querySelectorAll('label');
        expect(foundElements.length).toEqual(fieldLabels.length);
      });

      let el: HTMLElement;

      fieldLabels.forEach((label) => {
        it(`should render field with label: "${label}"`, async () => {
          el = await component.findByLabelText(label);
          expect(el).toBeTruthy();
        });
      });
    });
  });

  describe('Behavior', () => {
    it('should generate the correct object when submitting form', async () => {
      const nameField = (await component.findByLabelText(
        'Transaction name'
      )) as HTMLLabelElement;
      const amountField = (await component.findByLabelText(
        'Amount'
      )) as HTMLLabelElement;
      const dateField = (await component.findByLabelText(
        'Date'
      )) as HTMLLabelElement;
      const submitButton = await component.findByText('Register');

      await fireEvent.update(unwrapInput(nameField), 'New phone');
      await fireEvent.update(unwrapInput(amountField), '999');
      await fireEvent.update(unwrapInput(dateField), '2023-04-07');

      await fireEvent.click(submitButton);

      expect(component.emitted().input.length).toEqual(3);
      expect(component.emitted().click.length).toEqual(1);
    });
  });
});
