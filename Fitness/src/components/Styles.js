import { StyleSheet, Dimensions } from 'react-native'
export const window = Dimensions.get('window')
export const windowWidth = window.width;
export const windowHeight = window.height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  iconLeftTopScreen: {
    width: 40,
    height: 40
  },
  headerScreenContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.1,
    paddingTop: 0,
  },
  headerScreenTouchable: {
    // backgroundColor: 'yellow',
    paddingLeft: 10,

  },
  headerScreenTextCon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.9,
  },
  headerScreenText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'monospace'
  },
  homeScreenContainer: {
    flex: 1,
    paddingTop: 20,
    width: '100%'

  },

  mainHomeScreen: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'red',
    alignContent: 'center',

  },
  mainHomeScreenFlatList: {
    flex: 1
  },
  mainHomeScreenTouchable: {
    width: '35%',
    height: windowWidth * 0.35,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 5,
    marginLeft: windowWidth * 0.1 / 2,
    marginRight: windowWidth * 0.1 / 2,
  },
  mainHomeScreenText: {
    fontSize: 22,
    color: 'black',
    fontFamily: 'monospace',

  },
  iconMenu: {
    width: 50,
    height: 50
  },
  //------------------------Home Screen-----------------------//
  //------------------------header-----------------------------
  headerHomeScreen: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerHomeScreenText: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
  homeScreenFlatlist: {

  },
  homeScreenButton: {
    width: windowWidth * 0.35,
    height: windowWidth * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  homeScreenScrollView: {
    flex: 1,
    marginTop: 30,
    width: '100%',
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bigItemHomeContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bigItemHomeButton: {
    width: '90%',
    height: windowHeight * 0.2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'orange'

  },
  bigItemText: {

  },
  //-----------------CustomWorkScreen-------------------
  customWorkScreenContainer: {
    width: '100%',
    height: '100%',
  },
  customWorkScreenHeader: {

  }, customWorkScreenMain: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }, flatListCustomWorkScreen: {

  },
  itemFlatListCustomWorkScreen: {
    backgroundColor: 'orange',
    width: windowWidth * 0.9,
    height: windowHeight * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5
  },
  buttonAddExercies: {
    backgroundColor: 'orange',
    borderRadius: 50,
    right: 5,
    bottom: 5,
    zIndex: 100,
    width: 50,
    height: 50,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  //--------------CustomWorkScreenFirst(Create New Custom Exercise )----------------
  createNewCustomExerciseContainer: {
    flex: 1,
  },
  textInputNewCustomExercise: {
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#DDDDDD',
    borderWidth: 1,
  },
  flatListTitleAddNewWorkoutContainer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,    
    // backgroundColor: 'blue'
  },

  flatListTitleAddNewWorkout: {
    alignSelf: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange',
    
  },
  flatListTitleAddNewWorkoutButton: {
    width: 60,
    height: 40,
    // marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  }




})
