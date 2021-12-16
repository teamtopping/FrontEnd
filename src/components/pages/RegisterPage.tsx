import React, {useState} from 'react';
import {STRING} from '~/constants/ko';

import RegisterTemplate from '../templates/RegisterTemplate';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const [nick, setNick] = useState('');
  const [emailValid, setEmailValid] = useState(undefined);
  const [pwdValid, setPwdValid] = useState(undefined);
  const [checkPwdValid, setCheckPwdValid] = useState(undefined);
  const [nickValid, setNickValid] = useState(undefined);
  return (
    <>
      <RegisterTemplate
        email={email}
        pwd={pwd}
        checkPwd={checkPwd}
        nick={nick}
        btnTxt={'다음 (1/4)'}
        emailValid={emailValid}
        pwdValid={pwdValid}
        checkPwdValid={checkPwdValid}
        nickValid={nickValid}
        pwdErrMsg={STRING.lessPwd}
        onChangeEmail={e => setEmail(e)}
        onChangePwd={p => setPwd(p)}
        onChangeCheckPwd={cP => setCheckPwd(cP)}
        onChangeNick={N => setNick(N)}
        onPressEmailIcon={() => setEmail('')}
        onPressNickIcon={() => setNick('')}
        onPressLeft={() => console.log('?')}
        onPressButton={() => console.log('?')}
      />
    </>
  );
};

export default RegisterPage;
