import axios from 'axios';

export const BASE_URL = '/v1/source-codes/';

const SourceCodesService = {
  create: ({ body }) => axios.post(BASE_URL, body),
  update: ({ sourceCodeId, body }) =>
    axios.patch(`${BASE_URL}${sourceCodeId}/`, body),
  delete: ({ sourceCodeId }) => axios.delete(`${BASE_URL}${sourceCodeId}/`),
};

SourceCodesService.compounded = {
  createOrUpdate: async ({ sourceCodeId, createBody, updateBody }) => {
    let createdSourceCode = null;
    let updatedSourceCode = null;

    // if there's a createBody parameter, create
    // a Problem first
    if (createBody) {
      const { data: createdSourceCodeData } = await SourceCodesService.create({
        body: createBody,
      });
      createdSourceCode = createdSourceCodeData;
    }

    if (updateBody) {
      const { data: updatedSourceCodeData } = await SourceCodesService.update({
        sourceCodeId: sourceCodeId || createdSourceCode.id,
        body: updateBody,
      });
      updatedSourceCode = updatedSourceCodeData;
    }

    return {
      data: {
        source_code: updatedSourceCode || createdSourceCode,
      },
    };
  },
};

export default SourceCodesService;
