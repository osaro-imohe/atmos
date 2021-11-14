import Box from '../../components/Box';
import Text from '../../components/Text';
import Page from '../../components/Page';

const NotFound = () => (
  <Page>
    <Box
      fullWidth
      fullHeight
      alignItems="center"
      justifyContent="center"
    >
      <Text color="primary" size="lg" text="404 - Page not found" bold />
    </Box>
  </Page>
);

export default NotFound;
