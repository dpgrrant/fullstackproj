import React, { Fragment, useState } from "react";
import {

    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Button,

  } from '@chakra-ui/react'
  import { Formik,Form,Field } from 'formik';

const EditProfile = () => {
  const [bio, setBio] = useState('')
  const [about, setAbout] = useState('')
  const isError1 = bio === ''
  const isError2 = about === ''

    return (
    <VStack 
        left={'30%'}
        position="absolute">
        <Formik
        initialValues={{ Username: '',Password: ''}}
        onSubmit={(values, actions) => {
            try {
            fetch("http://localhost:4000/register", {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
                
            });
            } catch (err) {
            console.error(err.message);
            }
            return true;
        }}>
      {(props) => (
        <Form>
          <Field name='Username' validate={isError1}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='name'>Username</FormLabel>
                <Input {...field} id='Username' placeholder='Add Username' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>


          <Field name='Password' validate={isError1}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='Password'>Password</FormLabel>
                <Input {...field} id='Password' placeholder='Add Password ' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme='orange'
            isLoading={props.isSubmitting}
            type='submit'>

            Submit
          </Button>
        </Form>
      )}
    </Formik>
    </VStack>

    );
}
 
export default EditProfile;

