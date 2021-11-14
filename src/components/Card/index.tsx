import { Heart } from 'phosphor-react';
import { HomeCardProps, LotCardProps } from '../../types/components';
import Box from '../Box';
import styles from './Card.module.css';
import { HomeInfo, LotInfo } from './CardInfo';

export const HomeCard = ({
  home,
  onClick = () => {},
  enableLikes = false,
  isLiked = false,
  toggleLike = () => {},
}: HomeCardProps) => (
  <Box
    height="400px"
    paddingTop="2.5%"
    paddingBottom="2.5%"
    paddingLeft="5%"
    paddingRight="5%"
    className="col-12 col-md-6 col-lg-4"
  >
    {enableLikes && (
      <Box
        position="absolute"
        marginTop="10px"
        marginLeft="5px"
        width="40px"
        height="40px"
        borderRadius="40px"
        backgroundColor="whitesmoke"
        alignItems="center"
        justifyContent="center"
        onClick={() => toggleLike()}
      >
        {isLiked ? <Heart size="2rem" weight="fill" /> : <Heart size="2rem" />}
      </Box>
    )}
    <Box
      fullWidth
      fullHeight
      backgroundColor="white"
      borderRadius="10px"
      block
      overflow="hidden"
      onClick={() => onClick()}
    >
      <Box
        backgroundColor="gray"
        height="45%"
        fullWidth
        borderRadius="10px"
        marginBottom="10px"
      >
        <img src={home.image} alt="A home" className={styles.cardimage} />
      </Box>
      <HomeInfo
        name={home.name}
        description={home.description}
        numBaths={home.numBaths}
        numBeds={home.numBeds}
        sqft={home.sqft}
        tags={home.tags}
      />
    </Box>
  </Box>
);

export const LotCard = ({
  lot,
  onClick = () => {},
  enableLikes = false,
  isLiked = false,
  toggleLike = () => {},
}: LotCardProps) => (
  <Box
    className="col-sm-12 col-md-6 col-lg-4"
    height="400px"
    paddingTop="2.5%"
    paddingBottom="2.5%"
    paddingLeft="5%"
    paddingRight="5%"
  >
    {enableLikes && (
      <Box
        position="absolute"
        marginTop="10px"
        marginLeft="5px"
        width="40px"
        height="40px"
        borderRadius="40px"
        backgroundColor="whitesmoke"
        alignItems="center"
        justifyContent="center"
        onClick={() => toggleLike()}
      >
        {isLiked ? <Heart size="2rem" weight="fill" /> : <Heart size="2rem" />}
      </Box>
    )}
    <Box
      fullWidth
      fullHeight
      backgroundColor="white"
      borderRadius="10px"
      block
      overflow="hidden"
      onClick={() => onClick()}
    >
      <Box
        backgroundColor="gray"
        height="45%"
        fullWidth
        borderRadius="10px"
        marginBottom="10px"
      >
        <img
          src={lot.image}
          alt="A lot"
          className={styles.cardimage}
        />
      </Box>
      <LotInfo
        address={lot.address}
        acres={lot.acres}
        description={lot.description}
      />
    </Box>
  </Box>
);
