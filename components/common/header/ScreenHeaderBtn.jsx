import React from 'react'

import styles from './screenheader.style'
import { Image, TouchableOpacity } from 'react-native'

const ScreenHeaderBtn = ({iconUrl, handlePress}) => {
  return (
    <TouchableOpacity>
      <Image source={iconUrl} resizeMode='cover' className="w-9 h-9 rounded-lg" />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn