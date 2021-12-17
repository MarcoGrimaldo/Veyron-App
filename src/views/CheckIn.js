import React, { useState, useEffect }from 'react'
import ReactNativeBiometrics from 'react-native-biometrics'

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const CheckIn = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [time,setTime] = useState('');
    const daysArray = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    const [currentDay,setCurrentDay] = useState('');

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
  
  
    const biometricAuth = async () => {
  
      ReactNativeBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
    .then((resultObject) => {
      const { success } = resultObject
   
      if (success) {
        alert("Nice! You've cheked in correctly")
      } else {
        console.log('user cancelled biometric prompt')
      }
    })
    .catch(() => {
      console.log('biometrics failed')
    })
    }

    const getCurrentTime = () => {
      let hour = new Date().getHours();
      let minutes = new Date().getMinutes();
      let seconds = new Date().getSeconds();
      let am_pm = 'pm';
  
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
  
      if (seconds < 10) {
        seconds = '0' + seconds;
      }
  
      if (hour > 12) {
        hour = hour - 12;
      }
  
      if (hour == 0) {
        hour = 12;
      }
  
      if (new Date().getHours() < 12) {
        am_pm = 'am';
      }
  
      setTime( hour + ':' + minutes + ':' + seconds + ' ' + am_pm);
  
      daysArray.map((item, key) => {
        if (key == new Date().getDay()) {
          setCurrentDay(item.toUpperCase());
        }
      })
    }

    useEffect(() => {
      setInterval(() => {
        getCurrentTime();
      }, 1000);
    }, [])
  
    return (
      <>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.sViewStyle}>
            <View style={styles.dateContainer}>
              <Text style={styles.daysText}>{currentDay}</Text>
              <Text style={styles.timeText}>{time}</Text>
            </View>
            <View >
              <Text style={styles.txtStyle}>Welcome!</Text>
            </View>
            
            <View style={styles.btnStyle}>
              <Button
                onPress={biometricAuth}
                title="Checar biométrico"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              ></Button>
            </View>
            <View style={styles.pinBtn}>
              <Button
                title="Checar por PIN"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              ></Button>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    sViewStyle: {
      textAlign: 'center',
    },
    btnStyle:{
      marginLeft: 20,
      marginRight: 20
    },
    txtStyle: {
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 50,
    },
    timeText: {
      fontSize: 50,
      color: '#000'
    },
    daysText: {
      color: '#000',
      fontSize: 25,
      paddingBottom: 0
    },
    dateContainer: {
      marginLeft: '17%',
      marginTop: 20
    },
    pinBtn: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20
    }
  });
  

export default CheckIn
