import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "twrnc";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => {
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />;
      }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            console.warn("Favourite clicked");
          }}
        >
          <Icon
            style={tw`mr-4 p-3 bg-gray-200 rounded-full`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
