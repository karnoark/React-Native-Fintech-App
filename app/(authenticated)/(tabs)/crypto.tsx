import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Currency } from '@/interfaces/crypto';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements'
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Page = () => {
  const headerHeight = useHeaderHeight();
  //to fetch the currency data
  const currencies = useQuery({
    queryKey: ['currencies'],
    queryFn: () => fetch('/api/listings').then((res) => res.json())
  });

  // to fetch the images of each currency
  const ids = currencies.data?.map((currency: Currency) => currency.id).join(',');
  console.log("---ids---: ", ids)


  const { data } = useQuery({
    queryKey: ['info', ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids //this query is only enabled if ids is actually truthy, so that this query should only be called once we got the ids
  })

  //debugging image source null warning
  // const imgSources = [...Object.values(data).map(crypto => (crypto as {logo: string}).logo)]
  // console.log("imgSources ----: ", imgSources)

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{ paddingTop: headerHeight }}
    >
      <Text style={defaultStyles.sectionHeader}>Latest Crypto</Text>
      <View style={defaultStyles.block}>
        {
          currencies.data?.map((currency: Currency) => (
            <Link href={{ pathname: `/(authenticated)crypto[id]`, params: { id: currency.id } }} key={currency.id} asChild>
              <TouchableOpacity style={{ flexDirection: 'row', gap: 24, alignItems: 'center' }}>
                  <Image source={{ uri: data?.[currency.id]?.logo }} style={{ width: 32, height: 32 }} />
                <View style={{ flex: 1, gap: 6}} >
                  <Text style={{ fontWeight: '600', color: Colors.dark }}>{currency.name}</Text>
                  <Text style={{ color: Colors.gray }}>{currency.symbol}</Text>
                </View>
                <View style={{ gap: 6, alignItems: 'flex-end' }}>
                  <Text> {currency.quote.INR.price.toFixed(2)} ₹</Text>
                  <View style={{flexDirection: 'row', gap: 4}}>
                    <Ionicons
                    name={currency.quote.INR.percent_change_1h > 0 ? 'caret-up' : 'caret-down'}
                    size={16}
                    color={currency.quote.INR.percent_change_1h > 0 ? 'green' : 'red'}
                    />
                    <Text
                    style={{ color: currency.quote.INR.percent_change_1h > 0 ? 'green' : 'red' }}>
                    {currency.quote.INR.percent_change_1h.toFixed(2)} %
                  </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Link>
          ))
        }
      </View>
    </ScrollView>
  )
}

export default Page