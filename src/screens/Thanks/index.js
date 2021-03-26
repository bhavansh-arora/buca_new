import React from 'react';
import {
 SafeAreaView,
 StatusBar,
 Text,
 View,
 Image,
 TouchableOpacity,
 ScrollView
} from 'react-native';

import styles from './style';
import {Images} from '../../utils';


function Thanks() {
  return (
    <SafeAreaView style={styles.container}>
 <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.sub_container}>
<Text style={styles.header_margin}>Thank You!</Text>
   
     <Text style={styles.description}>We’ll text you as soon as your digital business card is ready.








</Text>
<Text style={styles.description_margin}>To learn more about buca you can check our social media accounts.</Text>
<Text style={styles.description_margin}>See you very soon!
</Text>

  
               
                 <Image
              style={{height: 204, width: 265,alignSelf:"center",marginTop:20}}
              source={Images.Digitalize}
            />

      </ScrollView>

     
    </SafeAreaView>

  )
}

export default Thanks


