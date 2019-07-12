import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'email-validator';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  onClick(){
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    if ( !this.state.show ) return null;

    return (
      <div>
        <div className="login" >
          <div className="login__container">

            <div className="login__iconwrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            </div>

            <h1 className="login__title">
              Read Books
            </h1>

            <div className="login__subtitle">
              Create your account to get started. After that,
  you can share books and make friends.
            </div>

            <button
              onClick={this.onClick.bind(this)}
             className="login__next">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#fff" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </button>

          </div>
        </div>
      </div>
    );
  }
}




class SecondPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      userName: ''
    };
  }

  inputOnChange() {
    let nameInput = document.querySelector('#name');
    let userNameInput = document.querySelector('#user-name');
    let submitBtn = document.querySelector('.login__next--second');

    let nameValue = nameInput.value;
    let userNameValue = userNameInput.value;

    if( '' !== nameValue &&  nameValue.length > 2){
        nameInput.classList.remove('danger');
        nameInput.classList.add('success');
    }

    if( '' !== userNameValue &&  userNameValue.length > 2){
        userNameInput.classList.remove('danger');
        userNameInput.classList.add('success');

        this.setState({
          userName: this.state.emailValue
        })
        submitBtn.removeAttribute('disabled');
    } else{
      submitBtn.setAttribute('disabled', 'disabled');
    }
  }

  checkAuth() {
    fetch(`https://authserver.worldthirteen.now.sh/check_username?username=${this.state.userName}`)
      .then(response => response.json())
      .then(data => {
        if( data.status === 'OK' ){
          userNameInput.classList.remove('danger');
          userNameInput.classList.add('success');
        } else{
            userNameInput.classList.add('danger');
            userNameInput.classList.remove('success');
      }
      })
      .catch( error => console.log(error) );

      this.setState({
        show: !this.state.show
      })
  }


   render() {
    if ( !this.state.show ) return null;

    return (
      <div>
        <div className="login" >
          <div className="login__container">

            <div className="login__iconwrap login__iconwrap--orange">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            </div>

            <h1 className="login__title">
              Welcome!
            </h1>

            <div className="login__subtitle">
              Create your account to get started. After that,you can share books and make friends.
            </div>

             <form className="login__form">
             <input
              id="name"
              type="text"
              className="login__input"
              placeholder="Name"
              onChange={ this.inputOnChange.bind(this) }
              />

              <input
              id="user-name"
              type="text"
              className="login__input"
              placeholder="User Name"
              onChange={ this.inputOnChange.bind(this) }
              />

              <div
                onClick={this.checkAuth.bind(this)}
                disabled
                className="login__next login__next--second">
                  Next Step
              </div>

              <a href="#" className="login__link">
                Already have an account? Login
              </a>
            </form>

          </div>
        </div>
      </div>
    );
  }
}





class ThirdPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      userEmail: '',
      pass: '',
      pass2: ''
    };
  }

  onClick(){
    this.setState({
      show: !this.state.show
    })
  }

  inputOnChange() {
    let emailInput = document.querySelector('#email');
    let passInput = document.querySelector('#pass');
    let passInput2 = document.querySelector('#pass2');
    let submitBtn = document.querySelector('.login__next--third');

    let emailValue = emailInput.value;
    let passValue = passInput.value;
    let passValue2 = passInput2.value;

    if( '' !== emailValue ){
      if (validator.validate(emailValue)){
        emailInput.classList.remove('danger');
        emailInput.classList.add('success');
      } else{
        emailInput.classList.add('danger');
        emailInput.classList.remove('success');
      }
    }

    if ( '' !== emailValue && validator.validate(emailValue) && '' !== passValue ){
      this.setState({
        userEmail: this.state.emailValue,
        pass: this.state.passValue,
        pass2: this.state.passValue
      })
      submitBtn.removeAttribute('disabled');
    } else{
      submitBtn.setAttribute('disabled', 'disabled');
    }

    // this.setState({ selectedCode: code });
  }

  checkAuth() {
    console.log('checkAuth')
  }


   render() {
    if ( !this.state.show ) return null;

    return (
      <div>
        <div className="login" >
          <div className="login__container">

            <div className="login__iconwrap login__iconwrap--orange">

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.5" cy="9.5" r="2.5"/><circle cx="9" cy="5.5" r="2.5"/><circle cx="15" cy="5.5" r="2.5"/><circle cx="19.5" cy="9.5" r="2.5"/><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            </div>

            <h1 className="login__title">
              Welcome!
            </h1>

            <div className="login__subtitle">
              Create your account to get started. After that,you can share books and make friends.
            </div>

             <form className="login__form">

              <input
              id="email"
              type="email"
              className="login__input"
              placeholder="Email address"
              onChange={ this.inputOnChange.bind(this) }
              />

              <input
              id="pass"
              type="password"
              className="login__input"
              placeholder="Password"
              onChange={ this.inputOnChange.bind(this) }
              />

              <input
              id="pass2"
              type="password"
              className="login__input"
              placeholder="TYPE PASSWORD AGAIN"
              onChange={ this.inputOnChange.bind(this) }
              />

              <div
                onClick={this.checkAuth.bind(this)}
                disabled
                type="submit"
                className="login__next login__next--third">
                  Sign Up
              </div>

              <a href="#" className="login__link">
                Already have an account? Login
              </a>
            </form>

          </div>
        </div>
      </div>
    );
  }


}

ReactDOM.render(
  <div>
    <FirstPage />
    <SecondPage />
    <ThirdPage />
  </div>,
  document.getElementById('root'),
);









