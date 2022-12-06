import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

import './Comment.scss'

const Comment = () => {

    const navigate = useNavigate();

    return (
        <div className="comment-wrapper">
            <Formik
            initialValues = {{
                    text: ''
                
            }}
            validationSchema = {Yup.object({
                    text: Yup.string()
                            .min(10, 'Минимум 10 символов')
                            .required('Обязательное поле')
            })}
            onSubmit = {values => console.log(JSON.stringify(values))}
            >
                <Form className="comment-form" >
                    <h2 className="comment-form__title">Комментарий</h2>
                    <span className="comment-form__subtitle mb-3">Вы можете оставить свой комментарий к текущему рабочему дню</span>
                    <Field 
                        name="text" 
                        id="" 
                        cols="30" 
                        rows="10" 
                        placeholder='Опишите основные моменты'
                        as="textarea"
                    />
                    <ErrorMessage className='comment-form__error' name='text' component='div'/>
                    <div className="comment-form__btns">
                        <button className="comment-form__btn comment-form__btn_dark" type='submit'>Отправить</button>
                        <button className="comment-form__btn comment-form__btn_light" type='button' onClick={() => navigate(-1)}>Отменить</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
export default Comment;