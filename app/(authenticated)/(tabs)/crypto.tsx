import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Currency } from '@/interfaces/crypto';

const Page = () => {
  const currencies = useQuery({
    queryKey: ['currencies'],
    queryFn: () => fetch('/api/listings').then((res) => res.json())
  });
  
  return (
    <View>
      {
        currencies.data?.map((currency: Currency) => (
          <Text key={currency.id}>{currency.name}</Text>
        ))
      }
    </View>
  )
}

export default Page