<template>
  <section class="container">
    <a-row class="top-content" type="flex" justify="center" align="middle">
      <img src="~/assets/logo-monar.png" width="250"/>
    </a-row>
    <a-row class="content" type="flex" justify="center">
      <a-form layout='vertical' :autoFormCreate="(form)=>{this.form = form}">
        <template v-if="form">
          <a-form-item
            :validateStatus="userNameError() ? 'error' : ''"
            :help="userNameError() || ''"
            fieldDecoratorId="userName"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Informe seu usuário!' }]}"
          >
            <a-input placeholder='Usuário'>
              <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item
            :validateStatus="passwordError() ? 'error' : ''"
            :help="passwordError() || ''"
            fieldDecoratorId="password"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Informe sua senha!' }]}"
          >
            <a-input type='password' placeholder='Senha'>
              <a-icon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button
              class="color-orange"
              type='primary'
              htmlType='submit'
              :disabled="hasErrors(form.getFieldsError())"
            >
              Entrar
            </a-button>
          </a-form-item>
        </template>
      </a-form>
    </a-row>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

export default {
  components: {
    Logo
  },
  data() {
    return {
      hasErrors,
      form: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit  (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  padding: 10vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.top-content {
  margin-bottom: 50px;
}

.ant-form {
  width: 500px;
  .ant-btn-primary {
    background-color: #FF6E40;
    border-color: #FF6E40;
    &:hover {
      background-color: #e56339;
      border-color: #e56339;
    }
    &:focus {
      background-color: #ff8b66;
      border-color: #ff8b66;
    }
    &[disabled] {
      background-color: #FF5252;
      border-color: #FF5252;
      color: #ffffff;
    }
  }
}
</style>
