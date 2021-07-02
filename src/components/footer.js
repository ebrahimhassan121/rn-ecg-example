import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
export default function Footer() {
    return (
        <View style={styles.footerContainer}>
            <View style={styles.tab}>
                <AntDesignIcon name="hearto" color="lightgreen" size={30} />
                <Text style={[styles.tabText,styles.tabTextActive]}>Live</Text>
            </View>
            <View style={styles.tab}>
                <AntDesignIcon name="calendar" color="#ccc" size={30} />
                <Text style={styles.tabText}>History</Text>
            </View>
            <View style={{width:70,height:70,borderRadius:50,backgroundColor:"lightgreen",top:-16,justifyContent:'center',alignItems:'center'}}>
                <FeatherIcon name="activity" color="#fff" size={40} />
            </View>
            <View style={styles.tab}>
                <AntDesignIcon name="medicinebox" color="#ccc" size={30} />
                <Text style={styles.tabText}>Medical</Text>
            </View>
            <View style={styles.tab}>
                <AntDesignIcon name="user" color="#ccc" size={30} />
                <Text style={styles.tabText}>Account</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    footerContainer:{
        position:'absolute',
        left:0,right:0,bottom:0,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:"#f4f4f4",
        paddingTop:4
    },
    tab:{
    flex:1,
    alignItems:'center',
    },
    tabText:{
        fontSize:14,
        fontWeight:'600',
        paddingVertical:4,
        color:"#ccc"
    },
    tabTextActive:{
        color:"black"
    }
})