import {useQuery} from 'react-query'
import {getAllUser} from '../../api/user'

const Query = id => {
  const query = useQuery(['getAllUser', id], () => getAllUser(id), {
    placeholderData() {
      return []
    },
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
    // staleTime: 5000,
    enabled: true,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })
  return query
}

export default Query
