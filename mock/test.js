const userList = [
  {
    nick: 'Hongwu',
    phone: 13949159737,
    name: 'HongwuQz',
    subject: 'FrontDevelop',
    job: 'student',
    year: 21,
    updateTime: '2021-11-4'
  },
  {
    nick: 'Hongwu',
    phone: 13949159737,
    name: 'HongwuQz',
    subject: 'FrontDevelop',
    job: 'student',
    year: 21,
    updateTime: '2021-11-4'
  },
  {
    nick: 'Hongwu',
    phone: 13949159737,
    name: 'HongwuQz',
    subject: 'FrontDevelop',
    job: 'student',
    year: 21,
    updateTime: '2021-11-4'
  }
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: userList.length,
          items: userList
        }
      }
    }
  }
]
