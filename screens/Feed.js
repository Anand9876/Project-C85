import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { View,Text,StyleSheet, SafeAreaView, Platform,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import PostCardScreen from './PostCard';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

let customFonts={
    "Bubblegum-Sans":require('../assets/fonts/BubblegumSans-Regular.ttf')
};
let stories=require('./stories.json');
export default class FeedScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            fontsLoaded:false
        }
    }
    async _loadFontAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded:true});
    }
    componentDidMount(){
        this._loadFontAsync();
    }
    renderItem=({item:story})=>{
return <PostCardScreen story={story} navigation={this.props.navigation}/>
    }
    keyExtractor=(item,index)=> index.toString();
    render(){
        if(!this.state.fontsLoaded){
            return <AppLoading/>
        }else{
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.androidSafeArea} />
                <View style={styles.appTitle} >
                    <View style={styles.appIcon}>
                        <Image source={require('../assets/logo.png')} style={styles.iconImage}/>

                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}>Spectagram</Text>

                    </View>

                </View>
                <View style={styles.cardContainer}>
                    <FlatList keyExtractor={this.keyExtractor}
                    data={stories}
                    renderItem={this.renderItem} />

                </View>

            </View>
        )
    }
}
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'black'
},
androidSafeArea:{
    marginTop:Platform.OS==='android'?StatusBar.currentHeight:RFValue(35)
},
appTitle:{
    flex:0.07,
    flexDirection:'row'
},
appIcon:{
    flex:0.2,
    justifyContent:'center',
    alignItems:'center'
},
iconImage:{
    width:'100%',
    height:'100%',
    resizeMode:'contain'
},
appTitleTextContainer:{
    flex:0.8,
    justifyContent:'center',
},
appTitleText:{
    color:'white',
    fontSize:RFValue(28),
    marginBottom:50
},
cardContainer:{
    flex:0.85
}

})