/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../components/App';
import Button from '../components/Button';
import ModalWindow from '../components/ModalWindow';
import ContentWindow from '../components/ContentWindow';
import CompositionItem from '../components/CompositionItem';
import { compositionsSelector } from '../selectors';
import LoadingBar from 'react-redux-loading-bar';
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
    // можно загружать при клике, но это, наверное, не лучший способ.
    // this.props.loadCompositionsIfNeed();
    this.props.isOpenWindowToggle();
  }

  render() {
    const { title, compositions, isOpenWindow } = this.props;
    const isShow = isOpenWindow && !compositions.isFetching;
    const isError = compositions.error !== null;
    return (
      <App>
        <LoadingBar />
        <br />
        <Button onClick={this.onTogglePopup}>Popup</Button>
        {isShow && (
          <ModalWindow
            onClick={this.onTogglePopup}
          >
            <ContentWindow
              title={title}
            >
              {isError
                ? compositions.error
                : compositions.items.map(item => (
                  <CompositionItem
                    key={item.id}
                    src={item.thumbnails.default.url}
                    title={item.title}
                    description={item.description}
                  />
                ))
              }
            </ContentWindow>
          </ModalWindow>)
        }
      </App>
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

/* <div key={item.id}>{item.title}</div> */
