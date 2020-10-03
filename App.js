import React, { useState } from 'react';
import Home from './screens/home';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

/* const getFonts = () => {
  return Font.loadAsync({
    'galdeano-regular': require('./assets/fonts/Galdeano-Regular.ttf'),
    'crimsonText-regular': require('./assets/fonts/CrimsonText-Regular.ttf'),
    'crimsonText-bold': require('./assets/fonts/CrimsonText-Bold.ttf'),
  })
} */

export default function App() {
  let [fontsLoaded] = Font.useFonts({
    'galdeano-regular': require('./assets/fonts/Galdeano-Regular.ttf'),
    'crimsonText-regular': require('./assets/fonts/CrimsonText-Regular.ttf'),
    'crimsonText-bold': require('./assets/fonts/CrimsonText-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return <Home />;
  }

  /* const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    )
  } else {
    return (
      <AppLoading 
        startAsync = {getFonts}
        onFinish = {() => setFontsLoaded(true)}
      />
    )
  } */
}
