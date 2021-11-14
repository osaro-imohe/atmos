/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cx from 'clsx';
import styles from './Box.module.css';
import { BoxProps } from '../../types/components';

const Box = ({
  position,
  height,
  width,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  fullHeight = false,
  fullWidth = false,
  backgroundColor,
  justifyContent,
  flexGrow,
  flexBasis,
  flexShrink,
  flexWrap,
  flex,
  overflow,
  border = false,
  className,
  borderRadius,
  inline = false,
  block = false,
  alignItems,
  textAlign,
  flexDirection,
  children,
  onClick = () => {},
}: BoxProps) => (
  <div
    className={cx(styles.box, className, {
      [styles.fullWidth]: fullWidth,
      [styles.fullHeight]: fullHeight,
      [styles.inline]: inline,
      [styles.block]: block,
      [styles.border]: border,
      [styles.flexDirectionRow]: flexDirection === 'row',
      [styles.flexDirectionColumn]: flexDirection === 'column',
    })}
    style={{
      height,
      width,
      paddingTop,
      paddingLeft,
      paddingRight,
      paddingBottom,
      marginTop,
      marginRight,
      marginLeft,
      marginBottom,
      position,
      backgroundColor,
      justifyContent,
      flexGrow,
      flexBasis,
      flexShrink,
      flexWrap,
      flex,
      overflow,
      borderRadius,
      alignItems,
      textAlign,
    }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Box;
