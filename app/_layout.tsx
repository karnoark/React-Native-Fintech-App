import Colors from '@/constants/Colors';
import { ClerkProvider } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Link, router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import * as SecureStore from 'expo-secure-store'
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

//Cache the Clerk JWT
const tokenCache = {
  async getToken(key:string){
    try {
      return SecureStore.getItemAsync(key)
    } catch (error) {
      return null;
    }
  },
  async saveToken(key: string, value: string){
    try {
      return SecureStore.setItemAsync(key,value);
    } catch (error) {
      
    }
  }
}

function InitialLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack initialRouteName={__DEV__ ? 'signup': 'index'}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="+not-found" /> */}
        <Stack.Screen name='index' options={{headerShown: false}} />
        <Stack.Screen name='signup' options={{
          title: '',
          headerBackTitle:'',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background
          },
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name='arrow-back' size={34} color={Colors.dark} />
            </TouchableOpacity>
          )

        }} />
        
        <Stack.Screen name='login' options={{
          title: '',
          headerBackTitle:'',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.background
          },
          headerLeft: () => (
            <TouchableOpacity onPress={router.back}>
              <Ionicons name='arrow-back' size={34} color={Colors.dark} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href={'/help'} asChild>
            <TouchableOpacity>
              <Ionicons name='help-circle-outline' size={34} color={Colors.dark} />
            </TouchableOpacity>
            </Link>
          )

        }} />

        <Stack.Screen name='help' options={{title: 'Help', presentation: 'modal'}} />
      </Stack>
  );
}

const RootLayoutNav = () =>{
  return (
    <>
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
    <StatusBar style='dark' />
    <InitialLayout />
    </ClerkProvider>
    </>
  )
}

export default RootLayoutNav;