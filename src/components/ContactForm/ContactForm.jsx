import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .required('Phone number is required')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number must be in format 111-11-11'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const nameId = useId();
  const phoneId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id={nameId}
          />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={css.fieldWrapper}>
          <label className={css.label} htmlFor={phoneId}>
            Number
          </label>
          <Field
            className={css.formInput}
            type="tel"
            name="number"
            id={phoneId}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button className={css.addBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
