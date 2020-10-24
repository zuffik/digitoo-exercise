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
    content: Yup.string().required('Please fill the content')
})

interface Props {
    article?: ArticleDetail;
    onSubmit: (draft: ArticleDraft) => void;
    loading?: boolean;
}

export const ArticleForm: React.FC<Props> = (props: Props) => {
    const isEditing = !!props.article;
    const defaultValues = isEditing
    ? {title: props.article!.title, content: props.article!.content, image: props.article!.imageId}
    : {title: '', content: '', image: undefined};
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
                        <div className="form-group my-6">
                            <label className="d-block">Featured image</label>
                            <ImageUpload existingImageId={props.article?.imageId} onUploadFinished={({imageId}) => handleChange('image')(imageId)}/>
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
