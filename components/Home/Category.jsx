import { View, Text, FlatList } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Colors } from '@/constants/Colors'
import {query, collection, getDocs} from 'firebase/firestore'
import { db } from '../../configs/FirebaseConfig'
import CategoryItem from './CategoryItem'


export default function Category() {

    const [categoryList, setCategoryList] = useState([])

    const getCategoryList = async () => {
        setCategoryList([])
        const q = query(collection(db, 'Category'))
        const querySnapshot = await getDocs(q)

        querySnapshot.docs.forEach((doc) => {
            setCategoryList(prev => [...prev, doc.data()])
         })
    }

    useEffect(() => {
        getCategoryList()
    },[])

  return (
    <View>
        <View 
            style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 20
            }} 
        >
            <Text
                style={{ 
                    fontSize: 20,
                    fontFamily: 'outfit-bold',
                }}
            >
                Category
                
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
            data={categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <CategoryItem 
                category={item} 
                key={index} 
                onCategoryPress={(item) => console.log(item)}
                />
            )}
        />
    </View>
  )
}