# TWU Companion

TWU Companion is an application designed by a team of students from Trinity Western University. The group is comprised of members Adam Boucek, Andrew Nelson, Jenna De Greeff, and Stefan Martinelli. The app is designed for first-year or international students arriving to Trinity Western University and will act as a "companion' to guide them throughout thier transition to TWU. 

This application is built using React Native for the front-end stack which is user facing. As for the back end, it is buitlt using Restful API which uses AWS API gateway and AWS Lambda. Additioinally, Expo Modules were used for various differnt UI components. Listed below are brief descriptions of the various libraries and other technologies used for the creation of the application.

- **@expo/vector-icons@14.0.0**
  Library used for various icons.

- **"@react-navigation/native": "^6.0.2"**
  React Native integration for React Navigation.

- **"expo": "~50.0.5"**
  Core infrastructure for Expo Modules. Bundle of expo modules exposes a JavaScript module that configures an app at runtime as needed to use expo-font.

- **"expo-font": "~11.10.2"**
  Library that allows loading fonts at runtime and using them in React Native components.

- **"expo-linking": "~6.2.2"**
  Provides utilities to interact with other installed apps using deep links. It also provides helper methods for constructing and parsing deep links into your app. This module is an extension of the React Native Linking module.

- **"expo-router": "~3.4.6"**
  Expo router is a file-based router for React Native and web applications. This allows for the navigation between screens in the app. Allows for seamless movement between various parts of the app.

- **"expo-splash-screen": "~0.26.4"**
  The splash screen module is used to tell the splash screen to remain visible until told to hide. This aspect is used for the setup or initialization of the app upon its opening. The splash screen is a useful part to create a clean/uncluttered screen as the app runs tasks behind the scenes such as making API calls, pre-loading fonts, animation, etc. Does not allow for web compatibility when used with React Native.

- **"expo-status-bar": "~1.11.1"**
  Expo status bar provides a component and interface to control the apps status bar. This includes features such as text colour, background colour, hiding, making translucent or opaque, and applying animations as well. This provides functionality for all platforms but has some features which are different from iOS to Android.

- **"expo-web-browser": "~12.8.2"**
  This library provides access to the system’s web browser as well as handling redirects. On iOS, it uses SFSafariViewController.

- **"json-server": "0.17.4"**
  This creates a fake REST API to use for our project. It allows for ease of use without the difficulties of back-end coding, which is great for focusing on front-end developments in prototyping and mocking.

- **"expo-haptics": "~12.8.1"**
  This library provides access to the system's vibration effects and the haptic engine for iOS.

- **"expo-mail-composer": "~12.7.1"**
  This library is used to compose and send emails quickly using the OS UI. Compatible with iOS, Android, and Web.

- **"expo-location": "~16.5.5"**
  Library to provide access to geolocation. Which polls current location or subscribing update events. This library is used for the mapping feature of our app to allow for precise location tracking/mapping. Instead of a still map with no markers.

- **"react": "18.2.0"**
  React is a JavaScript library used for the creation of user interfaces made up from various components.

- **"react-native": "0.73.2"**
  React Native combines the eBay parts of native development with React. A framework for building native mobile apps using JavaScript and React which allows for writing applications that are indistinguishable from those developed using native technologies such as Java or Swift. Also provides access to native APIs allowing for the integration of naive functionality. All together, it allows for easier and more familiar development without sacrificing anything and the UI components allow for easier prototyping.

- **"react-native-gesture-handler": "^2.15.0"**
  Provides a native-driven gesture management API to build better touch-based experiences in React Native. Makes touch interaction and gesture tracking smoother and more dependable.

- **"react-native-mmkv": "^2.12.2"**
  MMKV is an efficient small mobile key/value storage framework. Allows for get and set strings, booleans and numbers. Fully synchronous calls. Encryption support. Provides fast and direct bindings to native C++ library. High performance when reading value from storage.

- **"react-native-reanimated": "^3.8.1"**
  This library provides a more comprehensive low-level abstraction for the Animated Library API. Allows for much greater flexibility especially with gesture-based interactions.

- **"zustand": "^4.5.2"**
  Zustand is a small, fast, and scalable barebones state management solution that uses flux principles. Zustand is a state management library for React applications. It provides a minimalist footprint and is designed to be simple and easy to use, which makes it perfect for our app. Uses React hooks to manage states.


Run: `npx expo prebuild`
Run: `npx expo run:ios`
Run: `yarn run mock`