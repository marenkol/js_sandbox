import * as Constants from '../actions';

export default function reducer (state, payload){

	switch (payload.type){
		case Constants.TOGGLE :
			return { toggle: !state.toggle };
	}

	if (state){
		return state;
	}

	return { toggle: false }
}
