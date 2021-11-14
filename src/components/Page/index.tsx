import Box from '../Box';
import { PageProps } from '../../types/components';

const Page = ({ children }: PageProps) => (
  <Box fullHeight fullWidth position="fixed">
    {children}
  </Box>
);

export default Page;
