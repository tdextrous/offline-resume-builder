/**
 * TS types for redux related logic.
 */
import { Action } from '../../types/redux.types';
import * as types from './contactItem.actionTypes';
import { ContactItem } from '../../entity/index';

export type AddContactItemAction = Action<
  typeof types.CONTACT_ITEM_ADD,
  ContactItem>;

export type UpdateContactItemAction = Action<
  typeof types.CONTACT_ITEM_UPDATE,
  ContactItem>;

export type RemoveContactItemAction = Action<
  typeof types.CONTACT_ITEM_REMOVE,
  string>;

export type ContactItemActionTypes = AddContactItemAction
  | UpdateContactItemAction
  | RemoveContactItemAction;

export type ContactItemByIdState = Record<string, Readonly<ContactItem>>;
export type ContactItemAllIdsState = string[];
export type ContactItemState = {
  byId: ContactItemByIdState,
  allIds: ContactItemAllIdsState
}
