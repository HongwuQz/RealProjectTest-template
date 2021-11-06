<template>
  <div class="test-content">
    <list-layout>
      <template slot="header">
        <div class="conditions">
          <div class="searchItem" style="width:200px">
            <span class="searchSpan">昵称</span>
            <el-input v-model="nickSeach" placeholder="昵称" />
          </div>
          <div class="searchItem" style="wdith:300px">
            <span class="searchSpan">所属学科</span>
            <el-select v-model="seletorValue" placeholder="请选择">
              <el-option v-for="(key,idx) in options" :key="idx" :label="key" :value="key" />
            </el-select>
          </div>
          <div class="searchItem">
            <span class="searchSpan" style="width:80px">工作年限</span>
            <el-input v-model="yearSearch[0]" style="width:60px" placeholder="起" />
            <el-input v-model="yearSearch[1]" style="width:60px" placeholder="止" />
          </div>
          <div class="searchItem">
            <el-button icon="el-icon-search" type="primary" @click="seachOn">搜索</el-button>
            <el-button icon="el-icon-link" type="info" @click="reset">重置</el-button>
          </div>
        </div>

      </template>
      <template slot="content">
        <lb-table
          :column="formData.column"
          :data="formData.data"
          :pagination="true"
        />
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
            label: '工作年限'
          },
          {
            prop: 'updateTime',
            label: '上传日期'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (
                <div>
                  <a>查看</a>|
                  <a>编辑</a>|
                  <a>删除</a>
                </div>
              )
            }
          }

        ],
        data: []
      },
      options: [''],
      seletorValue: '',
      nickSeach: '',
      yearSearch: [],
      yearSearchHidden: [0, 120],
      backUp: ''
    }
  },
  created() {
    getTestList().then((result) => {
      const { code, data } = result
      if (Number(code) === 20000) {
        const { items } = data
        this.formData.data = items
        this.backUp = items
        // 去重：抽取选项
        for (const key of items) {
          const subject = key.subject
          if (this.options.indexOf(subject) === -1) {
            this.options.push(subject)
          }
        }
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    seachOn() {
      // 将年龄限制深拷贝赋值给用于判断的数值（防止出现不输入年龄点搜索也会由于双向绑定在搜索框内填入数值）
      this.yearSearchHidden = JSON.parse(JSON.stringify(this.yearSearch))
      // 缺哪个数值就补全哪个
      if (typeof this.yearSearchHidden[0] === 'undefined') this.yearSearchHidden[0] = 0
      if (typeof this.yearSearchHidden[1] === 'undefined') this.yearSearchHidden[1] = 120

      this.formData.data = this.formData.data.filter(item => item.subject === this.seletorValue && item.nick.includes(this.nickSeach) && (item.year >= this.yearSearchHidden[0] && item.year <= this.yearSearchHidden[1]))

      console.log(this.yearSearchHidden[0], this.yearSearchHidden[1])
    },
    reset() {
      this.options = ['']
      this.seletorValue = ''
      this.nickSeach = ''
      this.formData.data = JSON.parse(JSON.stringify(this.backUp))
    }
  }
}
</script>

<style lang="scss" scope>
.conditions{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  .searchSpan{
    width: 80px;
    height: 40px;
    border: #e0e0e0 1px solid;
    box-sizing: border-box;
    line-height: 40px;
    text-align: center;
  }
  .searchItem{
    width: 300px;
    display: flex;
  }
}
  a{
    color: rgb(17, 86, 189);
  }
  a:hover{
    color: brown;
  }
</style>
