import { shallowEqual, useSelector } from 'react-redux';
import { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Page from '../../components/Page';
import { HomeCard, LotCard } from '../../components/Card';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';
import Box from '../../components/Box';
import Text from '../../components/Text';
import { Home, Lot } from '../../types/components';
import { State } from '../../store';
import Modal from '../../components/Modal';
import {
  convertNameToQueryParam,
  convertQueryParamToName,
  getCompatibleLots,
} from '../../utils';
import API from '../../api';

const Homes = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [filterHomes, setFilterHomes] = useState<boolean>(false);
  const [likedHomes, setLikedHomes] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useState<string>('');
  const [compatibleLots, setCompatibleLots] = useState<Lot[]>([]);
  const homes: Home[] = useSelector(
    (state: State) => state.homes,
    shallowEqual,
  );
  const filteredHomes = useMemo(
    () => homes.filter((home) => likedHomes.indexOf(home.homePlanId) >= 0),
    [likedHomes],
  );
  const setCLots = async () => {
    setSearchParams(search);
    const homeName = convertQueryParamToName(search);
    if (homeName) {
      const h = await API.getHomePlans();
      const l = await API.getLots();
      const combinations = await API.getCombinations();
      const cLots = getCompatibleLots(homeName, h, l, combinations);
      setCompatibleLots(cLots);
    }
  };
  useEffect(() => {
    setCLots();
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
            <Text size="lg" color="primary" text="Homes" />
            <Button
              variant="secondary"
              size="sm"
              text={filterHomes ? 'Show All Homes' : 'Show Saved Homes'}
              marginLeft="5%"
              onClick={() => setFilterHomes(!filterHomes)}
            />
          </Box>
          <Box fullHeight fullWidth marginTop="10px" inline flexWrap="wrap">
            {!filterHomes
              ? homes.map((home) => (
                <HomeCard
                  home={home}
                  key={home.homePlanId}
                  enableLikes
                  isLiked={likedHomes.indexOf(home.homePlanId) >= 0}
                  toggleLike={() => (likedHomes.indexOf(home.homePlanId) >= 0
                    ? setLikedHomes(
                      likedHomes.filter((num) => num !== home.homePlanId),
                    )
                    : setLikedHomes([...likedHomes, home.homePlanId]))}
                  onClick={() => navigate(
                    `/homes?selected-home-plan=${convertNameToQueryParam(
                      home.name,
                    )}`,
                  )}
                />
              ))
              : filteredHomes.map((home) => (
                <HomeCard
                  home={home}
                  key={home.homePlanId}
                  enableLikes
                  isLiked={likedHomes.indexOf(home.homePlanId) >= 0}
                  toggleLike={() => (likedHomes.indexOf(home.homePlanId) >= 0
                    ? setLikedHomes(
                      likedHomes.filter((num) => num !== home.homePlanId),
                    )
                    : setLikedHomes([...likedHomes, home.homePlanId]))}
                  onClick={() => navigate(
                    `/homes?selected-home-plan=${convertNameToQueryParam(
                      home.name,
                    )}`,
                  )}
                />
              ))}
            {filterHomes && filteredHomes.length <= 0 && (
              <Box
                fullWidth
                height="50px"
                alignItems="center"
                justifyContent="center"
                border
                borderRadius="10px"
                marginTop="200px"
              >
                <Text text="No Saved Homes" color="primary" size="md" />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      {searchParams && (
        <Modal onClose={() => navigate('/homes')}>
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
              onClick={() => navigate('/homes')}
            />
          </Box>
          <Box marginTop="30px" block>
            {compatibleLots.length <= 1 && (
              <Text color="secondary" size="md" text="No compatible lots" />
            )}
            {compatibleLots.length >= 1 && (
              <Text text="Compatible Lots" color="secondary" size="md" />
            )}
          </Box>
          <Box fullWidth fullHeight marginTop="50px" overflow="scroll">
            {compatibleLots.map((lot) => (
              <LotCard lot={lot} key={lot.lotId} />
            ))}
          </Box>
        </Modal>
      )}
    </Page>
  );
};

export default Homes;
