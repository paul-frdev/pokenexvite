import { useQuery } from 'react-query'
import { requestPakemon } from '../requests/AsyncActions'

interface UseRequestPakemonQueryProps {
  offset: number
}
export const useRequestPakemonQuery = ({ offset }: UseRequestPakemonQueryProps) =>
  useQuery(['pakemon', offset], () => requestPakemon({ params: { limit: 20, offset } }))
