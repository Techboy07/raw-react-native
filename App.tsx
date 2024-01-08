import React from 'react';
// import type {PropsWithChildren} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import VideoPlayer from 'react-native-video-player';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App() {
  // const videoRef = useRef(null);
  return (
    <View style={styles.sectionContainer}>
      <Text>toluence</Text>
      {/* <VideoPlayer
        video={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
      /> */}
      <VideoPlayer
        video={{
          uri: 'https://www.youtube.com/embed/-Feev1ZK6L4',
        }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
