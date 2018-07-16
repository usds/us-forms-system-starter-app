import Introduction from '../components/Introduction.jsx';
import fullName from '../definitions/fullName';

import fullNameUI from 'us-forms-system/lib/js/definitions/fullName';

const formConfig = {
  title: 'Form',
  subTitle: 'Test',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {
    fullName
  },
  chapters: {
    firstSection: {
      title: 'First Section',
      pages: {
        firstPage: {
          path: 'first-section/first-page',
          title: 'First Page',
          uiSchema: {
            fullName: fullNameUI
          },
          schema: {
            type: 'object',
            properties: {
              fullName
            }
          }
        },
        secondPage: {
          path: 'first-section/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },
    secondSection: {
      title: 'Second Section',
      pages: {

      }
    }
  }
};

export default formConfig;
