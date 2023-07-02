import { ImageRequireSource } from 'react-native'

type Image = {
  id: string
  source: ImageRequireSource
  author: string
  url: string
  color: string
}

export const images: Image[] = [
  {
    id: '1',
    source: require('../../assets/images/joel-severino.jpg'),
    author: 'Joel Severino',
    url: 'https://unsplash.com/@joellseverino',
    color: 'black'
  },
  {
    id: '2',
    source: require('../../assets/images/matthew-woinarowicz.jpg'),
    author: 'Matthew Woinarowicz',
    url: 'https://unsplash.com/es/@mattxfotographs',
    color: 'white'
  },
  {
    id: '3',
    source: require('../../assets/images/jusfilm.jpg'),
    author: 'Julia Vivcharik',
    url: 'https://unsplash.com/de/@jusfilm',
    color: 'black'
  },
  {
    id: '4',
    source: require('../../assets/images/ahmed.jpg'),
    author: 'Ahmed',
    url: 'https://unsplash.com/@mutecevvil',
    color: 'white'
  }
]
