import _ from 'lodash';
import validationSchema from './validationSchema';

function validate(values, settings, messages) {
  let errors = 0; //最終的に0じゃなければエラーメッセージを出します
  let validationMessage = messages;

  _.map(settings, function(setting, settingKey){ //条件にループ
    _.map(values, function(value, valueKey){ //値のループ
      if(settingKey === valueKey) { //条件と値のキーが一致した場合
        //必須チェック
        if(!requiredCheck(setting.required, value)) {
          validationMessage[settingKey] = setting.name + 'は必須です';
          errors++;
          return;
        } else {
          validationMessage[settingKey] = '';
        }
        //文字数チェック
        if(!wordcountCheck(setting.length, value)) {
          validationMessage[settingKey] =
          setting.name + 'は' +
          setting.length[0] + "文字以上" +
          setting.length[1] + "文字以下で入力してください";
          errors++;
          return;
        } else {
          validationMessage[settingKey] = '';
        }

        //形式チェック
        let formatResult = formatCheck(setting.format, value);
        if(!formatResult.status) {
          validationMessage[settingKey] = setting.name + formatResult.message;
          errors++;
          return;
        } else {
          validationMessage[settingKey] = '';
        }

      }
    });
  })
  let status = errors === 0 ? true : false;
  let validationResult = {
    status: status,
    message: validationMessage
  }
  return validationResult
}

//必須チェック
function requiredCheck(required, value) {
  if(required && (value === "" || value === null)) {
    return false;
  }
  return true;
}

//文字数チェック
function wordcountCheck(length, value) {
  if(length) {
    if(value.length < length[0] || length[1] < value.length) {
      return false
    }
  }
  return true;
}

//形式チェック
function formatCheck(format, value) {
  let schema = validationSchema.validationSchema;
  let formatResult = {
    status: true,
    message: '',
  }
  if(format) {
    _.map(format, function(schemaKey, index) {
      if(schema[schemaKey]) {
        if(!schema[schemaKey].schema.test(value)) {
          formatResult.status = false;
          formatResult.message = schema[schemaKey].errorMessage
        }
      }
    })
  }
  return formatResult;
}

export default { validate };
