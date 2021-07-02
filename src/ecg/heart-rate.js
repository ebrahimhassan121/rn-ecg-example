import React,{useRef,useEffect} from 'react'
import { View, Text ,Animated} from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'


const AntDesignIconAnimated=Animated.createAnimatedComponent(AntDesignIcon)

export default function HeartRate() {

    const heartAnimatedValue=useRef(new Animated.Value(1)).current;
    useEffect(()=>{
        Animated.loop(
            Animated.spring(heartAnimatedValue,{
                toValue:0.85,
                useNativeDriver:true,
                bounciness:1
            })
        ).start()
       
    },[])

    return (
        <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',paddingTop:50}}>
        <AntDesignIconAnimated style={[
           { transform:[{scale:heartAnimatedValue}]}
        ]} name="heart" color="red" size={40} />
        <Text style={{fontSize:50,marginHorizontal:8,fontWeight:'500'}}>65</Text>
        <Text style={{fontSize:12,alignSelf:'flex-start',fontWeight:'bold'}}>BPM</Text>
    </View>
   
    )
}
