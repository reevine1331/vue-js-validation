const validationSchema = {
  Number: {
    schema: /^([1-9]\d*|0)$/,
    errorMessage: "は数字で入力してください"
  },
  Email: {
    schema: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    errorMessage: "の形式が正しくありません"
  }
}

export default { validationSchema }
