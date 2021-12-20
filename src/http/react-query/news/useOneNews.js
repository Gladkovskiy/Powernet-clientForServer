import {useQuery} from 'react-query'
import {getOneNews} from '../../api/news'

const Query = id => {
  const query = useQuery(['getOneNews', id], () => getOneNews(id), {
    placeholderData() {
      // return {count: 0, rows: []}
    },
    onError(err) {},
    onSuccess(data) {},
    onSettled(data, err) {},
    // staleTime: 0,
  })
  return query
}

export default Query
