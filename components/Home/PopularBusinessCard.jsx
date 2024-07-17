import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function PopularBusinessCard({business}) {
  return (
    <View
        style={{
            marginLeft: 20,
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 15
        }}
    >
      <Image 
      source={{uri: business?.imageUrl}}
        style={{
            width: 200,
            height: 130,
            borderRadius: 15
        }}
      />
      <View style={{marginTop: 8, gap: 5}}>
        <Text style={{fontSize: 16, fontFamily: 'outfit-bold'}}>{business?.name}</Text>
        <Text style={{fontSize: 13, fontFamily: 'outfit', color: Colors.GRAY}}>{business?.address}</Text>
        <View 
            style={{
                display: "flex", 
                flexDirection: "row", 
                justifyContent: "space-between"
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5
                }}
            >
                <Image 
                source={require('../../assets/images/star.png')} 
                style={{
                    width: 12,
                    height: 12
                }}
                />
                <Text style={{fontFamily: 'outfit'}}>4.5</Text>
            </View>
            <Text
                style={{
                    fontSize: 12, 
                    fontFamily: 'outfit', 
                    color: "#fff", 
                    backgroundColor: Colors.PRIMARY ,
                    padding: 5,
                    borderRadius: 5,
                    
                }}
            >
                {business.category}
            </Text>
        </View>
      </View>
    </View>
  )
}