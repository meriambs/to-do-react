import {createStore} from 'redux';
import { reducer } from './reducer';

console.log('reducer',reducer)

export let store = createStore(reducer);