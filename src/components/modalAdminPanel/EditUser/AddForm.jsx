import React from 'react'
import {Form, FloatingLabel, Button} from 'react-bootstrap'
import {tarrifs} from '../../../assets/tarrifs'
import {Formik, ErrorMessage} from 'formik'
import * as yup from 'yup'

const AddForm = () => {
  const validationSchema = yup.object().shape({
    fio: yup.string().required('Обязательно'),
    adress: yup.string().required('Обязательно'),
    ip: yup.string().required('Обязательно'),
    login: yup.string().required('Обязательно'),
    password: yup.string().required('Обязательно'),
  })

  const init = {
    fio: '',
    adress: '',
    ip: '',
    login: '',
    password: '',
    role: 'USER',
    tariff: tarrifs[0].name,
    active: true,
  }

  const controls = [
    {name: 'fio', label: 'ФИО'},
    {name: 'adress', label: 'Адрес'},
    {name: 'ip', label: 'IP'},
    {name: 'login', label: 'Login'},
    {name: 'password', label: 'Password'},
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

          <Form.Group className="mb-3">
            <Form.Label>Выберите роль</Form.Label>
            <Form.Select onChange={handleChange} name="role">
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Выберите тариф</Form.Label>
            <Form.Select>
              {tarrifs.map(({id, name}) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Добавить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default AddForm
