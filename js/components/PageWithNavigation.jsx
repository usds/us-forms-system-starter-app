import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Scroll from 'react-scroll';
import _ from 'lodash/fp';
import classNames from 'classnames';

import FormPage from 'us-forms-system/lib/js/containers/FormPage';
import ProgressButton from 'us-forms-system/lib/js/components/ProgressButton';
// import SchemaForm from 'us-forms-system/lib/js/components/SchemaForm';
// import { setData, uploadFile } from '../actions';
import { getNextPagePath, getPreviousPagePath } from 'us-forms-system/lib/js/routing';
import { focusElement } from 'us-forms-system/lib/js/utilities/ui';

function focusForm() {
  focusElement('.nav-header');
}

const scroller = Scroll.scroller;
const scrollToTop = () => {
  scroller.scrollTo('topScrollElement', window.Forms.scroll || {
    duration: 500,
    delay: 0,
    smooth: true,
  });
};

class PageWithNavigation extends React.Component {
  componentDidMount() {
    if (!this.props.blockScrollOnMount) {
      scrollToTop();
      focusForm();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.route.pageConfig.pageKey !== this.props.route.pageConfig.pageKey ||
      _.get('params.index', prevProps) !== _.get('params.index', this.props)) {
      scrollToTop();
      focusForm();
    }
  }

  getUpdatedFormData = (formData) => {
    return formData;
  }

  onSubmit = () => {
    const { params, route, location } = this.props;
    const formData = this.getUpdatedFormData();
    // This makes sure defaulted data on a page with no changes is saved
    // Probably safe to do this for regular pages, too, but it hasn’t been necessary
    // if (route.pageConfig.showPagePerItem) {
    //   const newData = _.set([route.pageConfig.arrayPath, params.index], formData, form.data);
    //   this.props.setData(newData);
    // }

    const path = getNextPagePath(route.pageList, formData, location.pathname);

    this.props.router.push(path);
  }

  goBack = () => {
    const { route: { pageList }, location } = this.props;
    const formData = this.getUpdatedFormData();

    const path = getPreviousPagePath(pageList, formData, location.pathname);

    this.props.router.push(path);
  }

  render() {
    const {
      route,
      params,
      // form,
      contentAfterButtons,
      formContext
    } = this.props;

    // let {
    //   schema,
    //   uiSchema
    // } = form.pages[route.pageConfig.pageKey];

    const pageClasses = classNames('form-panel', route.pageConfig.pageClass);
    // let data = form.data;

    // if (route.pageConfig.showPagePerItem) {
    //   // Instead of passing through the schema/uiSchema to SchemaForm, the
    //   // current item schema for the array at arrayPath is pulled out of the page state and passed
    //   schema = schema.properties[route.pageConfig.arrayPath].items[params.index];
    //   // Similarly, the items uiSchema and the data for just that particular item are passed
    //   uiSchema = uiSchema[route.pageConfig.arrayPath].items;
    //   // And the data should be for just the item in the array
    //   data = _.get([route.pageConfig.arrayPath, params.index], data);
    // }
    // It should be "safe" to check that this is the first page because it is
    // always eligible and enabled, no need to call getPreviousPagePath.
    const isFirstRoutePage = route.pageList[0].path === this.props.location.pathname;

    return (
      <div className={pageClasses}>
        <FormPage
          route={route}
          location={this.props.location}
          onSubmit={this.onSubmit}
          onPageChange={this.getUpdatedFormData}>
          <div className="row form-progress-buttons schemaform-buttons">
            <div className="small-6 medium-5 columns">
              {!isFirstRoutePage &&
                <ProgressButton
                  onButtonClick={this.goBack}
                  buttonText="Back"
                  buttonClass="usa-button-secondary"
                  beforeText="«"/> }
            </div>
            <div className="small-6 medium-5 end columns">
              <ProgressButton
                submitButton
                buttonText="Continue"
                buttonClass="usa-button-primary"
                afterText="»"/>
            </div>
          </div>
          {contentAfterButtons}
        </FormPage>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     form: state.form,
//     user: state.user
//   };
// }

// const mapDispatchToProps = {
//   setData,
//   uploadFile
// };

PageWithNavigation.propTypes = {
  // form: PropTypes.object.isRequired,
  route: PropTypes.shape({
    pageConfig: PropTypes.shape({
      pageKey: PropTypes.string.isRequired,
      schema: PropTypes.object.isRequired,
      uiSchema: PropTypes.object.isRequired
    }),
    pageList: PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired
    }))
  }),
  contentAfterButtons: PropTypes.element,
  // setData: PropTypes.func
};

export default withRouter(PageWithNavigation);

export { PageWithNavigation };
