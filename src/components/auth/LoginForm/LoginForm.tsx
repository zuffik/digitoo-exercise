import * as React from 'react';
import {Form, Formik} from 'formik';
import {LoginCredentials} from '../../../services/types/dto/LoginCredentials';
import * as Yup from 'yup';
import {Field} from '../../elementary/form/Field/Field';
import {Button} from '../../elementary/form/Button/Button';
import classNames from 'classnames';
import styles from './LoginForm.module.sass';

const validationSchema = Yup.object<LoginCredentials>({
    username: Yup.string().required('Please fill in your username'),
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
                    initialValues={{username: '', password: ''}}
                    validationSchema={validationSchema}
                >
                    {({touched, errors}) => (
                        <Form>
                            <Field name="username"
                                   data-testid="login-form-username"
                                   label="Username"
                                   touched={touched.username}
                                   error={errors.username}/>
                            <Field
                                type="password"
                                name="password" data-testid="login-form-password"
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
