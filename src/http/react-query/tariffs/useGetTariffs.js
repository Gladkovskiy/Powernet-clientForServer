import {useQuery} from 'react-query'
import {getTariff} from '../../api/tariffs'

const Query = () => {
  const query = useQuery(['getTariff'], getTariff, {
    placeholderData() {
      return [{id: 1, name: 'Loading...'}]
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
