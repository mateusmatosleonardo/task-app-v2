import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/routes';
import { Theme } from './src/templates/theme';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return null
  }

  return (
    <>
      <StatusBar style="auto" />
      <Theme>
        <Routes/>
      </Theme>
    </>
  );
}

