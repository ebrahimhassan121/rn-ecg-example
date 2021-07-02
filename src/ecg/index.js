import React from 'react'
import { View,  StyleSheet, } from 'react-native'
import SvgBeat from './beat-svg'
import Header from '../components/header'
import HeartRate from './heart-rate'
import Footer from '../components/footer'
import {SharedElement} from 'react-navigation-shared-element'

export default function ECG(props) {

    return (
        <View style={styles.constainer}>
            <Header/>
            <HeartRate/>
            <SharedElement id="svg_beat">
            <SvgBeat navigation={props.navigation} titles={["L1","L2","L3","aVR","aVL","aVF"]} />
            </SharedElement>
            <Footer/>
         
        </View>
    )
}
const styles=StyleSheet.create({
    constainer:{flex:1},
})