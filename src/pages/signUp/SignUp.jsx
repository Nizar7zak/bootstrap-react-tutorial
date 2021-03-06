import { Form, FormField, SubmitButton } from "../../components/forms";

import signupValidation from "../../utils/signupValidation";

const SignUp = () => {
  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
  };

  return (
    <div style={{display: "flex", flexDirection: 'column'}}>
      <Form
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={signupValidation}
        onSubmit={handleSubmit}
      >
        <FormField type="text" placeholder="First Name" name="firstName" />
        <FormField type="text" placeholder="Last Name" name="lastName" />
        <FormField type="email" placeholder="email" name="email" />
        <SubmitButton title="Sign Up" role="primary" />
      </Form>
    </div>
  );
};

export default SignUp;
