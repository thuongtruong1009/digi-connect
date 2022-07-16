import React from 'react';
import '~/styles/components/form/_signup.scss';
import { useNavigate } from 'react-router-dom';
import { useSignUpInfoContext } from '../helpers/context';

const SignupInfor: React.FC = () => {
  const { signUpInfo } = useSignUpInfoContext();
  const navigate = useNavigate();
  const returnHome = () => navigate('/signup');

  const { role, name, email, password, checked } = signUpInfo;
  return (
    <section className="signup_infor">
      {role ? (
        <label>Role: {role}</label>
      ) : (
        <label>isEmployer: not-choose</label>
      )}
      {name ? <label>Name: {name}</label> : <label>Name: not-choose</label>}
      <label>Email: {email}</label>
      {password ? (
        <label>Password: {password}</label>
      ) : (
        <label>Password: not-choose</label>
      )}
      <label style={{ display: 'flex' }}>
        {checked?.length && checked[0] ? (
          <span>Options: [{checked[0]}</span>
        ) : (
          <span>Options: [not-choose</span>
        )}
        {checked[1] ? <span>, {checked[1]}]</span> : <span>, not-choose]</span>}
      </label>
      <button onClick={returnHome}>Back!</button>
    </section>
  );
};

export default SignupInfor;
