import * as React from 'react';
import {Field as FormikField} from 'formik';
import classNames from 'classnames';
import styles from './Field.module.sass';

interface Props extends Omit<JSX.IntrinsicElements['input'], 'placeholder'> {
  error?: string;
  touched?: boolean;
  label: string;
  disableLabel?: boolean;
}

export const Field: React.FC<Props> = ({error, touched, label, ...props}: Props) => {
  return (
    <div className="form-group">
      <label className={styles.field}>
        {!props.disableLabel && <span className="mb-2 d-block">{label}</span>}
        <FormikField
          {...props}
            data-testid="field-input"
          placeholder={label}
          className={classNames(props.className, 'form-control', {
            'is-invalid': touched && error,
            'is-valid': touched && !error,
          })}
        />
        <small className="text-danger form-text" data-testid="field-helper-text">{(touched && error) || ' '}</small>
      </label>
    </div>
  );
};
