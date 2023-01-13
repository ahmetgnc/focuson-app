import React, { useState } from "react";
import { View, StyleSheet, Text, Vibration } from 'react-native';
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/countDown";
import { RoundedButton } from "../components/roundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { Timing } from "./timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS
];

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(1);
    
    const onHandleStart = () => {
        setIsStarted(true);
    }

    const onHandlePause = () => {
        setIsStarted(false);
    }

    const onCountDownEnd = (reset) => {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
    }
    
    return (
    <View style={styles.container}>
       <View style={styles.countDown}>
        <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onCountDownEnd}/>
        <View style={styles.subjectInfoWrapper}>
            <Text style={styles.title}>Focusing on:</Text>
            <Text style={styles.task}>{focusSubject}</Text>
        </View>
       </View> 
       <View style={styles.progressBarWrapper}>
        <ProgressBar 
            color={colors.progressBar}
            style= {styles.progressBar}
            progress={progress}
        />
       </View>
       <View style={styles.buttonWrapper}>
            <Timing onChangeTime={setMinutes} />
        </View>
        <View style={styles.buttonWrapper}>
       {isStarted  ? <RoundedButton title='pause' onPress={onHandlePause}/> : <RoundedButton title='start' onPress={onHandleStart}/>} 
        </View>
        <View style={styles.clearSubjectWrapper}>
        <RoundedButton title='-' size={50} onPress={clearSubject}/> 
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    countDown: {
       flex: 0.5,
       alignItems: 'center',
       justifyContent: 'center',
    },
    timingWrapper: {
        flex: 0.1,
        flexDirection: 'row',
        paddingTop: spacing.xxl,
    },  
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subjectInfoWrapper: {
        paddingTop: spacing.xxl
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    task: {
        color: colors.white,
        textAlign: "center",
    },
    progressBarWrapper: {
        paddingTop: spacing.sm,
        paddingHorizontal: spacing.sm,
    },
    progressBar: {
        height: spacing.sm,
    },
    clearSubjectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})