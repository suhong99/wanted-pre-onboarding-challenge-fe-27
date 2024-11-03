import { useState } from 'react';
import AuthInput from '../../../shared/components/AuthInput';
import Button from '../../../shared/components/Button';
import { login } from '../api/auth';
import { useNavigate } from 'react-router';
import { URL_CONST } from '../../../shared/const/url';
import { isEmailValid, isPasswoardValid } from '../utils/auth';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = isEmailValid(email) && isPasswoardValid(password);

  const handleLogin = () => {
    login({ email, password });
  };

  const naviToSignUp = () => {
    navigate(URL_CONST.signup);
  };

  return (
    <div className="auth-form">
      <AuthInput
        type="text"
        placeholder="이메일 입력"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AuthInput
        type="password"
        placeholder="비밀번호 입력"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button label="로그인" onClick={handleLogin} disabled={!isFormValid} />
      <Button label="회원가입" onClick={naviToSignUp} />
    </div>
  );
};

export default SignIn;
