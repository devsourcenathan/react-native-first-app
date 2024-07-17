
import { View, Text, FlatList } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Colors } from '@/constants/Colors'
import {query, collection, getDocs, limit} from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import PopularBusinessCard from './PopularBusinessCard'

export default function PopularBusiness() {

    const [businessList, setBusinessList] = useState([])

    const getBusinessList = async () => {
        setBusinessList([])
        const q = query(collection(db, 'BusinessList'), limit(10))
        const querySnapshot = await getDocs(q)

        querySnapshot.docs.forEach((doc) => {
            setBusinessList(prev => [...prev, doc.data()])
         })
    }

    useEffect(() => {
        getBusinessList()
    },[])

  return (
    <View>
      <View 
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 15, 
            }} 
        >
            <Text
                style={{ 
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                }}
            >
                Popular Business
                
            </Text>
            <Text
                style={{
                    color: Colors.PRIMARY,
                    fontFamily: 'outfit-medium',
                }}
            >
                View All
            </Text>
        </View>

        <FlatList 
            data={businessList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <PopularBusinessCard business={item} key={index} />
            )}
        />
    </View>
  )
}