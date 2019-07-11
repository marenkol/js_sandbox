import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'email-validator';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userLogin: 'react@snowball.alevel.com ',
      userPass: 'YouSimplyTheBest2019'
    };
  }

  inputOnChange() {
    let emailInput = document.querySelector('#email');
    let passInput = document.querySelector('#pass');
    let submitBtn = document.querySelector('.login__submit');
    let wrongEmailBox = document.querySelector('.login__wrongemail');

    let emailValue = emailInput.value;
    let passValue = passInput.value;

    if( '' !== emailValue ){
      if (validator.validate(emailValue)){
        wrongEmailBox.classList.remove('active');
        emailInput.classList.remove('border-danger');
      } else{
        emailInput.classList.add('border-danger');
        wrongEmailBox.classList.add('active');
      }
    }

    if ( '' !== emailValue && '' !== passValue ){
      submitBtn.removeAttribute('disabled');
    } else{
      submitBtn.setAttribute('disabled', 'disabled');
    }

    // this.setState({ selectedCode: code });
  }

  checkAuth() {
    e.preventDefault();

    let emailInput = document.querySelector('#email');
    let passInput = document.querySelector('#pass');
    let wrongAuthBox = document.querySelector('.login__auth');

    let emailValue = emailInput.value;
    let passValue = passInput.value;

    if (
      emailValue !== this.state.userLogin
      || passValue !== this.state.userPass
      ) {
      console.log('Hello')
      wrongAuthBox.classList.add('active');
    } else {
      wrongAuthBox.classList.remove('active');
    }
  }

  render() {
    return (
      <div>

        <div className="login">
          <div className="login__container">

            <h1 className="login__title">
              YOUR ART MUSEUM
            </h1>

            <div className="login__location">
              151 3rd St <br/>
              San Francisco, CA 94103
            </div>

            <form className="login__form">
              <span className="login__wrongemail">Invalid email address</span>

              <span className="login__auth">Invalid email or password</span>

              <input
                id="email"
                type="email"
                className="login__input"
                placeholder="Email address"
                onChange={ this.inputOnChange.bind() }
              />

              <input
                id="pass"
                type="password"
                className="login__input"
                placeholder="Password"
                onChange={ this.inputOnChange.bind() }
              />

              <a href="#" className="login__link login__link--forgotpass">
                Forgot your password?
              </a>

              <button
                className="login__submit"
                type="submit"
                disabled
                onClick={ this.checkAuth.bind() }
              >
                Log in
              </button>

              <a href="#" className="login__link">Don’t have an account?</a>
             </form>

          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <Login />,
  document.getElementById('root'),
);
