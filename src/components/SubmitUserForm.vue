<template>
  <div class="form">
    <div class="form_component">
      <div class="form_title required">
        名前
      </div>
      <div class="form_content">
        <Input v-model=formValues.name></Input>
        <div class="validation-message" v-show="!validationStatus">
          {{ validationMessage.name }}
        </div>
      </div>
    </div>
    <div class="form_component">
      <div class="form_title required">
        年齢
      </div>
      <div class="form_content">
        <Input v-model=formValues.age></Input>
        <div class="validation-message" v-show="!validationStatus">
          {{ validationMessage.age }}
        </div>
      </div>
    </div>
    <div class="form_component">
      <div class="form_title">
        性別
      </div>
      <div class="form_content">
        <Radio
          v-model=formValues.gender
          v-bind:data=GENDER_LIST
        >
        </Radio>
      </div>
    </div>
    <div class="form_component">
      <div class="form_title">
        都道府県
      </div>
      <div class="form_content">
        <Select
          v-model=formValues.prefecture
          v-bind:data=PREFECTURE_LIST
        >
        </Select>
      </div>
    </div>
  </div>
</template>

<script>
import Input from './form/Input';
import Radio from './form/Radio';
import Select from './form/Select';

import GENDER_LIST from '../utilities/constants/gender';
import PREFECTURE_LIST from '../utilities/constants/prefecture';

export default {
  components: {
    Input,
    Radio,
    Select,
  },
  mixins: [GENDER_LIST, PREFECTURE_LIST],
  props: ['formValues', 'validationStatus', 'validationMessage']
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  padding: 16px;
  &_component {
    display: flex;
    margin: 16px 0px;
  }
  &_title {
    margin: 0px 8px;
    width: 30%;
  }
  &_content {
    width: 70%;
  }
}

.required {
  &:after {
    content: '*';
    color: red;
    font-size: 16px;
  }
}

.validation-message {
  color: red;
}
</style>
