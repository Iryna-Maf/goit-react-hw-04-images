import PropTypes from 'prop-types';
import s from '../Button/Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={s.loadMore} type="button" onClick={onClick}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
