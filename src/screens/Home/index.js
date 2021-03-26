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


function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
 <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.sub_container}>
<Text style={styles.header_margin}>Hello,</Text>
     <Text style={styles.header}>Welcome to buca!</Text>
     <Text style={styles.description}>We’re working hard to get buca 
ready for launch! While we wrap 
up the finishing touches, consider 
registering for your new digital 
business card.




</Text>
<Text style={styles.description_margin}>We are so grateful you’re here and
can’t wait to see you using your 
new buca.</Text>
<Text style={styles.description_margin}>See you very soon!
</Text>
<Text style={styles.description_margin}>Buca Team</Text>
  
               
                 <Image
              style={{height: 211, width: 169,top:-60,alignSelf:"flex-end"}}
              source={Images.Illus}
            />
<TouchableOpacity
           onPress={()=>{navigation.navigate("Credentials")}}
            style={styles.touchable_login}>
            <View style={styles.buuton_login}>
              <Text style={styles.button_text}>Register</Text>
            </View>
          </TouchableOpacity>
      </ScrollView>

     
    </SafeAreaView>

  )
}

export default Home


