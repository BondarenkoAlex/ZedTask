import React, {
  PureComponent,
} from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

class CompositionItem extends PureComponent {
  render() {
    const { src, title, description } = this.props;
    return (
      <article className={style.composition}>
        <div className={style.wrapImg}>
          <img
            src={src}
            alt={title}
          />
        </div>
        <div className={style.wrapContent}>
          <header>
            <h3>{title}</h3>
          </header>
          <div>
            {description}
          </div>
        </div>
      </article>
    );
  }
}

CompositionItem.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
CompositionItem.defaultProps = {};

export default CompositionItem;
