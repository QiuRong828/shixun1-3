import request from '@/utils/request'

const getMenuList = (data) => {
  return request({
    url: 'menu/list',
    method: 'GET',
    data
  })
}

export default {
  getMenuList
}
