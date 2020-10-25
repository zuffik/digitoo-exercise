import * as React from 'react';
import {Avatar} from '../../../elementary/Avatar/Avatar';
import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import {CreateComment} from '../../../../services/types/dto/CreateComment';
import {Spinner} from '../../../elementary/progress/Spinner/Spinner';
import {Field} from '../../../elementary/form/Field/Field';

const validationSchema = Yup.object({
  content: Yup.string().required('Please fill in the comment'),
  author: Yup.string().required('Please tell us who you are'),
});

interface Props {
  count: number;
  onSubmit: (comment: CreateComment) => void;
  loading?: boolean;
}

export const CommentForm: React.FC<Props> = (props: Props) => {
  return (
    <>
      <h4>Comments ({props.count})</h4>
      {/*no avatar?*/}
      <div className="d-flex flex-row align-items-start mt-3">
        {props.loading ? <Spinner /> : <Avatar src="https://picsum.photos/48" />}
        <div className="flex-grow-1 ml-2 mt-1">
          <Formik
            initialValues={{content: '', author: ''}}
            validateOnBlur
            validateOnChange
            validationSchema={validationSchema}
            onSubmit={(comment, formik) => {
              props.onSubmit(comment);
              formik.resetForm();
            }}
          >
            {({errors, touched}) => (
              <Form>
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <Field
                      disableLabel
                      name="author"
                      label="Author"
                      error={errors.author}
                      touched={touched.author}
                    />
                  </div>
                  <div className="col-12 col-sm-6">
                    <Field
                      disableLabel
                      name="content"
                      label="Join the discussion"
                      error={errors.content}
                      touched={touched.content}
                    />
                  </div>
                </div>
                  <button type="submit" className="d-none"/>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
