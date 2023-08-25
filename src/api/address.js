import request from '@/utils/request'

// 获取地址列表
export const getAddressList = () => {
  return request.get('/address/list')
}

// 默认收货地址id
export const getAddressId = () => {
  return request.get('/address/defaultId')
}
