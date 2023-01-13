import React, { useState, Fragment } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';

import { Focus } from './src/features/focus';
import { FocusHistory } from './src/features/focusHistory';
import { Timer } from './src/features/timer';
import { colors } from './src/utils/colors';


const App = () => {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
     {!currentSubject ? 
     <Fragment>
      <Focus addSubject={setCurrentSubject}/> 
      <FocusHistory history={history}/>
     </Fragment>
      : 
      <Timer 
      focusSubject={currentSubject}
      onTimerEnd={(subject) => setHistory([...history, subject])}
     clearSubject={() => {setCurrentSubject(null)}}
      />  
    } 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue
  },
  text: {
    color: colors.white
  }
});

export default App;
