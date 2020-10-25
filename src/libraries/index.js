import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { connect, Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'


export {
    React, 
    ReactDOM, 
    axios, 
    moment, 
    useHistory, 
    connect, 
    Provider, 
    PersistGate,
    storage,
    logger,
    applyMiddleware,
};

export * from "react";
export * from "react-router-dom";