import { call, takeLeading, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getResumeStateTree } from './resume.selectors';
import type { DownloadPdfAction } from './resume.types';
import * as types from './resume.actionTypes';

import download from 'downloadjs';


const getResumePDFBlob = async (resumeData: ReturnType<typeof getResumeStateTree>) => {
  const apiEndpoint = `${process.env.API_BASE_URL}/resume/pdf`;
  const res = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(resumeData)
  });
  const blob = await res.blob();
  return blob;
}

function* makeResumePdf(action: DownloadPdfAction): SagaIterator {
  const resumeId = action.payload.resumeId;
  const resumeStateTree = yield select(getResumeStateTree, { resumeId });
  const resumeBlob = yield call(getResumePDFBlob, resumeStateTree);
  const resumeName = 'TEST RESUME' + '.pdf'
  download(resumeBlob, resumeName)
}

function* resumeSaga(): SagaIterator {
  yield takeLeading(types.RESUME_DOWNLOAD_PDF, makeResumePdf);
}

export default resumeSaga;
