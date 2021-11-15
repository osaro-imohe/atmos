import { shallowEqual, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import Page from '../../components/Page';
import { HomeCard, LotCard } from '../../components/Card';
import Text from '../../components/Text';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';
import Box from '../../components/Box';
import Modal from '../../components/Modal';
import { Home, Lot } from '../../types/components';
import { State } from '../../types/store';
import {
  convertNameToQueryParam,
  convertQueryParamToName,
  getAddressDetails,
  getCompatibleHomes,
} from '../../utils';
import API from '../../api';

const Lots = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [filterLots, setFilterLots] = useState<boolean>(false);
  const [likedLots, setLikedLots] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useState<string>('');
  const [compatibleHomes, setCompatibleHomes] = useState<Home[]>([]);
  const lots: Lot[] = useSelector((state: State) => state.lots, shallowEqual);
  const filteredLots = useMemo(
    () => lots.filter((lot) => likedLots.indexOf(lot.lotId) >= 0),
    [likedLots],
  );
  const setCHomes = async () => {
    setSearchParams(search);
    const streetName = convertQueryParamToName(search);
    if (streetName) {
      const h = await API.getHomePlans();
      const l = await API.getLots();
      const combinations = await API.getCombinations();
      const cLots = getCompatibleHomes(streetName, h, l, combinations);
      setCompatibleHomes(cLots);
    }
  };
  useEffect(() => {
    setCHomes();
  }, [search]);
  return (
    <Page>
      <Box fullWidth fullHeight flexDirection="row">
        <Sidebar />
        <Box
          width="85%"
          height="100%"
          paddingTop="5%"
          paddingLeft="5%"
          paddingRight="5%"
          paddingBottom="5%"
          block
        >
          <Box
            fullWidth
            justifyContent="space-between"
            paddingLeft="5%"
            paddingRight="5%"
          >
            <Text size="lg" color="primary" text="Lots" />
            <Button
              variant="secondary"
              size="sm"
              text={filterLots ? 'Show All Lots' : 'Show Saved Lots'}
              marginLeft="5%"
              onClick={() => setFilterLots(!filterLots)}
            />
          </Box>
          <Box fullHeight fullWidth marginTop="10px" inline flexWrap="wrap">
            {!filterLots
              ? lots.map((lot) => (
                <LotCard
                  lot={lot}
                  key={lot.lotId}
                  enableLikes
                  isLiked={likedLots.indexOf(lot.lotId) >= 0}
                  toggleLike={() => (likedLots.indexOf(lot.lotId) >= 0
                    ? setLikedLots(
                      likedLots.filter((num) => num !== lot.lotId),
                    )
                    : setLikedLots([...likedLots, lot.lotId]))}
                  onClick={() => {
                    const { street } = getAddressDetails(lot.address);
                    navigate(
                      `/lots?selected-lot=${convertNameToQueryParam(street)}`,
                    );
                  }}
                />
              ))
              : filteredLots.map((lot) => (
                <LotCard
                  lot={lot}
                  key={lot.lotId}
                  enableLikes
                  isLiked={likedLots.indexOf(lot.lotId) >= 0}
                  toggleLike={() => (likedLots.indexOf(lot.lotId) >= 0
                    ? setLikedLots(
                      likedLots.filter((num) => num !== lot.lotId),
                    )
                    : setLikedLots([...likedLots, lot.lotId]))}
                  onClick={() => {
                    const { street } = getAddressDetails(lot.address);
                    navigate(
                      `/lots?selected-lot=${convertNameToQueryParam(street)}`,
                    );
                  }}
                />
              ))}
            {filteredLots && filteredLots.length <= 0 && (
              <Box
                fullWidth
                height="50px"
                alignItems="center"
                justifyContent="center"
                border
                borderRadius="10px"
                marginTop="200px"
              >
                <Text text="No Saved Lots" color="primary" size="md" />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {searchParams && (
        <Modal onClose={() => navigate('/lots')}>
          <Box
            fullWidth
            justifyContent="space-between"
            paddingLeft="5%"
            paddingRight="5%"
          >
            <Text
              text={convertQueryParamToName(searchParams)}
              color="primary"
              size="lg"
            />
            <Button
              variant="secondary"
              size="sm"
              text="X"
              onClick={() => navigate('/lots')}
            />
          </Box>
          <Box marginTop="30px" block>
            {compatibleHomes.length <= 1 && (
              <Text color="secondary" size="md" text="No compatible homes" />
            )}
            {compatibleHomes.length >= 1 && (
              <Text text="Compatible Homes" color="secondary" size="md" />
            )}
          </Box>
          <Box fullWidth fullHeight marginTop="50px" overflow="scroll">
            {compatibleHomes.map((home) => (
              <HomeCard home={home} key={home.homePlanId} />
            ))}
          </Box>
        </Modal>
      )}
    </Page>
  );
};

export default Lots;
