var React = require('react-native');  // aqui mandamos llamar el modulo de react.



// estas variables están dependiendo de la variable que contien el modulo por lo cual deben llevar este nombre de forma obligatoria
var {
  AppRegistry, 
  StyleSheet, 
  View,
  Text,
  Image,
} = React;



// aqui creamos la variable de la vista que sera en XML

var view = React.createClass({
  render: function(){
    return( 

      //vista principal
      <View style={style.container}>
        <Text style={style.text1}>texto de ejemplo</Text>
        <Image style={style.image1} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
      </View>
    );
  }
});




//el estilo es el que complementa la vista.

var style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent: 'center',   //centrado en forma horizontal
    alignItems: 'center',    // centrado en forma vertical
  },
  text1:{
    color:'#000',
    fontSize:22,
    // position:'absolute',
  },
  image1:{
    height:100,
    width:100,
    borderColor:'#000000', // no funciona en android actualmente
    borderWidth:1, // no funciona en android actualmente
    overflow:'visible',
    // position:'absolute',
  }
});




AppRegistry.registerComponent('holaMundo', () => view); 





