import cx from 'clsx';
import styles from './Button.module.css';
import { ButtonProps } from '../../types/components';

const Button = ({
  variant,
  size,
  text,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  onClick = () => {},
}: ButtonProps) => (
  <button
    type="button"
    style={{
      marginTop,
      marginLeft,
      marginRight,
      marginBottom,
    }}
    className={cx(styles.button, {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles.tertiary]: variant === 'tertiary',
    })}
    onClick={() => onClick()}
  >
    {text}
  </button>
);

export default Button;
