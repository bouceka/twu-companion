import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme } from '@/components/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'onboarding',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  const router = useRouter();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      router.navigate('onboarding');
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName='onboarding'>
          <Stack.Screen name='onboarding' options={{ headerShown: false }} />
          <Stack.Screen name='checklist/[id]' options={{ headerBackTitle: 'Back', title: '' }} />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='(modals)/help' options={{ presentation: 'modal', headerTitle: 'User Help' }} />
          <Stack.Screen
            name='events/[id]'
            options={{
              headerBackTitle: 'Back',
              title: '',
            }}
          />
          <Stack.Screen
            name='spartanEvents/[id]'
            options={{
              headerBackTitle: 'Back',
              title: '',
            }}
          />
          <Stack.Screen
            name='spartanEvents/all-events'
            options={{
              headerBackTitle: 'Back',
              title: 'Spartan Events',
            }}
          />
          <Stack.Screen
            name='events/all-events'
            options={{
              headerBackTitle: 'Back',
              title: 'Events',
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
              title: 'Tips and Tricks',
            }}
          />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
