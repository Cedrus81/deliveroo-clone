import { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, StatusBar, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from 'react-native-heroicons/solid'

import Categories from '../components/Categories'

const HomeScreen = () => {
    const navigation = useNavigation()
    const styles = {
        svg: {
            position: 'relative', top: 3
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })

    }, [])
    return (
        <SafeAreaView className="bg-white" style={{ paddingTop: StatusBar.currentHeight }}>
            <Text>
                {/* Header */}
                <View className="flex-row w-screen pb-3 items-center mx-4 space-x-2 px-4">
                    <Image source={{ uri: 'https://links.papareact.com/wru' }} className='h-7 w-7 bg-gray-300 p-4 rounded-full' />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <View className="flex-row items-center">
                            <Text className="font-bold text-xl">Current Location</Text>
                            <ChevronDownIcon size={20} color='#00ccbb' style={styles.svg} />
                        </View>
                    </View>
                    <UserIcon size={35} color='#00ccbb' style={styles.svg} />
                </View>
                {/* Search */}
                <View className="flex-row w-screen items-center space-x-2 pb-2 mx-4 px-4">
                    <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
                        <MagnifyingGlassIcon color='gray' size={20} style={styles.svg} />
                        <TextInput placeholder="Restaurants and cuisines" keyboardType='default' />
                    </View>
                    <AdjustmentsVerticalIcon color='#00ccbb' style={styles.svg} />
                </View>
                {/* Body */}
                <ScrollView>
                    {/* Categories */}
                    <Categories />
                    {/* Featured Rows */}
                </ScrollView>
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen