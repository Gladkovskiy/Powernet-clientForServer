import React from 'react'
import {Formik, ErrorMessage} from 'formik'
// import * as yup from 'yup'
import {Form, FloatingLabel, Button} from 'react-bootstrap'
import {tarrifs} from '../../../assets/tarrifs'
import {validationSchema, init} from '../../../formik/editUser.js'

const UserForm = ({user, close}) => {
  /* const validationSchema = yup.object().shape({
    fio: yup.string().required('Обязательно'),
    adress: yup.string().required('Обязательно'),
    ip: yup.string().required('Обязательно'),
    login: yup.string().required('Обязательно'),
    password: yup.string().required('Обязательно'),
  }) */

  /* const init = {
    fio: user.fio,
    adress: user.adress,
    ip: user.ip,
    login: user.login,
    password: user.password,
    role: user.role,
    tariff: user.tariff,
    active: user.active,
  } */
  console.log(user)
  const controls = [
    {name: 'fio', label: 'ФИО'},
    {name: 'adress', label: 'Адрес'},
    {name: 'ip', label: 'IP'},
    {name: 'login', label: 'Login'},
    {name: 'password', label: 'Password'},
  ]

  const onSubmit = values => {
    console.log(values)
    // close()
  }

  const handleDelete = () => console.log(user.id)

  return (
    <Formik
      initialValues={init(user)}
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
                disabled={name === 'password' && !values.editPassword}
              />
              <ErrorMessage
                name={name}
                component="div"
                className="text-danger mt-1"
              />
            </FloatingLabel>
          ))}

          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Изменить пароль"
              name="editPassword"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Выберите роль</Form.Label>
            <div className="d-flex">
              <Form.Select onChange={handleChange} name="role">
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </Form.Select>
              <Form.Control type="text" disabled value={values.role.type} />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Выберите тариф</Form.Label>
            <div className="d-flex">
              <Form.Select>
                {tarrifs.map(({id, name}) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))}
              </Form.Select>
              <Form.Control type="text" disabled value={values.tariff.name} />
            </div>
          </Form.Group>

          <div className="ms-auto w-50 text-end">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Изменить
            </Button>
            <Button
              variant="outline-danger"
              type="submit"
              onClick={handleDelete}
              className="ms-2"
            >
              Удалить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default UserForm
