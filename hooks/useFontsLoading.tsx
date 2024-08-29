import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect, useCallback } from 'react';
import * as Font from 'expo-font';
import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';

SplashScreen.preventAutoHideAsync();

export default function useFontsLoading() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function load() {
      try {
        await Font.loadAsync({
          Manrope_200ExtraLight,
          Manrope_300Light,
          Manrope_400Regular,
          Manrope_500Medium,
          Manrope_600SemiBold,
          Manrope_700Bold,
          Manrope_800ExtraBold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    load();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  return { appIsReady, onLayoutRootView };
}
