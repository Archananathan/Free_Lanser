export const incrementAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type:'INCREMENT'});
        },2000);//Simulated delay of 1 second
    };
};

import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers';

const store = configureStore({
    reducer:counterReducer
});

export default store;

import React from 'react';
import {connect} from 'react-redux';
import { incrementAsync} from './actions';

const CounterComponent = ({ counter, incrementAsync}) => {
    return (
        <div>
            <p>Counter : {counter}</p>
            <button onClick={incrementAsync}>Increment Async</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateToProps, {incrementAsync})(CounterComponent);


import React from 'react';
import {Provider} from 'react-redux';
import CounterComponent from './Thunk/CouterComponent';
import store from './Thunk/store';

const App =() => {
    return (
        <Provider store = {store}>
            <CounterComponent/>
        </Provider>
    );
};
export default App;