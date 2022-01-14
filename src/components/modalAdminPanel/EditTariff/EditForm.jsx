import React from 'react'
import {Formik, ErrorMessage} from 'formik'
import {Form, FloatingLabel, Button} from 'react-bootstrap'
import {validationSchema, init} from '../../../formik/editTariff.js'
import useUpdateTariff from '../../../http/react-query/tariffs/useUpdateTariff.js'

const EditForm = ({selectTariff, handleClose}) => {
  const updateTariff = useUpdateTariff()

  const controls = [
    {name: 'name', label: 'Название тарифа'},
    {name: 'price', label: 'Стоимость'},
    {name: 'connectionPrice', label: 'Стоимость подключения'},
    {name: 'speed', label: 'Скорость'},
  ]

  const onSubmit = values => {
    updateTariff.mutateAsync(values).then(() => handleClose())
  }

  return (
    <Formik
      initialValues={init(selectTariff)}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
          {controls.map(({name, label}) => (
            <FloatingLabel label={label} className="mb-3" key={name}>
              <Form.Control
                type="text"
                placeholder={label}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleBlur}
                name={name}
                isValid={!errors[name] && touched[name]}
                isInvalid={errors[name] && touched[name]}
              />
              <ErrorMessage
                name={name}
                component="div"
                className="text-danger mt-1"
              />
            </FloatingLabel>
          ))}

          {updateTariff.isError && (
            <div className="text-danger mb-2">
              {updateTariff.error.response.data.message}
            </div>
          )}

          <Button
            variant="primary"
            type="submit"
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
