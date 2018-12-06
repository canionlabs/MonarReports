import Vue from 'vue'
import Antd from 'ant-design-vue'
import locale from 'ant-design-vue/lib/locale-provider/pt_BR'

export default () => {
  Vue.use(Antd, { locale })
}
