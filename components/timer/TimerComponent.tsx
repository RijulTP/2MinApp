import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View } from '../Themed';
import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import ConfettiCannon from 'react-native-confetti-cannon';
const TimerComponent = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState<number | undefined>();
  
    const toggleTimer = () => {
      if (isRunning) {
        clearInterval(intervalId);
        setIntervalId(undefined);
      } else {
        const id = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        setIntervalId(id);
      }
      setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(undefined);
        }
        setIsRunning(false);
        setSeconds(0);
      };
    const motivationalText = () => {
      const minute = Math.floor(seconds / 60);
      if (minute < 1) {
        return "You can do this!";
      } else if (minute < 2) {
        return "Keep going!";
      } else {
        return "Congratulations!";
      }
    }
  
    const formattedTime = () => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.timerText}>{formattedTime()}</Text>
        <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.timerButton} onPress={toggleTimer}>
                <Text style={styles.buttonText}>
                    {isRunning ? 'Stop Timer' : 'Start Timer'}
                </Text>
            </TouchableOpacity>
            <Text>    </Text>
            <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
                <Text style={styles.buttonText}>Reset Timer</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.motivationalText}>{motivationalText()}</Text>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    timerText: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#FFF',
      textShadowColor: '#ccc',
      textShadowOffset: {width: 2, height: 2},
      textShadowRadius: 100,
      marginBottom: 20,
    },
    motivationalText: {
      fontSize: 24,
      color: '#333',
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#f8f8f8',
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
      marginTop:50,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    timerButton: {
      backgroundColor: '#4CAF50',
      padding: 12,
      borderRadius: 5,
      marginRight: 10,
    },
    resetButton: {
      backgroundColor: '#f44336',
      padding: 12,
      borderRadius: 5,
    },
    buttonText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  
  export default TimerComponent;