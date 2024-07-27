/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {Canvas, Circle, Group} from '@shopify/react-native-skia';

function App(): React.JSX.Element {
  const [width, setWidth] = useState(256);
  const height = 256;
  const r = width * 0.33;

  useEffect(() => {
    const int = setInterval(() => {
      // setWidth(prev => (prev === 256 ? 128 : 256));
    }, 500);
    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <Canvas
      // nativeID="my-native-id"
      style={{width, height, backgroundColor: '#ff000044'}}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
}

export default App;
