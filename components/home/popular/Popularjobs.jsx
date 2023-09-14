import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './popularjobs.style'
import { useRouter } from 'expo-router'

const Popularjobs = () => {
  const router = useRouter();
  return (
    <View className = "mt-6">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl text-[#312651]">Popular Jobs</Text>
        <TouchableOpacity>
          <Text className="text-base text-[#83829A]">Show All</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Popularjobs