import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import ECG from './ecg';
import ECGDetails from './ecg-details';
import { createAppContainer } from 'react-navigation';


const stackNavigator = createSharedElementStackNavigator(
    {
      ECG:{
          screen:ECG,
          navigationOptions:{
              header:null
          }
      },
      ECGDetails:{
        screen:ECGDetails,
        navigationOptions:{
            header:null,
        }
      }
    },
    {
      initialRouteName: 'ECG',
      mode:'modal'
    }
  );
  
const AppContainer = createAppContainer(stackNavigator);
export default AppContainer