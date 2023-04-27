import { combineReducers } from 'redux';

import reducerBlockUI from './reducerBlockUI';
import reducerScrollTo from './reducerScrollTo';

const rootReducer = combineReducers({
    blockUI: reducerBlockUI,
    scrollTo: reducerScrollTo,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;