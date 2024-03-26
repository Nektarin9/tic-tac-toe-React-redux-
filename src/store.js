import { legacy_createStore } from 'redux';
import { reducer } from './reducer';



export let store = legacy_createStore(reducer);
