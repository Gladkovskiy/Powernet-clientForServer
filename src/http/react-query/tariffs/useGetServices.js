import {useQuery} from 'react-query'
import {getAdditionalServices} from '../../api/tariffs'

const Query = () => {
  const query = useQuery(['getServices'], getAdditionalServices, {
    /* placeholderData() {
      return [{id: 1, name: 'Loading...'}]
    }, */
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
  })
  return query
}

export default Query
