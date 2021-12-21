import React, {useState} from 'react'
import ModalTemplate from '../ModalTemplate'
import EditForm from './EditForm'
import NewsList from './NewsList'

const EditNews = ({show, handleClose}) => {
  const [editNews, setEditNews] = useState(null)
  const onHide = () => {
    handleClose()
    setEditNews(null)
  }

  return (
    <ModalTemplate name="Изменить новость" show={show} handleClose={onHide}>
      {!editNews ? (
        <NewsList news={setEditNews} />
      ) : (
        <EditForm id={editNews} handleClose={onHide} />
      )}
    </ModalTemplate>
  )
}

export default EditNews
