import Introduction from '../components/Introduction.jsx';

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
  defaultDefinitions: {},
  chapters: {
    firstChapter: {
      title: 'First Chapter',
      pages: {
        firstPage: {
          path: 'first-section/first-page',
          title: 'First Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
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
    secondChapter: {
      title: 'Second Chapter',
      pages: {

      }
    }
  }
};

export default formConfig;
