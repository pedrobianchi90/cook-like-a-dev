import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const validEmail = (email) => /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);

  useEffect(() => {
    const { email, password } = state;
    const number = 6;
    let isDisab = true;
    if (password.length > number && validEmail(email)) isDisab = false;
    setIsDisabled(isDisab);
  }, [state]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const buttonClick = () => {
    localStorage.setItem('mealsToken', JSON.stringify([]));
    localStorage.setItem('cocktailsToken', JSON.stringify([]));
    localStorage.setItem('user', JSON.stringify({ email: state.email }));
    history.push('/foods');
  };

  return (
    <form>
      <input
        data-testid="email-input"
        placeholder="Digite seu email"
        value={ state.email }
        onChange={ handleChange }
        name="email"
      />
      <input
        data-testid="password-input"
        placeholder="Sua senha"
        type="password"
        value={ state.password }
        onChange={ handleChange }
        name="password"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ isDisabled }
        onClick={ buttonClick }
      >
        Enter
      </button>

    </form>
  );
}

export default Login;
