import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const signup = () => {

    const countryCode = '+91'
    const [phoneNumber, setPhoneNumber] = useState('')
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 90 : 0;

    const onSignup = async () => {

    }

    return (
        <SafeAreaView style={defaultStyles.container}>
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset} >

            </KeyboardAvoidingView>
            <Text style={defaultStyles.header}>Let's get started</Text>
            <Text style={defaultStyles.descriptionText}>
                Enter your phone number, We will send you a confirmation code there
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

            <Link href={'/login'} replace asChild>
                <TouchableOpacity>
                    <Text style={defaultStyles.textLink}>Already have an account? Log in</Text>
                </TouchableOpacity>
            </Link>

            <View style={{flex:1}}></View>

            <TouchableOpacity style={[
                defaultStyles.pillButton, 
                phoneNumber !== '' ? styles.enabled : styles.disabled, { marginTop: 20 }]} 
                onPress={onSignup}>
                <Text style={defaultStyles.buttonText}> Sign Up</Text>
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


export default signup