/**
 * TS types for redux related logic.
 */
import { Action } from '../../types/redux.types';
import * as types from './user.actionTypes';
import { User } from '../../entity/index';

export type AddUserAction = Action<
  typeof types.USER_ADD,
  User>;

export type UpdateUserAction = Action<
  typeof types.USER_UPDATE,
  User>;

export type RemoveUserAction = Action<
  typeof types.USER_REMOVE,
  string>;

export type UserActionTypes = AddUserAction
  | UpdateUserAction
  | RemoveUserAction;

export type UserByIdState = Record<string, Readonly<User>>;
export type UserAllIdsState = string[];
export type UserState = {
  byId: UserByIdState,
  allIds: UserAllIdsState
}
