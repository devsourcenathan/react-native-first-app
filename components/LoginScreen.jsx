import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import * as WebBrowser from "expo-web-browser";
import {useWarmUpBrowser} from '@/hooks/useWarmUpBrowser'
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const {startOAuthFlow} = useOAuth({strategy: 'oauth_google'});

  const onPress = React.useCallback(async () => {
    try {
      const {createdSessionId, signIn, signUp, setActive} = await startOAuthFlow();

      if(createdSessionId){
        setActive({session: createdSessionId})
      }else{

      }
    } catch (error) {
      console.log("OAuth error", error);
    }
  })
  return (
    <View>
      <View style={{display: "flex",  alignItems: 'center', marginTop: 100}}>
        <Image 
          source={require('../assets/images/login.png')} 
          style={{
            width: 220, 
            height: 450,
            borderRadius: 20,
            borderWidth: 6,
            borderColor: 'black'
          }}
        />
      </View>

      <View style={styles.subConainer}> 
          <Text style={{fontSize: 30, fontFamily: 'outfit-bold', textAlign: 'center'}}>
            Your Ultimate

            <Text style={{color: Colors.PRIMARY}}> Comunity Business Directory</Text> App
          </Text>

          <Text 
          style={{
            fontFamily: 'outfit',
            fontSize: 15,
            textAlign: 'center',
            marginVertical: 15,
            color: Colors.GRAY
          }}>
            Find your favorite business near your and post your own business to your community
            </Text>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={{textAlign: 'center', color: '#fff', fontFamily: 'outfit'}}>Let's Get Started</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  subConainer: {
    backgroundColor: "#fff", 
    padding: 20,
    marginTop: -20
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    borderRadius: 99,
    marginTop: 20
  }
})