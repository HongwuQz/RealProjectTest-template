<template>
  <div class="test-content">
    <list-layout>
      <template slot="header">
        123
      </template>
      <template slot="content">
        <lb-table :column="formData.column" :data="formData.data" :pagination="true" />
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getTestList } from '@/api/test.js'
import ListLayout from '@/components/ListLayout/index.vue'
import LbTable from '@/components/lb-table/lb-table.vue'
export default {
  name: 'TestContent',
  components: {
    ListLayout,
    LbTable
  },
  data() {
    return {
      formData: {
        column: [
          {
            prop: 'nick',
            label: '昵称'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'name',
            label: '真实姓名'
          },
          {
            prop: 'subject',
            label: '所属学科'
          },
          {
            prop: 'job',
            label: '职位'
          },
          {
            prop: 'year',
            label: '年龄'
          },
          {
            prop: 'updateTime',
            label: '上传日期'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<el-button>编辑</el-button>)
            }
          }

        ],
        data: []
      }
    }
  },
  created() {
    getTestList().then((result) => {
      const { code, data } = result
      if (Number(code) === 20000) {
        const { items } = data
        this.formData.data = items
        console.log(this.formData.data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
