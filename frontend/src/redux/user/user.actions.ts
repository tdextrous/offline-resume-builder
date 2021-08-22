/**
 * Redux action creators for 'Contact Item'
 */
import * as actionTypes from './user.actionTypes';
import { User } from '../../entity/index';
import * as types from './user.types';

export const addUser = (
  user: User
): types.AddUserAction => {
  return {
    type: actionTypes.USER_ADD,
    payload: user
  }
}

export const updateUser = (
  user: User
): types.UpdateUserAction => {
  return {
    type: actionTypes.USER_UPDATE,
    payload: user
  }
}

export const removeUser = (
  id: string
): types.RemoveUserAction => {
  return {
    type: actionTypes.USER_REMOVE,
    payload: id
  }
}
