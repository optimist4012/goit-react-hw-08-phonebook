import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import Button from '@mui/material/Button';

const contactsFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required field'),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      'Please, enter only digits in format of "123-12-12"'
    )
    .required('Required field'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsFormSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.some(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          return alert(`${values.name} is already in contacts!`);
        }

        dispatch(
          addContact({
            name: values.name,
            number: values.number,
          })
        );

        actions.resetForm();
      }}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name" />
        <ErrorMessage name="name" component={'span'}></ErrorMessage>

        <label htmlFor="number">Number</label>
        <Field id="number" name="number" type="tel" />
        <ErrorMessage name="number" component={'span'}></ErrorMessage>

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};
