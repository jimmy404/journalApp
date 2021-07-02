import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { login } from '../actions/auth';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [ checking, setChecking ] = useState(true);
  const [ isLoggIn, setIsLoggIn ] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user?.uid){
        dispatch(login(user.uid, user.displayName));
        setIsLoggIn(true);
      } else {
        setIsLoggIn(false);
      }
      setChecking(false);
    })
  }, [dispatch, setChecking, setIsLoggIn]);

  if(checking) {
    return (
      <h1>Wait...</h1>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isLoggIn}
            path="/auth"
            component={AuthRouter}
          />

          <PrivateRoute
            exact
            isAuthenticated={isLoggIn}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  )
}
