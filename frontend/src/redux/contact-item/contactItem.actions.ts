/**
 * Redux action creators for 'Contact Item'
 */
import * as actionTypes from './contactItem.actionTypes';
import { ContactItem } from '../../entity/index';
import * as types from './contactItem.types';

export const addContactItem = (
  contactItem: ContactItem
): types.AddContactItemAction => {
  return {
    type: actionTypes.CONTACT_ITEM_ADD,
    payload: contactItem
  }
}

export const updateContactItem = (
  contactItem: ContactItem
): types.UpdateContactItemAction => {
  return {
    type: actionTypes.CONTACT_ITEM_UPDATE,
    payload: contactItem
  }
}

export const removeContactItem = (
  id: string
): types.RemoveContactItemAction => {
  return {
    type: actionTypes.CONTACT_ITEM_REMOVE,
    payload: id
  }
}
