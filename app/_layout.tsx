import Colors from '@/constants/Colors';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Link, router, Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
import { secureTokenCache } from '@/utils/TokenCache';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if(!CLERK_PUBLISHABLE_KEY){
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env ')
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function InitialLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const router = useRouter();
  const {isLoaded, isSignedIn} = useAuth();
  const segments = useSegments();

  useEffect(()=>{
    if(loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded])
  
  useEffect(() => {
    console.log('isSignedIn', isSignedIn)
    if(!isLoaded) return;

    console.log("segments: ",segments)
    const inAuthGroup = segments[0] === '(authenticated)'
    if(isSignedIn && !inAuthGroup){
      router.replace('/(authenticated)/(tabs)/crypto')
    }else if( !isSignedIn){
      router.replace('/');
    }

  }, [isSignedIn])

  if (!loaded || !isLoaded) {
    return <Text>Loading......</Text>;
  }

  return (
      <Stack screenOptions={{headerShown: false}}>
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

        <Stack.Screen name='verify/[phone]' options={{
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



      </Stack>
  );
}

const RootLayoutNav = () =>{
  return (
    <>
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={secureTokenCache}>
      <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
    <StatusBar style='dark' />
    <InitialLayout />
    </GestureHandlerRootView>
    </QueryClientProvider>
    </ClerkProvider>
    </>
  )
}

export default RootLayoutNav;