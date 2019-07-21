import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Store } from './store.js';
import * as Constants from './actions';



function List(props) {
  let newName = '';

  return (
     <div>
      { props.count }
      <button onClick={ props.increment  }>
      Increment
      </button>

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          onChange={ props.toggle }
          value={ props.enabled }
        />
        Toggle me ( { props.enabled } )
      </label>

      <br />
      <br />

      { props.list.map((student, i) => (
        <div
          key={student.name}
          onClick={props.remove.bind(null, student.name)}
        >
          { i + 1 }. { student.name }
        </div>
       ))}

       <input
        onChange={ event => newName = event.target.value }
        id="new-student-name" type="text"
       />
       <button onClick={ () => props.add(newName)  }>
        Add student
       </button>
     </div>
    )
}


const ListConnected = connect(
  (state) => ({
    list: state.students,
    count: state.counter.count,
    enabled: state.enabled.toggle
  }),
  (dispatch) => ({
    remove: (name) => dispatch({ type: Constants.REMOVE, name }),
    add: (name) => dispatch({ type: Constants.ADD, name }),
    increment: () => dispatch({ type: Constants.COUNTER_INCREMENT }),
    toggle: () => dispatch({ type: Constants.TOGGLE }),
  })
)(List);


ReactDOM.render(
  <Provider store={Store}>
    <ListConnected />
  </Provider>,
  document.getElementById('root'),
);
