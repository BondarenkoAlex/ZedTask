/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '../components/Button';
import ModalWindow from '../components/ModalWindow';
import ContentWindow from '../components/ContentWindow';
import { compositionsSelector } from '../selectors';
import {
  loadCompositionsIfNeed,
  isOpenWindowToggle,
} from '../actions';

class AppContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.onTogglePopup = this.onTogglePopup.bind(this);
    this.onKeyEsc = this.onKeyEsc.bind(this);
  }

  componentWillMount() {
    this.props.loadCompositionsIfNeed();
    document.addEventListener('keydown', this.onKeyEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyEsc);
  }

  onKeyEsc(event) {
    let keyCode;
    if (event.which === null) { // IE
      keyCode = event.keyCode;
    }

    if (event.which !== 0) { // все кроме IE
      keyCode = event.keyCode;
    }

    if (keyCode === 27) {
      // esc
      this.onTogglePopup();
    }
  }

  onTogglePopup() {
    this.props.isOpenWindowToggle();
  }

  render() {
    const { title, compositions, isOpenWindow } = this.props;
    return (
      <div>
        <Button onClick={this.onTogglePopup}>Popup</Button>
        {isOpenWindow && (
          <ModalWindow
            onClick={this.onTogglePopup}
          >
            <ContentWindow
              title={title}
            >
              {compositions.items.map(item => (
                <div key={item.id}>{item.title}</div>
              ))}
            </ContentWindow>
          </ModalWindow>)
        }
      </div>
    );
  }
}

AppContainer.propTypes = {
  title: PropTypes.string,
  compositions: PropTypes.object.isRequired,
  isOpenWindow: PropTypes.bool.isRequired,
  loadCompositionsIfNeed: PropTypes.func.isRequired,
  isOpenWindowToggle: PropTypes.func.isRequired,
};
AppContainer.defaultProps = {
  title: 'Музыкальные композиции beeline',
};

const mapStateToProps = state => ({
  compositions: compositionsSelector(state),
  isOpenWindow: state.storage.isOpenWindow,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadCompositionsIfNeed,
    isOpenWindowToggle,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
