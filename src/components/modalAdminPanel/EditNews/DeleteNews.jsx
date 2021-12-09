import React, {useState} from 'react'
import NewsList from './NewsList'
import {Button} from 'react-bootstrap'
import ModalTemplate from '../ModalTemplate'

const DeleteNews = ({show, handleClose}) => {
  const [deleteNews, setDeleteNews] = useState(null)
  const onDelete = () => {
    console.log(deleteNews)
    handleClose()
    setDeleteNews(null)
  }

  const onHide = () => {
    handleClose()
    setDeleteNews(null)
  }

  return (
    <ModalTemplate name="Удалить новость" show={show} handleClose={onHide}>
      <NewsList news={setDeleteNews} />
      <Button variant="danger" onClick={onDelete} disabled={!deleteNews}>
        Удалить
      </Button>
    </ModalTemplate>
  )
}

export default DeleteNews
