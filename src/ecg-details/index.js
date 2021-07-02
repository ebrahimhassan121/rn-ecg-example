import React,{useRef,useEffect} from 'react'
import { View, Text, StyleSheet,Animated, } from 'react-native'
import Beat from './beat-svg'
import Header from '../components/header'
import Footer from '../components/footer'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { SharedElement } from 'react-navigation-shared-element'

export default function ECGDetails(props) {
    const animateOpacity=useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated.timing(animateOpacity,{
            toValue:1,
            delay:500,
            duration:250,
            useNativeDriver:true
        }).start()
    },[])
    return (
        <View style={styles.constainer}>
            <Header  TitleComp={()=><View style={styles.title}>
                <AntDesignIcon name='heart' color="red" size={20} />
                <Text style={styles.titleText}>66 BPM</Text>
            </View> }/>
            <SharedElement id="svg_beat">
                <Animated.View style={{transform:[{scaleY:animateOpacity.interpolate({inputRange:[0,1],outputRange:[0.2,1]})}]}}>
                  <Beat navigation={props.navigation} />
                </Animated.View>
            </SharedElement>
            
            <Footer/>
         
        </View>
    )
}
ECGDetails.sharedElements = (navigation, otherNavigation, showing) => {
    return [`svg_beat`];
  };
const styles=StyleSheet.create({
    constainer:{flex:1},
    title:{flexDirection:'row',alignItems:'center',alignSelf:'center'},
    titleText:{fontSize:18,fontWeight:'bold'}
})