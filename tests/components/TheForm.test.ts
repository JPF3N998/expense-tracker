import { render, RenderResult, screen } from '@testing-library/vue';
import { beforeEach, describe, expect, it } from 'vitest';
import { plugin, defaultConfig } from '@formkit/vue';
import { provideFluentDesignSystem } from '@fluentui/web-components';
import TheForm from '@components/TheForm.vue';

// Registering global plugins (FormKit, for instance) in test
// LINK https://stackblitz.com/edit/github-k2bhcr?file=components%2FFormExample.test.js

describe('TheForm', () => {
  describe('Rendering', () => {
    let dom: RenderResult;

    beforeEach(() => {
      dom = render(TheForm, {
        global: {
          plugins: [[plugin, defaultConfig()]],
        },
      });
      // provideFluentDesignSystem(dom.baseElement as HTMLElement);
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
