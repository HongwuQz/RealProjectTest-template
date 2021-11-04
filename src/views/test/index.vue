<template>
  <div class="test-content">
    <list-layout>
      <template name="header">
        123
      </template>
      <template name="content">
        <lb-table :column="formData.column" :data="formData.list" :pagination="true" />
      </template>
    </list-layout>

  </div>
</template>

<script>
import { getTestList } from '@/api/test.js'
import ListLayout from '@/components/ListLayout'
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
            props: 'nick',
            label: '昵称'
          },
          {
            props: 'phone',
            label: '手机号'
          },
          {
            props: 'name',
            label: '真实姓名'
          },
          {
            props: 'project',
            label: '职务'
          },
          {
            props: 'job',
            label: '职位'
          },
          {
            props: 'year',
            label: '年龄'
          },
          {
            props: 'updateTime',
            label: '上传日期'
          },
          {
            props: 'actions',
            label: '操作'
          }

        ]
      }
    }
  },
  created() {
    getTestList().then((result) => {
      const { code, data } = result
      if (Number(code) === 20000) {
        console.log(data)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style>

</style>
