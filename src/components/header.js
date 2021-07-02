import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
export default function Header({TitleComp}) {
    return (
        <View style={styles.header}>
        <View style={{}}>
            <IoniconsIcon name="bluetooth" size={25} />
        </View>
            {TitleComp?<TitleComp/>:<Text>W ICON</Text>}
        <View style={{}}>
            <IoniconsIcon name="notifications-outline" size={25} />
        </View>
        </View>
    
    )
}

const styles=StyleSheet.create({
    header:{
        height:70,
        width:Dimensions.get('window').width,
        padding:8,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    }
})