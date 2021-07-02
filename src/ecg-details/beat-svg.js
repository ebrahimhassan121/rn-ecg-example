
  import React from 'react';
  import { View, ScrollView, Dimensions,Text, TouchableOpacity } from 'react-native';
  import Enypo from 'react-native-vector-icons/Entypo'
  import SvgBeat from '../components/beat';

  
  export default class Beat extends React.Component {
    render() {
  
      return (
        <View
          style={[{marginTop:16}
          ]}
        >
          <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{  }} horizontal style={{ maxHeight:Dimensions.get('window').height*0.9}}   >
            <ScrollView contentContainerStyle={{paddingBottom:200,}}>
              {["L1","L2","L3","aVR","aVL","aVF"].map(e=>(
                                <SvgBeat title={e} /> 

              ))}
            </ScrollView>
          </ScrollView>
          <TouchableOpacity onPress={()=>{
              this.props.navigation.navigate("ECG")
          }}
          style={{position:'absolute',top:10,right:10,backgroundColor:"#ccc",padding:2,borderRadius:2}}
                ><Enypo name="resize-full-screen" size={20} /></TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'flex-end',margin:8}}>
              {[{text:"Lead 1",active:true},{text:"Lead 2",active:false},{text:"Lead 3",active:false}].map(e=>(
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontWeight:"500",fontSize:18,color:e.active?"black":"#ccc",marginHorizontal:8}}>{e.text}</Text>
                  <View style={{width:4,height:4,borderRadius:4,backgroundColor:e.active?"green":undefined}} />
              </TouchableOpacity>))}
              </View>
        </View>
      );
    }
  }
  