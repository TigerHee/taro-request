/* eslint-disable import/prefer-default-export */
import HTTP from "./http"

export const getResultData_servers = (postData) => {
  return HTTP.post('/api/white-screen/search', postData)
}
