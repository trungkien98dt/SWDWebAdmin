import { combineReducers } from 'redux';
import bookings from './bookings';

const appReducers = combineReducers({
    bookings
});

export default appReducers;