import React from 'react';
import { useNavigate } from 'react-router-dom';
import '~/styles/components/form/_signup.scss';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useSignUpInfoContext } from '../helpers/context';

type SignUp = {
  role: string;
  name: string;
  email: string;
  password: string;
  checked: [];
};

const signup: React.FC<SignUp> = () => {
  const navigate = useNavigate();
  const { submit } = useSignUpInfoContext();

  return (
    <section className="signup_container">
      <Formik
        initialValues={{
          role: '',
          name: '',
          email: '',
          password: '',
          checked: [],
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));

          submit(values);
          console.log(values);

          navigate('../signup-infor', { replace: true });
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Required'),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <div className="signup_title">
                <h1>
                  Sign <span>up</span>
                </h1>
                <p>Choose your role</p>
              </div>
              <div className="signup_radio">
                <div>
                  <input
                    type="radio"
                    name="role"
                    id="candidate"
                    onChange={handleChange}
                    value={'candidate'}
                  />
                  <label htmlFor="candidate">Candidate</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="role"
                    id="employer"
                    onChange={handleChange}
                    value={'employer'}
                  />
                  <label htmlFor="employer">Employer</label>
                </div>
              </div>
              <div className="signup_input">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    placeholder="Type your name here"
                    onChange={handleChange}
                  />
                  {values.name && errors.name && touched.name && (
                    <p className="input-feedback">* {errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Type your email here"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.email && touched.email
                        ? 'text-input error'
                        : 'text-input'
                    }
                    value={values.email}
                  />
                  {values.email && errors.email && touched.email && (
                    <p className="input-feedback">* {errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="text"
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Create password"
                  />
                  {values.password && errors.password && touched.password && (
                    <p className="input-feedback">* {errors.password}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="re_password">Re-enter Password</label>
                  <input
                    type="text"
                    name="re_password"
                    id="re_password"
                    placeholder="Re-type password"
                  />
                </div>
              </div>
              <div className="signup_checkbox">
                <div>
                  {/* <input type="checkbox" name="checked" id="isSubscribe" value={'true'} onChange={handleChange} /> */}
                  <label>
                    <Field type="checkbox" name="checked" value="1" />{' '}
                    Subscribes to news letter
                  </label>
                </div>
                <div>
                  {/* <input type="checkbox" name="checked" id="isAcceptTermsOfUse" value={'false'} onChange={handleChange} /> */}
                  <label>
                    <Field type="checkbox" name="checked" value="2" /> I accept
                    Term of Use
                  </label>
                </div>
              </div>
              <div
                className="signup_button"
                onClick={(e: unknown) =>
                  handleSubmit(e as React.FormEvent<HTMLFormElement>)
                }
              >
                <button type="submit" disabled={isSubmitting}>
                  Sign up
                </button>
              </div>
              <div className="signup_option">
                <p>Already have an account?</p>
                <a href="/search/login">Log in</a>
              </div>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default signup;
