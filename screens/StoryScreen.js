import React,{Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,Image,ScrollView,Platform,StatusBar,TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import PostCardScreen from './PostCard';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
let customFonts={
  "Bubblegum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")
};
let stories=require("./stories.json")
export default class StoryScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      fontsLoaded:false,
    }
  }
  async _loadFontsAsync(){
    await Font.loadAsync(customFonts);
    this.setState({fontsLoaded:true});
  }
  componentDidMount(){
    this._loadFontsAsync();
  }
  render(){
    if(!this.props.route.params){
      this.props.navigation.navigate("Home");
    }else if(!this.state.fontsLoaded){
return <AppLoading/>;
    }else{
      return(
        <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea}/>
        <View style={styles.appTitle}>
        <View style={styles.appIcon}>
        <Image source={require("../assets/logo.png")} style={styles.iconImage}/>
        </View>
        <View style={styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}>Spectagram</Text>

        </View>
        </View>
        <View style={styles.storyContainer}>
        <ScrollView style={styles.storyCard}>
        <Image source={require("../assets/image_1.jpg")} style={styles.image} />
        <View style={styles.dataContainer}>
        <View style={styles.titleTextContainer}>
        <Text style={styles.storyTitleText}>{this.props.route.params.story.title}</Text>
        <Text style={styles.storyAuthorText}>{this.props.route.params.story.author}</Text>
        <Text style={styles.storyAuthorText}>{this.props.route.params.story.created_on}</Text>
        </View>
        <View style={styles.storyTextContainer}>
        <Text style={styles.storyText}>{this.props.route.params.story.story}</Text>
        <Text style={styles.moralText}>Moral-{this.props.route.params.story.moral}</Text>
        </View>
        <View style={styles.actionContainer}>
        <View style={styles.likeButton}>
        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
        <Text style={styles.likeText}>12k</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.textButton} onPress={()=>this.props.navigation.navigate("Home")}>
        <Text style={styles.text}> Get back to Home</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
        </View>
      )
    }
    
  }
}
const styles=StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  androidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  storyContainer: {
    flex: 1
  },
  storyCard: {
    margin: RFValue(20),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  image: {
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: "contain"
  },
  dataContainer: {
    flexDirection: "column",
    padding: RFValue(20)
  },
  titleTextContainer: {
    flex: 0.8
  },
  storyTitleText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    color: "white"
  },
  storyAuthorText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(20),
    color: "white",
    flexDirection:'column'
  },
  storyTextContainer: {
    padding: RFValue(20),
    flexDirection:"row"
  },
  storyText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(15),
    color: "white"
  },
  moralText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(20),
    color: "white"
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    flexDirection: "row",
    backgroundColor: "#eb3948",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
  textButton:{
     width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    backgroundColor: "#1db954",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    marginLeft:35
  },
  text:{
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(20),
    marginLeft: RFValue(5)
  }

})