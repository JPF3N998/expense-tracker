import TheForm from '@components/TheForm.vue';
import { render, screen } from '@testing-library/vue';
import { beforeEach, describe, expect, it } from 'vitest';

describe('TheForm', () => {
  describe('Rendering', () => {
    beforeEach(() => {
      render(TheForm);
    });

    it('should render the correct form fields', () => {
      console.log(screen);
    });
  });
});
