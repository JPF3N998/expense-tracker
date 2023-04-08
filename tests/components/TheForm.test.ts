import { beforeEach, describe, expect, it } from 'vitest';
import { render, RenderResult, screen } from '@testing-library/vue';
import { plugin, defaultConfig } from '@formkit/vue';
import { createTestingPinia } from '@pinia/testing';
import TheForm from '@components/TheForm.vue';

// Registering global plugins (FormKit, for instance) in test
// LINK https://stackblitz.com/edit/github-k2bhcr?file=components%2FFormExample.test.js

// LINK Testing Pinia in components: https://pinia.vuejs.org/cookbook/testing.html#unit-testing-components

// Mock window.matchMedia: https://stackoverflow.com/a/42685938
// Using vi from vitest instead of jest

describe('TheForm', async () => {
  await import('@config/injectFluentDesignSystem');

  describe('Rendering', () => {
    let dom: RenderResult;

    beforeEach(() => {
      dom = render(TheForm, {
        global: {
          plugins: [[plugin, defaultConfig(), createTestingPinia()]],
        },
      });
    });

    describe('the correct fields', () => {
      const targetFieldNames = [
        'name',
        'amount',
        'date',
        'details',
        'emoji',
        'currency',
      ];

      it('test', async () => {
        const el: HTMLInputElement = await screen.findByLabelText('Currency');
        console.log(el.value);
      });

      it('should have the correct amount of fields', () => {
        const foundElements = document.querySelectorAll('label');
        expect(foundElements.length).toEqual(targetFieldNames.length);
      });

      let el: HTMLElement;
      targetFieldNames.forEach((name) => {
        it(`should render field with name: "${name}"`, async () => {
          el = document.querySelector(`[name="${name}"]`);
          expect(el).toBeTruthy();
        });
      });
    });
  });
});
