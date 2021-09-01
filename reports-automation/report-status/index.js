'use strict';

module.exports.handler = async (event) => {
  return {
    report: {
      payload: {
        processingStatus: 'DONE'
      }
    }
  };
};
