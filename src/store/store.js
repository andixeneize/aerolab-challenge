import { createStore, applyMiddleware, compose } from 'redux'
import { redeemReducer } from '../reducers/redeemReducer'
import thunk from 'redux-thunk'

export const store = createStore(
    redeemReducer, 
    compose(
        applyMiddleware(thunk)
    )
);