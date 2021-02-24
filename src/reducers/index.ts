import { combineReducers } from 'redux';
import activitiesReducer from './activitiesReducer';
import dialogReducer from './dialogReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  dialog: dialogReducer
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
