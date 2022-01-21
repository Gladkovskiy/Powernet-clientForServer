import React from 'react'
import {Button, Form, FloatingLabel} from 'react-bootstrap'
import {init, validationSchema} from '../../../formik/editNews.js'
import {Formik, ErrorMessage} from 'formik'
import useOneNews from '../../../http/react-query/news/useOneNews.js'
import usePutNews from '../../../http/react-query/news/usePutNews.js'
import Spinner from '../../Spinner'

const EditForm = ({id, handleClose}) => {
  const oneNews = useOneNews(id)
  const putNews = usePutNews()

  const confirm = values => {
    putNews.mutateAsync({id, ...values}).then(() => handleClose())
  }

  if (oneNews.isLoading) return <Spinner />
  const {title, text} = oneNews.data

  return (
    <Formik
      initialValues={init(text, title)}
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

          {putNews.isError && (
            <div className="text-danger mb-2">
              {putNews.error.response.data.message}
            </div>
          )}

          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={!dirty || !isValid}
          >
            Изменить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default EditForm
