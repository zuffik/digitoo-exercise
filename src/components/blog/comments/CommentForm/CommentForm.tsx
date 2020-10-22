import * as React from "react";
import { Avatar } from "../../../elementary/Avatar/Avatar";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  comment: Yup.string().required("Please fill in the value"),
});

interface Props {
  count: number;
  onSubmit: (comment: string) => void;
}

export const CommentForm: React.FC<Props> = (props: Props) => {
  return (
    <>
      <h4>Comments ({props.count})</h4>
      {/*no avatar?*/}
      <div className="d-flex flex-row align-items-start mt-3">
        <Avatar src="https://picsum.photos/48" />
        <div className="flex-grow-1 ml-2 mt-1">
          <Formik
            initialValues={{ comment: "" }}
            validateOnBlur
            validateOnChange
            validationSchema={validationSchema}
            onSubmit={({ comment }) => props.onSubmit(comment)}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="comment"
                  className="form-control"
                  placeholder="Join the discussion"
                />
                <small className="text-danger ml-2">
                  {(touched.comment && errors.comment) || " "}
                </small>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
