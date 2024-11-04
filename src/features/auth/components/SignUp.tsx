import { useState } from 'react';
import AuthInput from '../../../shared/components/AuthInput';
import Button from '../../../shared/components/Button';
import { signUp } from '../api/auth';
import { useNavigate } from 'react-router';
import { URL_CONST } from '../../../shared/const/url';
import { isEmailValid, isPasswoardValid } from '../utils/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = isEmailValid(email) && isPasswoardValid(password);

  const handleSignUp = async () => {
    const isSuccess = await signUp({ email, password });
    if (isSuccess) {
      navigate(URL_CONST.home);
    }
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
      <Button label="가입하기" onClick={handleSignUp} disabled={!isFormValid} />
      <Button
        label="로그인으로"
        onClick={() => {
          navigate(URL_CONST.auth);
        }}
      />
    </div>
  );
};

export default SignUp;
