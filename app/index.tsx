import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { ResizeMode, Video } from 'expo-av'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'

const Page = () => {

    const [assets] = useAssets([require('@/assets/videos/intro.mp4')])

    return (
        <View style={styles.container}>
            {assets && (
                <Video
                    isMuted
                    isLooping
                    shouldPlay
                    resizeMode={ResizeMode.COVER}
                    source={{ uri: assets[0].uri }} style={styles.video} />
            )}
            <View style={{ marginTop: 80, padding: 20 }}>
                <Text style={styles.header}>Ready to change the way you money?</Text>
            </View>

            <View style={styles.buttons}>
                <Link href={'/login'}
                    style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]}
                    asChild>
                    <TouchableOpacity>
                        <Text style={{ color: 'white', fontSize: 20 }}>Log In</Text>
                    </TouchableOpacity>
                </Link>

                <Link
                    style={[defaultStyles.pillButton, { flex: 1, backgroundColor: "#FFFFFF" }]}
                    href={'/signup'}
                    asChild>
                    <TouchableOpacity>
                        <Text style={{ color: '', fontSize: 20 }}>Sign up</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',

    },
    video: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderWidth: 2,
        borderColor: '##FF4298'
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        // marginBottom: 40,
        // // borderWidth: 2,
        // // borderColor: '#FF4298',
        // backgroundColor: Colors.dark,
        // padding: 10,
        // paddingHorizontal: 50,
        // borderRadius: 12,
    }
})

export default Page