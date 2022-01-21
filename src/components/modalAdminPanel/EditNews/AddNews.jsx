import React from 'react'
import {Button, Form, FloatingLabel} from 'react-bootstrap'
import ModalTemplate from '../ModalTemplate'
import {Formik, ErrorMessage} from 'formik'
import {init, validationSchema} from '../../../formik/addNews.js'
import useAddNews from '../../../http/react-query/news/useAddNews.js'

const AddNews = ({show, handleClose}) => {
  const addNews = useAddNews()

  const confirm = values => {
    const data = new FormData()
    data.append('title', values.title)
    data.append('text', values.text)
    data.append('img', values.img)
    addNews.mutateAsync(data).then(() => handleClose(false))
  }

  return (
    <ModalTemplate
      show={show}
      handleClose={handleClose}
      name="Добавить новость"
    >
      <Formik
        initialValues={init}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={confirm}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          setFieldValue,
        }) => (
          <Form>
            <FloatingLabel label="Название новости" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Название новости"
                value={values.title}
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={!errors.title && touched.title}
                isInvalid={errors.title && touched.title}
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-danger mt-1"
              />
            </FloatingLabel>

            <Form.Group className="mb-3">
              <Form.Label>Изображение новости</Form.Label>
              <Form.Control
                type="file"
                name="img"
                isValid={!errors.img && touched.title}
                isInvalid={errors.img && touched.title}
                onChange={({target}) => setFieldValue('img', target.files[0])}
              />
              <Form.Control.Feedback type="invalid">
                {errors.img}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Текст новости</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                name="text"
                value={values.text}
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={!errors.text && touched.text}
                isInvalid={errors.text && touched.text}
              />
              <ErrorMessage
                name="text"
                component="div"
                className="text-danger mt-1"
              />
            </Form.Group>

            {addNews.isError && (
              <div className="text-danger mb-2">
                {addNews.error.response.data.message}
              </div>
            )}

            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={!dirty || !isValid}
            >
              Опубликовать
            </Button>
          </Form>
        )}
      </Formik>
    </ModalTemplate>
  )
}

export default AddNews
