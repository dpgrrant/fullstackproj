import React, { Fragment, useState } from "react";
import {

    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    VStack,
    Button,
    StackDivider,

  } from '@chakra-ui/react'
  import { Formik,Form,Field } from 'formik';

const EditProfile = () => {
  const [bio, setBio] = useState('')
  const [about, setAbout] = useState('')
  const isError1 = bio === ''
  const isError2 = about === ''

  const handleBioChange = (e) => setBio(e.target.value)
  const handleAboutChange = (e) => setAbout(e.target.value)



    return (
    <VStack 
        left={'30%'}
        position="absolute">
        <Formik
      initialValues={{ bio: '',about: ''}}
      onSubmit={(values, actions) => {
            try {
            fetch("http://localhost:4000/editprofile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
                
            });
            } catch (err) {
            console.error(err.message);
            }
            return true
      }}
    >
      {(props) => (
        <Form>
          <Field name='bio' validate={isError1}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='name'>Bio</FormLabel>
                <Input {...field} id='bio' placeholder='Add Bio' />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name='about' validate={isError1}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel htmlFor='name'>About</FormLabel>
                <Input {...field} id='about' placeholder='Add About ' />
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

