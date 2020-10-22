import * as React from "react";
import {Avatar} from "../../../elementary/Avatar/Avatar";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import {CreateComment} from "../../../../services/types/dto/CreateComment";
import {Spinner} from "../../../elementary/progress/Spinner/Spinner";

const validationSchema = Yup.object({
    content: Yup.string().required("Please fill in the comment"),
    author: Yup.string().required('Please tell us who you are')
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
                {props.loading ? <Spinner/> : <Avatar src="https://picsum.photos/48"/>}
                <div className="flex-grow-1 ml-2 mt-1">
                    <Formik
                        initialValues={{content: "", author: ''}}
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
                                            name="author"
                                            className={classNames('form-control', {
                                                'is-invalid': touched.author && errors.author,
                                                'is-valid': touched.author && !errors.author,
                                            })}
                                            placeholder="Author"
                                        />
                                        <small className="text-danger ml-2">
                                            {(touched.author && errors.author) || " "}
                                        </small>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <Field
                                            name="content"
                                            className={classNames('form-control', {
                                                'is-invalid': touched.content && errors.content,
                                                'is-valid': touched.content && !errors.content,
                                            })}
                                            placeholder="Join the discussion"
                                        />
                                        <small className="text-danger ml-2">
                                            {(touched.content && errors.content) || " "}
                                        </small>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};
