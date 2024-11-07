import { View, Text, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { CartesianChart, Line, useChartPressState } from "victory-native";
import { Circle, useFont } from '@shopify/react-native-skia';
import { format } from 'date-fns';
import * as Haptics from 'expo-haptics';
import { useQuery } from '@tanstack/react-query';
import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import Animated, { SharedValue, useAnimatedProps } from 'react-native-reanimated';

Animated.addWhitelistedNativeProps({text: true})
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
    return <Circle cx={x} cy={y} r={8} color={Colors.primary} />;
  }

const Page = () => {
    const font = useFont(require('@/assets/fonts/SpaceMono-Regular.ttf'))
    const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

    useEffect(()=> {
        console.log(isActive)
        if (isActive) Haptics.selectionAsync();
    }, [isActive])

    const animatedText = useAnimatedProps(() => {
        return {
            text: `${state.y.price.value.value.toFixed(2)} ₹`,
            defaultValue: '',
        }
    })

    const animatedDateText = useAnimatedProps(() => {
        const date = new Date(state.x.value.value)
        return {
            text: `${date.toLocaleDateString()}`,
            defaultValue: '',
        }
    })

    const { data: tickers } = useQuery({
        queryKey: ['tickers'],
        queryFn: async (): Promise<any[]> => fetch(`/api/tickers`).then((res) => res.json())
    })

    return (
        <View style={[defaultStyles.block, { height: 500 }]}>
            {tickers && (
                <>
                    {!isActive && (
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: Colors.dark }}>
                                {tickers[tickers.length - 1].price.toFixed(2)} ₹
                            </Text>
                            <Text style={{ fontSize: 18, color: Colors.gray }}>Today</Text>
                        </View>
                    )}
                    {isActive && (
                        <View>
                            <AnimatedTextInput
                                editable={false}
                                underlineColorAndroid={'transparent'}
                                style={{ fontSize: 30, fontWeight: 'bold', color: Colors.dark }}
                                animatedProps={animatedText}></AnimatedTextInput>
                            <AnimatedTextInput
                                editable={false}
                                underlineColorAndroid={'transparent'}
                                style={{ fontSize: 18, color: Colors.gray }}
                                animatedProps={animatedDateText}></AnimatedTextInput>
                        </View>
                    )}
                    <CartesianChart
                        chartPressState={state}
                        axisOptions={{
                            font,
                            tickCount: 5,
                            labelOffset: { x: -2, y: 0 },
                            labelColor: Colors.gray,
                            formatYLabel: (v) => `${v} ₹`,
                            formatXLabel: (ms) => format(new Date(ms), 'MM/yy'),
                        }}
                        data={tickers!}
                        xKey="timestamp"
                        yKeys={['price']}>
                        {({ points }) => (
                            <>
                                <Line points={points.price} color={Colors.primary} strokeWidth={3} />
                                {isActive && <ToolTip x={state.x.position} y={state.y.price.position} />}
                            </>
                        )}
                    </CartesianChart>
                </>
            )}
        </View>

    )
}

export default Page