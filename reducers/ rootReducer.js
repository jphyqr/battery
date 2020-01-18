import { combineReducers } from "redux";

import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const rootReducer = combineReducers({


    firebase: firebaseReducer,
    firestore:firestoreReducer,
})

export default rootReducer