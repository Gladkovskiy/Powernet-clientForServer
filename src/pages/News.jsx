import React, {useState} from 'react'
import AllNews from '../components/AllNews'
import AllNewsPagination from '../components/AllNewsPagination'
import {listInfo} from '../assets/news.js'

const News = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const pages = Math.ceil(listInfo.length / 15)

  return (
    <>
      <AllNews page={currentPage} />
      <AllNewsPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </>
  )
}

export default News
