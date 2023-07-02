import { ReactElement } from 'react'
import { Image, Linking, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

import { images, PANEL_HEIGHT } from 'src/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  image: {
    ...StyleSheet.absoluteFillObject
  },
  textContainer: {
    marginHorizontal: 18,
    marginBottom: PANEL_HEIGHT + 24
  },
  name: {
    fontSize: 48,
    fontWeight: '500',
    letterSpacing: 0.7
  },
  url: {
    fontSize: 16,
    marginLeft: 29
  }
})

type Props = {
  activeImage: number
  onLoadEnd?: () => void
}

export const Background = ({ activeImage, onLoadEnd }: Props): ReactElement => {
  const { width, height } = useWindowDimensions()
  const image = images[activeImage]
  const { source, author, url, color } = image

  const onOpenUrl = () => {
    Linking.openURL(url)
  }

  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={source}
        style={[styles.image, { width, height }]}
        onLoadEnd={onLoadEnd}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.name, { color }]}>{author}</Text>
        <Text style={[styles.url, { color }]} onPress={onOpenUrl}>
          {url}
        </Text>
      </View>
    </View>
  )
}
