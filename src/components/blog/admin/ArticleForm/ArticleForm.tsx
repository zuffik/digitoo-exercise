import * as React from 'react';
import {ArticleDetail} from "../../../../services/types/entity/ArticleDetail";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import {ArticleDraft} from "../../../../services/types/dto/ArticleDraft";
import {Field} from "../../../elementary/form/Field/Field";
import MDEditor from '@uiw/react-md-editor';
import {HeadingButtonContent} from "../../../layout/HeadingButtonContent/HeadingButtonContent";
import {ImageUpload} from "../../../elementary/form/ImageUpload/ImageUpload";

const validationSchema = Yup.object<ArticleDraft>({
    title: Yup.string().required('Please fill the article title'),
    imageId: Yup.string().required('Upload image'),
    content: Yup.string().required('Please fill the content'),
    perex: Yup.string().required('Please fill in the perex')
})

interface Props {
    article?: ArticleDetail;
    onSubmit: (draft: ArticleDraft) => void;
    loading?: boolean;
}

export const ArticleForm: React.FC<Props> = (props: Props) => {
    const isEditing = !!props.article;
    const defaultValues: ArticleDraft = isEditing
    ? {title: props.article!.title, perex: props.article!.perex, content: props.article!.content, imageId: props.article!.imageId || '123'/*has to be here*/}
    : {title: '', perex: '', content: '', imageId: undefined};
    return (
        <Formik initialValues={defaultValues}
                onSubmit={values => props.onSubmit(values)}
                validationSchema={validationSchema}
                validateOnBlur
                validateOnChange>
            {({
                  errors,
                  touched,
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit
            }) => (
                <HeadingButtonContent heading={isEditing ? 'Edit article' : 'Create new article'}
                                      buttonText="Publish article"
                                      loading={props.loading}
                                      onButtonClick={() => handleSubmit()}>
                    <Form>
                        <Field label="Article title" name="title" error={errors.title} touched={touched.title}/>
                        <Field label="Perex" name="perex" error={errors.perex} touched={touched.perex}/>
                        <div className="form-group my-6">
                            <label className="d-block">Featured image</label>
                            <ImageUpload imageId={values.imageId} onUploadFinished={({imageId}) => handleChange('imageId')(imageId)}/>
                            {touched.imageId && errors.imageId && <small className="form-text text-danger">{errors.imageId}</small>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <MDEditor onChange={(v?: string) => handleChange('content')(v || '')}
                                      onBlur={handleBlur('content')}
                                      id="content"
                                      value={values.content}/>
                        </div>
                    </Form>
                </HeadingButtonContent>
            )}
        </Formik>
    );
};
