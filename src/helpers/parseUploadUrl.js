import { BASEURL, FILE_UPLOADS_BASEPATH } from './constants.js';

export const parseUploadUrl = (fileName) => {
  return `${BASEURL}/${FILE_UPLOADS_BASEPATH}/${fileName}`;
};
