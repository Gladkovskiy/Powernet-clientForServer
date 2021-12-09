import React from 'react'
import {Formik, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {Form, FloatingLabel, Button} from 'react-bootstrap'

const EditForm = ({selectTariff}) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательно'),
    price: yup.string().required('Обязательно'),
    connectionPrice: yup.string().required('Обязательно'),
    speed: yup.string().required('Обязательно'),
  })

  const init = {...selectTariff}

  const controls = [
    {name: 'name', label: 'Название тарифа'},
    {name: 'price', label: 'Стоимость'},
    {name: 'connectionPrice', label: 'Стоимость подключения'},
    {name: 'speed', label: 'Скорость'},
  ]

  const onSubmit = values => console.log(values)

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

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Изменить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default EditForm
