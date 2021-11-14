import Box from '../Box';
import { ModalProps } from '../../types/components';

const Modal = ({ children }: ModalProps) => (
  <Box
    fullWidth
    fullHeight
    backgroundColor="rgba(0,0,0,0.5)"
    paddingLeft="20%"
    paddingRight="20%"
    paddingTop="10%"
    paddingBottom="10%"
    position="absolute"
    block
  >
    <Box
      fullWidth
      backgroundColor="white"
      borderRadius="5px"
      justifyContent="center"
      paddingTop="50px"
      block
      alignItems="center"
      textAlign="center"
      overflow="hidden"
    >
      {children}
    </Box>
  </Box>
);

export default Modal;
