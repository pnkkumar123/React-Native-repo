import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from '../theme/Index';
import tw from 'twrnc';
import { CalendarDaysIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";

const Home = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([1, 2, 3]);

  const handleLocation = (loc) => {
    console.log(loc);
  }

  return (
    <SafeAreaView style={tw `flex-1 relative`}>
      <StatusBar style="light"/>
      <Image blurRadius={70} source={require('../assets/images/bg.png')} style={tw`absolute h-full w-full`}/>
      <View style={tw`flex flex-1`}>
        <View style={tw`mx-4 relative z-50`}>
          <View style={[{ backgroundColor: showSearch ? Theme.bgWhite(0.2) : "transparent" }, tw`flex-row justify-end items-center rounded-full`]}>
            {showSearch ? (
              <TextInput
                placeholder='Search city'
                placeholderTextColor={'lightgray'}
                style={tw`pl-6 h-10 flex-1 text-base text-white`}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={[{ backgroundColor: Theme.bgWhite(0.3) }, tw`rounded-full p-3 m-1`]}
            >
              <MagnifyingGlassIcon size={25} color="white"/>
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View style={tw`absolute w-full bg-gray300 top-16 rounded-3xl`}>
              {locations.map((loc, index) => {
                let showBorder = index + 1 !== locations.length;
                let borderClass = showBorder ? 'border-b-2 border-b-gray-400' : '';
                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={index}
                    style={tw`flex-row items-center border-8 p-3 px-4 mb-1 border-b-2 border-b-gray-400 ${borderClass}`}
                  >
                    <MapPinIcon size={20} color="gray"/>
                    <Text style={tw`text-black text-lg ml-2`}>London, United Kingdom</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        <ScrollView contentContainerStyle={tw`mx-4 justify-around`} showsVerticalScrollIndicator={false}>
          {/* location */}
          <Text style={tw`text-white text-center text-2xl font-bold`}>
            London,
            <Text style={tw`text-lg font-semibold text-gray-300`}>United Kingdom</Text>
          </Text>
          {/* weather */}
          <View style={tw`flex-row justify-center`}>
            <Image source={require('../assets/images/partlycloudy.png')} style={tw`w-52 h-52`} />
          </View>
          {/* degree celsius */}
          <View style={[{display:"flex",flexDirection:"row"},]}>
            <Text style={tw`text-center font-bold text-white text-6xl ml-5`}>23 degree</Text>
            <Text style={tw`text-center text-white text-xl tracking-widest`}>Partly cloudy</Text>
          </View>
          {/* other stats */}
          <View style={tw`flex-row justify-between mx-4`}>
            <View style={[{display:"flex",flexDirection:"row"},tw`flex-row  items-center`]}>
              <Image source={require('../assets/icons/wind.png')} style={tw`h-6 w-6`} />
              <Text style={tw`text-white font-semibold text-base`}>22km/hr</Text>
            </View>
            <View style={[{display:"flex",flexDirection:"row"},tw`flex-row  items-center`]}>
              <Image source={require('../assets/icons/wind.png')} style={tw`h-6 w-6`} />
              <Text style={tw`text-white font-semibold text-base`}>23%</Text>
            </View>
            <View style={[{display:"flex",flexDirection:"row"},tw`flex-row  items-center`]}>
              <Image source={require('../assets/icons/wind.png')} style={tw`h-6 w-6`} />
              <Text style={tw`text-white font-semibold text-base`}>06:05 AM</Text>
            </View>
          </View>
          {/* forecast section */}
          <View style={tw`mb-2`}>
            <View style={tw`flex-row items-center mx-5`}>
              <CalendarDaysIcon size={22} color="white"/>
              <Text style={tw`text-white text-base`}>Daily forecast</Text>
            </View>
            <ScrollView horizontal={true} style={tw`px-5`} showsHorizontalScrollIndicator={false}>
              <View style={[{backgroundColor:Theme.bgWhite(0.15)},tw`flex justify-center items-center w-24 rounded-3xl py-3  mr-4`,tw`space-y-1`]}>
                   <Image 
                   source={require('../assets/images/heavyrain.png')}
                   style={tw`h-11 w-11`}
                   />  
                   <Text style={tw`text-white`}>Monday</Text>
                   <Text style={tw`text-white text-xl font-semibold`}>23 degree</Text>
              </View>
              <View style={[{backgroundColor:Theme.bgWhite(0.15)},tw`flex justify-center items-center w-24 rounded-3xl py-3  mr-4`,tw`space-y-1`]}>
                   <Image 
                   source={require('../assets/images/heavyrain.png')}
                   style={tw`h-11 w-11`}
                   />  
                   <Text style={tw`text-white`}>Monday</Text>
                   <Text style={tw`text-white text-xl font-semibold`}>23 degree</Text>
              </View>
              <View style={[{backgroundColor:Theme.bgWhite(0.15)},tw`flex justify-center items-center w-24 rounded-3xl py-3  mr-4`,tw`space-y-1`]}>
                   <Image 
                   source={require('../assets/images/heavyrain.png')}
                   style={tw`h-11 w-11`}
                   />  
                   <Text style={tw`text-white`}>Monday</Text>
                   <Text style={tw`text-white text-xl font-semibold`}>23 degree</Text>
              </View>
              <View style={[{backgroundColor:Theme.bgWhite(0.15)},tw`flex justify-center items-center w-24 rounded-3xl py-3  mr-4`,tw`space-y-1`]}>
                   <Image 
                   source={require('../assets/images/heavyrain.png')}
                   style={tw`h-11 w-11`}
                   />  
                   <Text style={tw`text-white`}>Monday</Text>
                   <Text style={tw`text-white text-xl font-semibold`}>23 degree</Text>
              </View>
              <View style={[{backgroundColor:Theme.bgWhite(0.15)},tw`flex justify-center items-center w-24 rounded-3xl py-3  mr-4`,tw`space-y-1`]}>
                   <Image 
                   source={require('../assets/images/heavyrain.png')}
                   style={tw`h-11 w-11`}
                   />  
                   <Text style={tw`text-white`}>Monday</Text>
                   <Text style={tw`text-white text-xl font-semibold`}>23 degree</Text>
              </View>
              <View style={[{backgroundColor:Theme.bgWhite(0.15)},tw`flex justify-center items-center w-24 rounded-3xl py-3  mr-4`,tw`space-y-1`]}>
                   <Image 
                   source={require('../assets/images/heavyrain.png')}
                   style={tw`h-11 w-11`}
                   />  
                   <Text style={tw`text-white`}>Monday</Text>
                   <Text style={tw`text-white text-xl font-semibold`}>23 degree</Text>
              </View>
              <View style={[{backgroundColor:Theme.bgWhite(0.15)},tw`flex justify-center items-center w-24 rounded-3xl py-3  mr-4`,tw`space-y-1`]}>
                   <Image 
                   source={require('../assets/images/heavyrain.png')}
                   style={tw`h-11 w-11`}
                   />  
                   <Text style={tw`text-white`}>Monday</Text>
                   <Text style={tw`text-white text-xl font-semibold`}>23 degree</Text>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Home;
