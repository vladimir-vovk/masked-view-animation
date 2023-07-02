import MaskedView from '@react-native-masked-view/masked-view'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

import { Background } from 'src/Background'
import { images } from 'src/constants'
import { Panel } from 'src/Panel'

const styles = StyleSheet.create({
  maskContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mask: {
    backgroundColor: 'black'
  }
})

export const MaskedViewAnimation = (): ReactElement => {
  const [isFgReady, setFgReady] = useState(false)
  const [bgImage, setBgImage] = useState(images.length - 1)
  const [fgImage, setFgImage] = useState(0)

  const isComplete = useRef(true)

  const progress = useSharedValue(0)
  const { height } = useWindowDimensions()

  const setComplete = () => {
    isComplete.current = true
  }

  useEffect(() => {
    if (isFgReady) {
      progress.value = withTiming(2, { duration: 1000 }, () => {
        runOnJS(setBgImage)(fgImage)
        runOnJS(setComplete)()
      })
    }
  }, [isFgReady, fgImage, progress])

  const rStyle = useAnimatedStyle(() => ({
    transform: [{ scale: progress.value }]
  }))

  const onChangeImage = (index: number) => {
    if (!isComplete.current || index === fgImage) {
      return
    }

    progress.value = 0
    setTimeout(() => {
      isComplete.current = false
      setFgReady(false)
      setFgImage(index)
    }, 0)
  }

  const onFgReady = () => {
    setFgReady(true)
  }

  return (
    <>
      <Background activeImage={bgImage} />

      <MaskedView
        // @ts-ignore
        style={StyleSheet.absoluteFill}
        maskElement={
          <View style={styles.maskContainer}>
            <Animated.View
              style={[
                styles.mask,
                {
                  position: 'absolute',
                  width: height,
                  height,
                  borderRadius: height / 2
                },
                rStyle
              ]}
            />
          </View>
        }
      >
        <Background activeImage={fgImage} onLoadEnd={onFgReady} />
      </MaskedView>

      <Panel onChange={onChangeImage} />
    </>
  )
}
