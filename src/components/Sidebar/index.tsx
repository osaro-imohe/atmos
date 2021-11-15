import { Link } from 'react-router-dom';
import Box from '../Box';
import Text from '../Text';
import styles from './Sidebar.module.css';

const Sidebar = () => (
  <Box
    fullHeight
    width="15%"
    backgroundColor="blue"
    inline
    block
    paddingLeft="30px"
    paddingTop="30px"
  >
    <Link to="/homes" className={styles.links}>
      <Text color="tertiary" text="Home Plans" size="md" type="p" bold />
    </Link>
    <Link to="/lots" className={styles.links}>
      <Text color="tertiary" text="Lots" size="md" type="p" bold />
    </Link>
  </Box>
);

export default Sidebar;
