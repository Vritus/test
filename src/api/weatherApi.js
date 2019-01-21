import request from '@/utils/request'

export function getWeather (apiRoute) {
  return request({
    url: apiRoute,
    method: 'get'
  })
}
