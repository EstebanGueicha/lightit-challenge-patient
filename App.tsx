import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Home } from './views/Home';
import useFontsLoading from './hooks/useFontsLoading';
import { PatientsProvider } from './context/PatientsProvider';

export default function App() {
  const { appIsReady, onLayoutRootView } = useFontsLoading();

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View onLayout={onLayoutRootView}>
        <PatientsProvider>
          <Home />
        </PatientsProvider>
      </View>
    </SafeAreaProvider>
  );
}
