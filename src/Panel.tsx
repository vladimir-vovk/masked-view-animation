import { ReactElement } from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'

import { images, PANEL_HEIGHT } from 'src/constants'

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonImage: {
    borderRadius: 8
  }
})

type Props = {
  onChange: (index: number) => void
}

export const Panel = ({ onChange }: Props): ReactElement => {
  const buttonSize = PANEL_HEIGHT - 38

  const onPress = (index: number) => {
    onChange(index)
  }

  return (
    <View style={[styles.panel, { height: PANEL_HEIGHT }]}>
      {images.map((image, index) => (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onPress(index)} key={image.id}>
          <Image
            resizeMode="cover"
            source={image.source}
            style={[styles.buttonImage, { width: buttonSize, height: buttonSize }]}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}
