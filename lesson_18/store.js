import { createStore, combineReducers } from 'redux';
import studentsReducer from './reducers/students'
import counterReducer from './reducers/counter'
import toggleReducer from './reducers/toggle'

const rootReducer = combineReducers({
	students: studentsReducer,
	counter: counterReducer,
	enabled: toggleReducer
});

// export const Store = createStore( studentsReducer );
export const Store = createStore( rootReducer );

console.log(Store.getState())


// Store.dispatch({ type: 'ADD', name: 'HAHAHA' })
