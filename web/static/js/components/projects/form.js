import React, { PropTypes } from 'react';
import PageClick            from 'react-page-click';
import Actions              from '../../actions/projects';
import {renderErrorsFor}    from '../../utils';

export default class ProjectForm extends React.Component {
  componentDidMount() {
    this.refs.name.focus();
  }

  _handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;
    const { name } = this.refs;

    const data = {
      name: name.value,
    };

    dispatch(Actions.create(data));
  }

  _handleCancelClick(e) {
    e.preventDefault();

    this.props.onCancelClick();
  }

  render() {
    const { errors } = this.props;

    return (
      <PageClick onClick={::this._handleCancelClick}>
        <div className="project form">
          <div className="inner">
            <h4>New project</h4>
            <form id="new_project_form" onSubmit={::this._handleSubmit}>
              <input ref="name" id="project_name" type="text" placeholder="Project name" required="true"/>
              {renderErrorsFor(errors, 'name_user_id')}
              <button type="submit">Create project</button> <a href="#" onClick={::this._handleCancelClick}>cancel</a>
            </form>
          </div>
        </div>
      </PageClick>
    );
  }
}