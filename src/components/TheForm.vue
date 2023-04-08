<script lang="ts" setup>
import { ref, Ref } from 'vue';
import CONSTANTS from '@constants'
import Transaction from '@models/Transaction';

const { CURRENCIES, FUIC } = CONSTANTS

const data: Ref<Transaction> = ref({
  name: '',
  amount: 0,
  details: '',
  emoji: '',
  currency: 'USD',
})

// LINK: [How to modify sectionsSchema as prop](https://github.com/formkit/formkit/issues/643)
const schema = [
  {
    $el: 'h1',
    children: 'Add new transaction'
  },
  {
    $formkit: 'group',
    name: 'transaction',
    children: [
      {
        $formkit: 'text',
        name: 'name',
        sectionsSchema: {
          input: { $el: FUIC.fluentTextField }
        },
        label: 'Transaction name',
        placeholder: '"New phone"',
        validation: 'required',
      },
      {
        $formkit: 'number',
        min: 0,
        step: 0.1,
        required: true,
        name: 'amount',
        label: 'Amount',
        sectionsSchema: {
          input: { $el: FUIC.fluentNumberField }
        },
        value: '0'
      },
      {
        $formkit: 'date',
        name: 'date',
        label: 'Date',
        validation: 'required'
      },
      {
        $formkit: 'textarea',
        label: 'Details',
        name: 'details',
        cols: 20,
        maxLength: 200,
        placeholder: 'Additional information...',
        sectionsSchema: {
          input: { $el: FUIC.fluentTextArea }
        },
        value: ''
      },
      {
        $formkit: 'text',
        label: 'Emoji',
        name: 'emoji',
        maxLength: 2,
        sectionsSchema: {
          input: { $el: FUIC.fluentTextField },
        },
        // Validation: check if only emoji, show emoji chooser in the future
      },
      {
        $formkit: 'select',
        name: 'currency',
        label: 'Currency',
        options: CURRENCIES,
        sectionsSchema: {
          input: { $el: FUIC.fluentSelect },
          option: { $el: FUIC.fluentOption }
        },
      }
    ]
  },
]

const tx: Ref<Transaction | null> = ref(null)
function handleSubmit(submittedData: Transaction) {
  tx.value = submittedData
}

</script>

<template>
  <div>
    <FormKit type="form" @submit="handleSubmit">
      <FormKitSchema :schema="schema" />
    </FormKit>
    <p>
      {{ tx }}
    </p>
  </div>
</template>