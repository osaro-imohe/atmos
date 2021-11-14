import cx from 'clsx';
import styles from './Text.module.css';
import { TextProps } from '../../types/components';

const Text = ({
  color, type = 'span', size, text, bold,
}: TextProps) => {
  const Tag = type;
  return (
    <Tag
      className={cx(styles.text, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
        [styles.bold]: bold,
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.tertiary]: color === 'tertiary',
      })}
    >
      {text}
    </Tag>
  );
};

export default Text;
