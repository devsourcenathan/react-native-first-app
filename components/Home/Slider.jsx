import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../configs/FirebaseConfig'
import {query, collection, getDocs} from 'firebase/firestore'
export default function Slider() {  

    const [sliderList, setSliderList] = useState([])
    const getSliderList = async () => {
        setSliderList([])
        const q = query(collection(db, 'Slider'))
        const querySnapshot = await getDocs(q)

        querySnapshot.docs.forEach((doc) => {
            setSliderList(prev => [...prev, doc.data()])
        })
    }

    useEffect(() => {
        getSliderList()
    },[])
  return (
    <View>
      <Text 
        style={{
            fontFamily: 'outfit-bold',
            fontSize: 20,
            paddingLeft: 20,
            paddingTop: 20,
            paddingBottom: 5,

         }}
      >
        #Special for you
      </Text>


      <FlatList 
        data={sliderList}
        horizontal
        style={{paddingLeft: 20}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <Image 
                source={{uri: item.imageUrl}}
                style={{
                    width: 300,
                    height: 150,
                    borderRadius: 15,
                    marginRight: 15
                }}
            />
        )}
      />
    </View>
  )
}