import React from 'react';
// import type {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App() {
  // const videoRef = useRef(null);
  return (
    <View style={styles.sectionContainer}>
      <WebView
        source={{uri: 'https://vidsrc.xyz/embed/tv?tmdb=246'}}
        style={styles.webView}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },

  sectionContainer: {
    flex: 1,
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
