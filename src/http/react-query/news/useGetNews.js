import {useQuery} from 'react-query'
import {getNews} from '../../api/news'

const Query = (page, limit) => {
  const query = useQuery(['getNews', page, limit], () => getNews(page, limit), {
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
