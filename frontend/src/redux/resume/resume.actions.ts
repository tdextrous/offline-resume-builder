/**
 * Redux action creators for 'Contact Item'
 */
import * as actionTypes from './resume.actionTypes';
import { Resume } from '../../entity/index';
import * as types from './resume.types';

export const addResume = (
  resume: Resume
): types.AddResumeAction => {
  return {
    type: actionTypes.RESUME_ADD,
    payload: resume
  }
}

export const updateResume = (
  resume: Resume
): types.UpdateResumeAction => {
  return {
    type: actionTypes.RESUME_UPDATE,
    payload: resume
  }
}

export const removeResume = (
  id: string
): types.RemoveResumeAction => {
  return {
    type: actionTypes.RESUME_REMOVE,
    payload: id
  }
}

export const selectContactItem = (
  resumeId: string,
  contactItemId: string
): types.SelectContactResumeAction => {
  return {
    type: actionTypes.RESUME_SELECT_CONTACT,
    payload: {
      resumeId,
      contactItemId
    }
  }
}

export const selectExperienceSection = (
  resumeId: string,
  sectionId: string
): types.SelectSectionResumeAction => {
  return {
    type: actionTypes.RESUME_SELECT_SECTION,
    payload: {
      resumeId,
      sectionId
    }
  }
}

export const selectExperienceItem = (
  resumeId: string,
  itemId: string
): types.SelectItemResumeAction => {
  return {
    type: actionTypes.RESUME_SELECT_ITEM,
    payload: {
      resumeId,
      itemId
    }
  }
}

export const selectExperienceContent = (
  resumeId: string,
  contentId: string
): types.SelectContentResumeAction => {
  return {
    type: actionTypes.RESUME_SELECT_CONTENT,
    payload: {
      resumeId,
      contentId 
    }
  }
}

export const downloadResumePdf = (
  resumeId: string
): types.DownloadPdfAction => {
  console.log('downloadResumePdf action creator called');
  return {
    type: actionTypes.RESUME_DOWNLOAD_PDF,
    payload: {
      resumeId
    }
  }
}
