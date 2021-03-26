import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center"
  },
  sub_container:{
    width:"90%",
    flex:1
  },
  header:{
    fontSize:24,
    fontFamily:'Poppins-Bold',
    lineHeight:36,
    
  },
  header_margin:{
        fontSize:24,
    fontFamily:'Poppins-Bold',
    lineHeight:36,
    marginTop:20
  },
  description:{
     fontSize:18,
    fontFamily:'Poppins-Regular',
    lineHeight:27,
   color:"#2d2d2d",
   fontWeight:"400",
   marginTop:20

  },
  description_margin:{
    fontSize:18,
    fontFamily:'Poppins-Regular',
    lineHeight:27,
   color:"#2d2d2d",
   fontWeight:"400",
   marginTop:15
  },
   buuton_login: {
    backgroundColor: '#00bd84',
    borderRadius: 5,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
 
});
