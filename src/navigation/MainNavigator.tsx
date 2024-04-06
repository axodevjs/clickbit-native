import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {CurrentScreenContext} from '../contexts/CurrentScreenContext';
import EarnScreen from '../screens/EarnScreen/EarnScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const ref = useNavigationContainerRef();
  const [currentScreenName, setCurrentScreenName] = useState<
    string | undefined
  >(undefined);

  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrentScreenName(ref.getCurrentRoute()?.name),
      100,
    );

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const listener = ref.addListener('state', () =>
      setCurrentScreenName(ref.getCurrentRoute()?.name),
    );

    return () => {
      ref.removeListener('state', listener);
    };
  }, []);

  return (
    <CurrentScreenContext.Provider value={{currentScreenName}}>
      <NavigationContainer ref={ref}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Earn" component={EarnScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CurrentScreenContext.Provider>
  );
};

export default MainNavigator;
