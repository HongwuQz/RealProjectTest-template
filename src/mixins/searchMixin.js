export default {
  methods: {
    searchOn() {
      this.formData.data = JSON.parse(JSON.stringify(this.backUp))
      // 将年龄限制深拷贝赋值给用于判断的数值（防止出现不输入年龄点搜索也会由于双向绑定在搜索框内填入数值）
      this.yearSearchHidden = JSON.parse(JSON.stringify(this.yearSearch))
      // 缺哪个数值就补全哪个
      console.log(this.formData.data[2].year)
      if (typeof this.yearSearchHidden[0] === 'undefined') this.yearSearchHidden[0] = 0
      if (typeof this.yearSearchHidden[1] === 'undefined') this.yearSearchHidden[1] = 120

      this.formData.data = this.formData.data.filter(item => item.subject.includes(this.seletorValue) && item.nick.includes(this.nickSeach) && (item.year >= this.yearSearchHidden[0] && item.year <= this.yearSearchHidden[1]))
      //
      console.log(this.yearSearchHidden[0], this.yearSearchHidden[1])
    },
    reset() {
      this.options = []
      this.seletorValue = ''
      this.nickSeach = ''
      this.yearSearch = []
      this.formData.data = JSON.parse(JSON.stringify(this.backUp))
    }
  }
}
