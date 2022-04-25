import { Form, FormField, SubmitButton } from "../../components/forms";

import signupValidation from "../../utils/signupValidation";

const SignUp = () => {
  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
  };

  return (
    <Form
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={signupValidation}
      onSubmit={handleSubmit}
    >
      <FormField type="text" label="First Name" name="firstName" />
      <FormField type="text" label="Last Name" name="lastName" />
      <FormField type="email" label="email" name="email" />
      <SubmitButton title="Console" />
    </Form>
  );
};

export default SignUp;
