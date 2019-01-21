import request from '@/utils/request'

export function getTest (apiRoute) {
  return request({
    url: apiRoute,
    method: 'get'
  })
}
