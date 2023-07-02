import { ReactElement } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { MaskedViewAnimation } from 'src/MaskedViewAnimation'

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <MaskedViewAnimation />
    </SafeAreaProvider>
  )
}
