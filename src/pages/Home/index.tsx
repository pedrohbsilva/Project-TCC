import React, { useEffect, useState, useCallback } from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Animated from 'react-native-reanimated';
import RealTimeGraphic from '../../components/RealTimeGraphic';
import { useAuth } from '../../hooks/auth';
import {
  RTPagination,
  LastDaysProps,
  DrawerStyleProps,
} from '../../interfaces';
import api from '../../utils/api';
import { Container, ListOptions } from './styles';
import HeaderComponent from '../../components/Header';
import LastDaysGraphic from '../../components/LastDaysGraphic';

const Home = ({
  drawerAnimationStyle,
}: DrawerStyleProps): React.ReactElement => {
  const { user } = useAuth();
  const [RTItems, setRTItems] = useState<RTPagination[]>([]);
  const [lastDaysItems, setLastDaysItems] = useState<LastDaysProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    const load = async () => {
      try {
        const responseRT = await api.get(`/api/geracaoRt/getByDate`, {
          params: {
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            usinaId: user.cliente.usinas[0],
          },
        });
        const responseLD = await api.get(`/api/geracao/getLastDays`, {
          params: {
            daysBefore: 7,
            usinaId: user.cliente.usinas[0],
          },
        });
        setLastDaysItems(responseLD.data);
        setRTItems(responseRT.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    load();
  }, [user, refreshing]);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            ...drawerAnimationStyle,
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <ListOptions
              keyboardShouldPersistTaps="handled"
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            >
              <HeaderComponent />
              <Container>
                {loading ? (
                  <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                  </View>
                ) : (
                  <Swiper
                    style={{ height: 500 }}
                    showsButtons={false}
                    activeDotColor="#61cf7e"
                  >
                    {RTItems.length > 0 && <RealTimeGraphic data={RTItems} />}
                    {lastDaysItems.length > 0 && (
                      <LastDaysGraphic data={lastDaysItems} />
                    )}
                  </Swiper>
                )}
              </Container>
            </ListOptions>
          </SafeAreaView>
        </Animated.View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Home;
