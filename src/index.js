import React from 'react';
import { Text, View } from 'react-native';
import './config/ReactotronConfig';

console.tron.warn('da bom assim eu acho');
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20 }}>ta rapidoe</Text>
    </View>
  );
};

export default App;
