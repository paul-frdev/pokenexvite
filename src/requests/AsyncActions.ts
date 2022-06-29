import { api } from '../utils/api/instance'
import { AxiosRequestConfig } from 'axios'

interface RequestPakemonParams {
   params: {limit: number, offset: number};
  config?: AxiosRequestConfig;
}
export const requestPakemon = ({ config, params }: RequestPakemonParams) => {
  return api.get('pokemon', {...config, params})
}
