import React, {useState} from 'react'
import NewsList from './NewsList'
import {Button} from 'react-bootstrap'
import ModalTemplate from '../ModalTemplate'
import useDeleteNews from '../../../http/react-query/news/useDeleteNews.js'

const DeleteNews = ({show, handleClose}) => {
  const [deleteNewsId, setDeleteNewsId] = useState(null)
  const deleteNews = useDeleteNews()
  const onDelete = () => {
    console.log(deleteNewsId)
    deleteNews.mutate({id: deleteNewsId})
    handleClose()
    setDeleteNewsId(null)
  }

  const onHide = () => {
    handleClose()
    setDeleteNewsId(null)
  }

  return (
    <ModalTemplate name="Удалить новость" show={show} handleClose={onHide}>
      <NewsList news={setDeleteNewsId} />
      <Button variant="danger" onClick={onDelete} disabled={!deleteNewsId}>
        Удалить
      </Button>
    </ModalTemplate>
  )
}

export default DeleteNews
