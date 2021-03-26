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
    fontSize:13,
    fontFamily:'Poppins-Regular',
    lineHeight:19.5,
   color:"#2d2d2d",
   fontWeight:"400",
   marginTop:15,
   
  },
   buuton_login: {
    backgroundColor: '#00bd84',
    borderRadius: 5,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
        fontFamily:'Poppins-Regular',
        width:"100%"

  },
  button_text: {
    color: '#fff',
    fontSize: 17,
fontWeight:"bold"

  },
  touchable_login: {
    width:"90%",
    justifyContent:"center"
  },
     password_input_style: {
    borderWidth: 2,
    borderColor: '#BDBDBD',
    height: 42,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    
  },
  password_input_focused: {
    borderWidth: 2,
    borderColor: '#00BD84',
    height: 42,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
  },
     password_input_error: {
    borderWidth: 2,
    borderColor: '#ff0000',
    height: 42,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 7,
    fontSize: 14,
  },
    password_label: {
    marginTop: '5%',
    fontSize: 17,
    color: '#2d2d2d',
     fontFamily:'Poppins-Regular',
  },
  errorLabel:{
    marginTop: '5%',
    fontSize: 17,
    color: '#ff0000',
     fontFamily:'Poppins-Regular',
  },
 
});
