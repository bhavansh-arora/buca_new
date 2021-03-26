import React,{useState} from 'react';
import {
 SafeAreaView,
 StatusBar,
 Text,
 View,
 TouchableOpacity,
 TextInput,
 ScrollView
} from 'react-native';

import styles from './style';
import Loader from '../../components/Loader';

function Credentials({navigation}) {
    const [email, setemail] = useState('');
        const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');

      const [email_focused, setemailfocus] = useState(false);
      const [fname_focused, setfnamefocus] = useState(false);
      const [lname_focused, setlnamefocus] = useState(false);

      const [email_error, setemailerror] = useState(false);
      const [fname_error, setfnameerror] = useState(false);
      const [lname_error, setlnameerror] = useState(false);

            const [loading, setLoading] = useState(false);


  const onemailFocus = () => {
    setemailfocus(true);
    setfnamefocus(false);
    setlnamefocus(false);
  };
  const onfnameFocus = () => {
 setemailfocus(false);
    setfnamefocus(true);
    setlnamefocus(false);  };
  const onlnameFocus = () => {
     setemailfocus(false);
    setfnamefocus(false);
    setlnamefocus(true);
  };

  
   const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    }
    else {
      return true;
    }
  }
 const check_fname = () => {
  if(fname.length>=1){
    setfnameerror(false)
  return true;
  }
  else{
    setfnameerror(true)
  return false;
  
}
  }
   const check_lname = () => {
     if(check_fname()){

     
  if(lname.length>=1){
    setlnameerror(false)
  return true;
  }
  else{
    setlnameerror(true)
  return false;
  
}
  }
}
   const checkEmail = () => {
     if(check_lname()){

if(validate(email)){
    setemailerror(false)

  return true;
}
else{
    setemailerror(true)

  return false;
}
 }
}
  const make_api_call = () => {
    if(checkEmail()){
      console.log("Everything correct")
      setLoading(true)
      const requestOptions = {
        method: 'POST',
        headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstname:fname,
    lastname:lname,
    emailadd:email,
  })
    };
      fetch('http://92.205.21.246:9000/users',requestOptions) 
 
   .then((response) => {
     if(response.status==200){
setLoading(false)
navigation.navigate("Thanks")
     }
     else{
setLoading(false)
alert("OOPS! Some error occured.Please try again after some time")
     }
   })
   .catch((error) => {
                console.log(error);
setLoading(false)
alert("OOPS! Some error occured.Please try again after some time")
            })

    }

  }
  return (
    <SafeAreaView style={styles.container}>
 <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#ffffff"
        translucent={false}
      />
            <Loader loading={loading} />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.sub_container}>
<Text style={styles.header_margin}>Enter your details</Text>


  <View style={{flexDirection:"row",flex:1,alignItems:"center",justifyContent:"space-between"}}>
          <Text style={styles.password_label}>First Name</Text>
  <Text style={styles.errorLabel}>{fname_error  ? "*Enter your first name" : null}
  
  </Text>

          </View>
           <TextInput
            autoCapitalize="none"
            placeholder="Enter your first name"
            style=
             {
fname_error
?styles.password_input_error
:(  fname_focused
                ? styles.password_input_focused
                : styles.password_input_style)

              
            }
            onChangeText={(val) => setfname(val)}
            onFocus={() => onfnameFocus()}
          />
           <View style={{flexDirection:"row",flex:1,alignItems:"center",justifyContent:"space-between"}}>
          <Text style={styles.password_label}>Last Name</Text>
  <Text style={styles.errorLabel}>{lname_error  ? "*Enter your last name" : null}
  
  </Text>

          </View>
           <TextInput
            autoCapitalize="none"
            placeholder="Enter your last name"
            style=
             {
lname_error
?styles.password_input_error
:(  lname_focused
                ? styles.password_input_focused
                : styles.password_input_style)

              
            }
            onChangeText={(val) => setlname(val)}
            onFocus={() => onlnameFocus()}
          />
               
              <View style={{flexDirection:"row",flex:1,alignItems:"center",justifyContent:"space-between"}}>
          <Text style={styles.password_label}>Email Address</Text>
  <Text style={styles.errorLabel}>{email_error  ? "*Enter a valid email" : null}
  
  </Text>

          </View>
  <TextInput
            autoCapitalize="none"
            placeholder="Enter your email"
            style=
             {
(email_error)
?styles.password_input_error
:(  email_focused
                ? styles.password_input_focused
                : styles.password_input_style)

              
            }
            onChangeText={(val) => setemail(val)}
            onFocus={() => onemailFocus()}
          />
          <Text style={styles.description_margin}>By entering your details, you’re agreeing to our Terms of service and Privacy Policy. Thanks!</Text>
 
 
      </ScrollView>
          <TouchableOpacity
            onPress={() => make_api_call()}
            style={styles.touchable_login}>
            <View style={styles.buuton_login}>
              <Text style={styles.button_text}>Next</Text>
            </View>
          </TouchableOpacity>

     
    </SafeAreaView>

  )
}

export default Credentials


