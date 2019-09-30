<template>
  <div class="page">
    <h3>ユーザー登録画面ダヨ</h3>
    <SubmitUserForm
      v-bind:formValues=formValues
      :validationStatus=validationStatus
      :validationMessage=validationMessage
    >
    </SubmitUserForm>
    <div class="footer">
      <button v-on:click="submit">登録</button>
    </div>
  </div>
</template>

<script>
import SubmitUserForm from '../components/SubmitUserForm.vue'

import validationMethod from '../utilities/validation/validationMethod'

export default {
  components: {
    SubmitUserForm,
    validationMethod
  },
  data () {
    return {
      formValues: { //扱う値
        name: null,
        age: null,
        gender: null, // 0:男, 1:女
        prefecture: null
      },
      validation: { //バリデーションの条件を詰め込んだもの
        name: {
          name: '名前',
          required: true,
          length:[1, 32],
        },
        age: {
          name: '年齢',
          required: true,
          length:[1, 4],
          format: ['Number'],
        },
        gender: {
          name: '性別',
          required: false,
          format: ['Number'],
        },
        prefecture: {
          name: '都道府県',
          required: false,
          format: ['Number'],
        },
      },
      validationStatus: true, //バリデーションが引っかかってるかどうか
      validationMessage: { //引っかかってる場合のみメッセージが入ります
        name: '',
        age: '',
        gender: '', // 0:男, 1:女
        prefecture: ''
      }
    }
  },
  methods:{
    validate() { //バリデーションメソッドの呼び出し
      return validationMethod.validate(this.formValues, this.validation, this.validationMessage);
    },
    submit() { //登録ボタン押したときの挙動
      let validationResult = this.validate();
      this.validationStatus = validationResult.status;
      this.validationMessage = validationResult.message;
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  width: 400px;
}
.footer {
  display: flex;
  justify-content: flex-end;
}
</style>
