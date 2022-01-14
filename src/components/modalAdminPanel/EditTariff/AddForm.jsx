import React from 'react'
import {Formik, ErrorMessage} from 'formik'
import {Form, FloatingLabel, Button} from 'react-bootstrap'
import {init, validationSchema} from '../../../formik/addTariff.js'
import useAddTariff from '../../../http/react-query/tariffs/useAddTariff.js'

const AddForm = ({handleClose}) => {
  const addTariff = useAddTariff()

  const controls = [
    {name: 'name', label: 'Название тарифа'},
    {name: 'price', label: 'Стоимость'},
    {name: 'connectionPrice', label: 'Стоимость подключения'},
    {name: 'speed', label: 'Скорость'},
  ]

  const onSubmit = values =>
    addTariff.mutateAsync(values).then(() => handleClose())

  return (
    <Formik
      initialValues={init}
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

          {addTariff.isError && (
            <div className="text-danger mb-2">
              {addTariff.error.response.data.message}
            </div>
          )}

          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={!dirty || !isValid}
          >
            Добавить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default AddForm
