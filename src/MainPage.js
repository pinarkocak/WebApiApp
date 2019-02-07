import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';

class MainPage extends Component{
    render() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                 resizeMode='cover'
                source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/10/0b/63/100b63c4e4d320d5befd96e6447b995d.png'}}
               // blurRadius={0.50}
            />
            <TouchableOpacity style={styles.buttonContainer}>
             <Text
               style={styles.buttonText} 
                onPress={()=>Actions.people()}>
               Characters
             </Text>
            </TouchableOpacity>
             <TouchableOpacity style={styles.buttonContainer}>
             <Text
               style={styles.buttonText} 
                onPress={()=>Actions.planets()}>
               Planets
             </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
             <Text
               style={styles.buttonText} 
                onPress={()=>Actions.vehicles()}>
               Vehicles
             </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
             <Text
               style={styles.buttonText} 
                onPress={()=>Actions.starships()}>
               Starships
             </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
             <Text
               style={styles.buttonText} 
                onPress={()=>Actions.films()}>
               Films
             </Text>
            </TouchableOpacity>
        </View>
    );
};
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#000000', 
    },

     buttonContainer: {
        marginTop:5,
        backgroundColor:'#FFFFFF',
        paddingVertical: 15,
        height: 10,
        width: 350,
        justifyContent: 'center'
    },

     buttonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: '800'
    },
    img : {
        width:400,
        height:400
    }
});

export default MainPage;