import {useQuery} from 'react-query'
import {getRole} from '../../api/role'

const Query = () => {
  const query = useQuery(['getRole'], getRole, {
    placeholderData() {
      return [{id: 1, type: 'Loading...'}]
    },
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
    // staleTime: 0,
    retry: false,
  })
  return query
}

export default Query
