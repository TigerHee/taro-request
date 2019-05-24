/* eslint-disable import/prefer-default-export */
import API from "./api"

export const getResultData_servers = (postData) => {
  return API.post('/api/white-screen/search', postData)
}
