var React = require('react-native');  // aqui mandamos llamar el modulo de react.



// estas variables están dependiendo de la variable que contien el modulo por lo cual deben llevar este nombre de forma obligatoria
var {
  AppRegistry, 
  StyleSheet, 
  View,
} = React;



// aqui creamos la variable de la vista que sera en XML

var view = React.createClass({
  render: function(){
    return( 

      //vista principal
      <View style={style.container}>
      </View>
    );
  }
});




//el estilo es el que complementa la vista.

var style = StyleSheet.create({
  container:{
    flex:1,  // 1=indica si es flexible y ocupara el tamaño disponible de la pantalla;    0=indica que no es flexible y solo ocupara el tamaño de los elementos que contiene el view
    backgroundColor:'red',    // color de fondo
  }
});




AppRegistry.registerComponent('holaMundo', () => view); 



