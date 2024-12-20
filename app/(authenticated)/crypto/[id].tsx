import { View, Text, SectionList, ScrollView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useHeaderHeight } from '@react-navigation/elements'
import { useQuery } from '@tanstack/react-query'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { Ionicons } from '@expo/vector-icons'
import Chart from '@/components/Chart'
import { CartesianChart, Line } from "victory-native";
import { Circle, useFont } from '@shopify/react-native-skia';

const Page = () => {
  const { id } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Overview', 'News', 'Orders', 'Transactions'];


  const { data } = useQuery({
    queryKey: ['info', id],
    queryFn: async () => {
      const info = await fetch(`/api/info?ids=${id}`).then((res) => res.json())
      return info[+id];
    }
  })
  const font = useFont(require('@/assets/fonts/SpaceMono-Regular.ttf'))
  const { data: tickers } = useQuery({
    queryKey: ['tickers'],
    queryFn: async (): Promise<any[]> => fetch(`/api/tickers`).then((res) => res.json())
})
  const DATA = Array.from({ length: 31 }, (_, i) => ({
    day: i,
    highTmp: 40 + 30 * Math.random(),
  }));


  return (
    <>
      <Stack.Screen options={{ title: data?.name }} />
      <SectionList
        style={{ marginTop: headerHeight }}
        contentInsetAdjustmentBehavior='automatic'
        keyExtractor={(i) => i.title}
        sections={[{ data: [{ title: 'Chart' }] }]}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={() => (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
              paddingBottom: 8,
              backgroundColor: Colors.background,
              borderBottomColor: Colors.lightGray,
              borderBottomWidth: StyleSheet.hairlineWidth
            }}
          >
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveIndex(index)}
                style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
              >
                <Text
                  style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}
                >{item}</Text>

              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 16
              }}
            >
              <Text style={styles.subtitle}>{data?.symbol}</Text>
              {data && (
                <Image source={{ uri: data?.logo }} style={{ width: 60, height: 60 }} />
              )}
            </View>

            <View style={{ flexDirection: 'row', gap: 10, margin: 12 }} >
              <TouchableOpacity
                style={[
                  defaultStyles.pillButtonSmall,
                  { backgroundColor: Colors.primary, flexDirection: 'row', gap: 16 }
                ]}
              >
                <Ionicons name='add' size={24} color={'#fff'} />
                <Text style={[defaultStyles.buttonText]}>Buy</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  defaultStyles.pillButtonSmall,
                  { backgroundColor: Colors.primaryMuted, flexDirection: 'row', gap: 16 },
                ]}>
                <Ionicons name="arrow-back" size={24} color={Colors.primary} />
                <Text style={[defaultStyles.buttonText, { color: Colors.primary }]}>Receive</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
        renderItem={({ item }) => (
          <>
            <Chart />
            <View style={[defaultStyles.block, { marginTop: 20 }]}>
              <Text style={styles.subtitle}>Overview</Text>
              <Text style={{ color: Colors.gray }}>
                Bitcoin is a decentralized digital currency, without a central bank or single
                administrator, that can be sent from user to user on the peer-to-peer bitcoin
                network without the need for intermediaries. Transactions are verified by network
                nodes through cryptography and recorded in a public distributed ledger called a
                blockchain.
              </Text>
            </View>
          </>
        )}

      >

      </SectionList>
    </>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.gray,
  },
  categoryText: {
    fontSize: 14,
    color: Colors.gray,
  },
  categoryTextActive: {
    fontSize: 14,
    color: '#000',
  },
  categoriesBtn: {
    padding: 10,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  categoriesBtnActive: {
    padding: 10,
    paddingHorizontal: 14,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});

export default Page