import React, { Fragment } from 'react';
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from '../components/roundedButton';

export const Timing = ({ onChangeTime }) => {
    const TIMINGS = {
        TEN_MINS: 0.1,
        TWENTY_MINS: 0.2,
        THIRTY_MINS: 0.3,
    }
   return (
    <Fragment>
    <View style={styles.timingButton}>
        <RoundedButton size={75} title={TIMINGS.TEN_MINS} onPress={() => onChangeTime(TIMINGS.TEN_MINS)}/>
    </View>
    <View style={styles.timingButton}>
        <RoundedButton size={75} title={TIMINGS.TWENTY_MINS} onPress={() => onChangeTime(TIMINGS.TWENTY_MINS)}/>
    </View>
    <View style={styles.timingButton}>
        <RoundedButton size={75} title={TIMINGS.THIRTY_MINS} onPress={() => onChangeTime(TIMINGS.THIRTY_MINS)}/>
    </View>
    </Fragment>
)
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center'
    }
    
})