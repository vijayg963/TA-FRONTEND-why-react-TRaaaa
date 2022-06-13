import { buttonTypes, buttonSize } from './buttonInfo';

function Button(props) {
  function getStyles() {
    let { type = buttonTypes.PRIMARY, size = buttonSize.MEDIUM } = props;
    return `btn--${type} btn--${size}`;
  }
  return (
    <>
      <button
        onClick={props.onClickHandler}
        className={getStyles()}
        disabled={props.disabled}
      >
        {props.label || 'Button'}
      </button>
    </>
  );
}

export default Button;
