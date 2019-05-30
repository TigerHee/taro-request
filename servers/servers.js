/* eslint-disable import/prefer-default-export */
import HTTPREQUEST from "./http"

export const getResultData_servers = (postData) => {
  return HTTPREQUEST.post('/api/white-screen/search', postData)
}
