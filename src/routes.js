// Home
const HOME = "/";

const DOCUMENT = "/document";
const DOCUMENT_WRITE = "/write";
const DOCUMENT_UPDATE = "/update";

const DOCUMENT_LIST = "/list";

export const routes = {
  home: HOME,
  document: `${DOCUMENT}`,
  documentWrite: `${DOCUMENT}${DOCUMENT_WRITE}`,
  documentEdit: `${DOCUMENT}${DOCUMENT_UPDATE}`,
  documentList: `${DOCUMENT}${DOCUMENT_LIST}`
};
