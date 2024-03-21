import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const [fontsLoaded] = useFonts({
    'Public-Sans': require('../assets/fonts/PublicSans.ttf'),
  });
  console.log(fontsLoaded)
  

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='modal' options={{ presentation: 'modal' }} />
        <Stack.Screen
          name='events/[id]'
          options={{
            headerBackTitle: 'Back',
            title: '',
          }}
        />
        <Stack.Screen
          name='events/all-events'
          options={{
            headerBackTitle: 'Back',
            title: '',
          }}
        />
        <Stack.Screen
          name='tips/[id]'
          options={{
            headerBackTitle: 'Back',
            title: '',
          }}
        />
        <Stack.Screen
          name='tips/all-tips'
          options={{
            headerBackTitle: 'Back',
            title: '',
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
