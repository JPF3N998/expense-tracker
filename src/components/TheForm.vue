<script lang="ts" setup>
import { ref, Ref } from 'vue';
import CONSTANTS from '@constants'
import Record from '@models/Record';

const { CURRENCIES, FUIC } = CONSTANTS

const data: Ref<Record> = ref({
  name: '',
  amount: 0,
  description: '',
  emoji: undefined,
  currency: 'USD',
})

// https://github.com/formkit/formkit/issues/643
const schema = [
  {
    $el: 'h1',
    children: 'Add new record'
  },
  {
    $formkit: 'text',
    name: 'name',
    sectionsSchema: {
      input: { $el: FUIC.fluentTextField }
    },
    label: 'Record name',
    help: 'Record identifier name',
    validation: 'required|email'
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
    }
  },
  {
    $formkit: 'textarea',
    label: 'Description',
    name: 'description',
    cols: 20,
    maxLength: 200,
    validation: 'required',
    sectionsSchema: {
      input: { $el: FUIC.fluentTextArea }
    }
  },
  {
    $formkit: 'text',
    label: 'Emoji',
    name: 'emoji',
    maxLength: 2,
    sectionsSchema: {
      input: { $el: FUIC.fluentTextField }
    },
    // Validation: check if only emoji, show emoji chooser in the future
  },
  {
    $formkit: 'select',
    name: 'currency',
    label: 'Currency',
    options: CURRENCIES,
    value: 'USD'
  }
]

function handleSubmit(e: Event) {
  console.log('fired');
  
  const { value } = e.target as HTMLInputElement
  data.value.name = value
}

</script>

<template>
  <div>
    <FormKit type="form" v-model="data">
      <FormKitSchema :schema="schema" />
    </FormKit>
    {{ data }}
  </div>
</template>