import React from 'react'
import {Formik, ErrorMessage} from 'formik'
import {Form, FloatingLabel, Button} from 'react-bootstrap'
import {tarrifs} from '../../../assets/tarrifs'
import {validationSchema, init} from '../../../formik/editUser.js'
import usePutUser from '../../../http/react-query/user/usePutUser.js'
import useDeleteUser from '../../../http/react-query/user/useDeleteUser.js'

const UserForm = ({user, close}) => {
  const updateUser = usePutUser()
  const deleteUser = useDeleteUser()

  const controls = [
    {name: 'fio', label: 'ФИО'},
    {name: 'adress', label: 'Адрес'},
    {name: 'ip', label: 'IP'},
    {name: 'login', label: 'Login'},
    {name: 'password', label: 'Password'},
  ]

  const onSubmit = values => {
    updateUser.mutateAsync(values).then(() => close())
  }

  const handleDelete = e => {
    e.preventDefault()
    deleteUser.mutateAsync({id: user.id}).then(() => close())
  }

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

          {updateUser.isError && (
            <div className="text-danger mb-2">
              {updateUser.error.response.data.message}
            </div>
          )}

          {deleteUser.isError && (
            <div className="text-danger mb-2">
              {deleteUser.error.response.data.message}
            </div>
          )}

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
