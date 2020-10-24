import * as React from 'react';
import {Form, Formik} from 'formik';
import {LoginCredentials} from '../../../services/types/dto/LoginCredentials';
import * as Yup from 'yup';
import {Field} from '../../elementary/form/Field/Field';
import {Button} from '../../elementary/form/Button/Button';
import classNames from 'classnames';
import styles from './LoginForm.module.sass';

const validationSchema = Yup.object({
  email: Yup.string().required('Please fill in your email').email('This is not valid email'),
  password: Yup.string()
    .required('Please fill in your password')
    .min(6, 'Password must be at least 6 characters long'),
});

interface Props {
  onLogin: (credentials: LoginCredentials) => void;
  loading?: boolean;
  error?: boolean;
}

export const LoginForm: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className={classNames('shadow-lg p-8', styles.root)}>
        <h2 className="mb-4">Log In</h2>
        {props.error && <div className="alert alert-danger">Log in was unsuccessful</div>}
        <Formik
          onSubmit={props.onLogin}
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
        >
          {({touched, errors}) => (
            <Form>
              <Field type="email" name="email" label="E-mail" touched={touched.email} error={errors.email} />
              <Field
                type="password"
                name="password"
                label="Password"
                touched={touched.password}
                error={errors.password}
              />
              <div className="text-right mt-10">
                <Button loading={props.loading} large>
                  Log In
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
