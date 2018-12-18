<template>
  <section class="container">
    <a-row type="flex" justify="start">
      <a-range-picker @change="onChange" />
    </a-row>
    <a-row>
      <a-table :columns="columns" :dataSource="data" bordered>
        <template slot="name" slot-scope="text">
          <a href="javascript:;">{{text}}</a>
        </template>
      </a-table>
    </a-row>
  </section>
</template>

<script>
const columns = [{
  title: 'Data',
  dataIndex: 'date',
  align: 'center'
}, {
  title: 'Horário',
  dataIndex: 'schedule',
  align: 'center'
}, {
  title: 'Módulo',
  dataIndex: 'module',
  align: 'center'
}, {
  title: 'Temperatura',
  dataIndex: 'temperature',
  align: 'center'
}, {
  title: 'Umidade',
  dataIndex: 'humidity',
  align: 'center'
}];

const data = [{
  key: '1',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}, {
  key: '2',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}, {
  key: '3',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}, {
  key: '4',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}, {
  key: '5',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}, {
  key: '6',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}, {
  key: '7',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}, {
  key: '8',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}, {
  key: '9',
  date: '12/12/2019',
  schedule: '12:12:12',
  module: 'Refrigerador 1',
  temperature: '12 ˚C',
  humidity: '80%',
}];


export default {
  middleware: 'authenticated',
  layout: 'authenticated',
  data() {
    return {
      data,
      columns
    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 80vh;
  padding: 10vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.top-content {
  margin-bottom: 50px;
}

.ant-row-flex {
  margin-bottom: 30px;
}

.ant-layout{
  background: white;
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
