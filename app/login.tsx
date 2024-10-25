import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo'

const login = () => {

  const countryCode = '+91'
  const [phoneNumber, setPhoneNumber] = useState('')
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;
  const {signIn} = useSignIn()

  enum SignInType {
    Phone,
    Email,
    Google,
    Apple,
  }

  const onSignin = async (type: SignInType) => {
    if (type === SignInType.Phone) { 
      try {
        const fullPhoneNumber = `${countryCode}${phoneNumber}`
        
        const {supportedFirstFactors} = await signIn!.create({
          identifier: fullPhoneNumber,
        })
        const firstPhoneFactor: any= supportedFirstFactors?.find((factor: any) => {
          return factor.strategy === 'phone_code';
        })

        const { phoneNumberId} = firstPhoneFactor();

        await signIn!.prepareFirstFactor({
          strategy: 'phone_code',
          phoneNumberId,
        })

        router.push({pathname: '/verify[phone]', params: {phone: fullPhoneNumber, signin: 'true'}})
      } catch (error) {
        console.log('error', JSON.stringify(error, null, 2));
        if(isClerkAPIResponseError(error)){
          if(error.errors[0].code === 'form_identifier_not_found'){
            Alert.alert('Error', error.errors[0].message)
          }
        }
      }
    }
  }

  return (
    <SafeAreaView style={defaultStyles.container}>
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset} >

      </KeyboardAvoidingView>
      <Text style={defaultStyles.header}>Welcome Back</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter the phone number associated with your account
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Country Code'
          placeholderTextColor={Colors.gray}
          value={countryCode}
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder='Mobile Number'
          placeholderTextColor={Colors.gray}
          keyboardType='numeric'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <Link href={'/signup'} replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </Link>

      {/* <View style={{flex:1}}></View> */}

      <TouchableOpacity style={[
        defaultStyles.pillButton,
        phoneNumber !== '' ? styles.enabled : styles.disabled, { marginTop: 20 }]}
        onPress={() => onSignin(SignInType.Phone)}>
        <Text style={defaultStyles.buttonText}> Continue</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
        <View
          style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.lightGray }}
        />
        <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
        <View
          style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.lightGray }}
        />
      </View>

      <TouchableOpacity
        onPress={() => onSignin(SignInType.Email)}
        style={[defaultStyles.pillButton,
        {
          flexDirection: 'row',
          gap: 16,
          marginTop: 20,
          backgroundColor: Colors.gray
        }
        ]}
      >
        <Ionicons name='mail' size={24} />
        <Text style={[defaultStyles.buttonText]}>Continue with email</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSignin(SignInType.Google)}
        style={[defaultStyles.pillButton,
        {
          flexDirection: 'row',
          gap: 16,
          marginTop: 20,
          backgroundColor: Colors.gray
        }
        ]}
      >
        <Ionicons name='logo-google' size={24} />
        <Text style={[defaultStyles.buttonText]}>Continue with gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSignin(SignInType.Apple)}
        style={[defaultStyles.pillButton,
        {
          flexDirection: 'row',
          gap: 16,
          marginTop: 20,
          backgroundColor: Colors.gray
        }
        ]}
      >
        <Ionicons name='logo-apple' size={24} />
        <Text style={[defaultStyles.buttonText]}>Continue with apple</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 40
  },
  input: {
    backgroundColor: Colors.lightGray,
    borderRadius: 16,
    fontSize: 20,
    padding: 20
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
})


export default login