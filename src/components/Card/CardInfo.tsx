import Box from '../Box';
import Text from '../Text';
import { convertAcreToSqft, getAddressDetails } from '../../utils';
import { HomeInfoProps, LotInfoProps } from '../../types/components';

export const LotInfo = ({ acres, address, description }: LotInfoProps) => {
  const { city, state, street } = getAddressDetails(address);
  return (
    <>
      <Box>
        <Text color="primary" size="md" text={`${street}`} bold />
      </Box>
      <Box>
        <Text color="secondary" size="sm" text={`${city}, ${state}`} />
      </Box>
      <Box>
        <Text
          color="secondary"
          size="sm"
          text={`${acres}, ${convertAcreToSqft(acres)}`}
        />
      </Box>
      <Box marginTop="10px">
        <Text color="secondary" size="sm" text={`${description}`} />
      </Box>
    </>
  );
};

export const HomeInfo = ({
  name,
  description,
  numBaths,
  numBeds,
  sqft,
  tags,
}: HomeInfoProps) => (
  <>
    <Box>
      <Text color="primary" size="md" text={`${name}`} bold />
    </Box>
    <Box>
      <Text
        color="secondary"
        size="sm"
        text={`${numBeds} beds - ${numBaths} baths - ${sqft} sqft`}
      />
    </Box>
    <Box>
      {tags.map((tag) => (
        <Box
          paddingLeft="2px"
          paddingRight="2px"
          paddingTop="2px"
          paddingBottom="2px"
          border
          marginRight="2px"
          borderRadius="8px"
          key={Math.random()}
        >
          <Text color="secondary" size="sm" text={tag} />
        </Box>
      ))}
    </Box>
    <Box marginTop="10px">
      <Text color="secondary" size="sm" text={`${description}`} />
    </Box>
  </>
);
