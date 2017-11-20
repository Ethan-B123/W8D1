
import * as APIUtil from "../util/session_api_util"


export const RECIEVE_CURRENT_USER = "RECIEVE_CURRENT_USER";
export const RECIEVE_ERRORS = "RECIEVE_ERRORS";

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const receiveCurrentUser = (currentUser) => ({
  type: RECIEVE_CURRENT_USER,
  currentUser
});
export const receiveErrors = (errors) => ({
  type: RECIEVE_ERRORS,
  errors
});
