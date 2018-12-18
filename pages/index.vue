<template>
  <section class="container">
    <a-row class="top-content" type="flex" justify="center" align="middle">
      <img src="~/assets/logo-monar.png" width="250"/>
    </a-row>
    <a-row class="content" type="flex" justify="center">
      <a-form @submit="handleSubmit" layout='vertical' :autoFormCreate="(form)=>{this.form = form}">
        <template v-if="form">
          <a-form-item
            :validateStatus="usernameError() || formStatus() ? 'error' : ''"
            :help="usernameError() || ''"
            fieldDecoratorId="username"
            :fieldDecoratorOptions="{rules: [{ required: true, message: 'Informe seu usuário!' }]}"
          >
            <a-input placeholder='Usuário'>
              <a-icon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
            </a-input>
          </a-form-item>
          <a-form-item
            :validateStatus="passwordError() || formStatus() ? 'error' : ''"
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
import doAuth from '@/utils/auth.js'

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      hasErrors,
      validationError: false,
      form: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.form) {
        this.form.validateFields()
      }
    })
  },
  methods: {
    usernameError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('username') && getFieldError('username')
    },
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    formStatus () {
      return this.validationError
    },
    formError (text) {
      this.$message.error(text, 7)
      this.validationError = true
    },
    handleSubmit  (e) {
      e.preventDefault()
      this.form.validateFields((err, data) => {
        if (!err) {
          doAuth(data)
            .then(response => {
              this.validationError = false
              console.info(response)
              this.$store.dispatch('login', {
                username: data.username,
                token: response.data.token
              })
              this.$router.push('/reports')
            })
            .catch(error => {
              this.formError("Os dados fornecidos estão incorretos. Verifique seu usuário e senha.")
            })
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
    background-color: #25bc5a;
    border-color: #25bc5a;
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
