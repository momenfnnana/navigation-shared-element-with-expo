import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context"
import { View, TouchableOpacity } from 'react-native';
import MarktingSlider from '../Components/MarktingSlider';
import { DATA } from '../config/travel';
import { SPACING } from '../config/theme';
import Icon from '../Components/Icon';
// here we importing SharedElement to warp our component want to share
// hint: should have to wrap it inside all shared screens
import { SharedElement } from "react-navigation-shared-element";
const List = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MarktingSlider />
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 20
                }}
            >
                {DATA.map((item) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                margin: SPACING * 2.5
                            }}
                            onPress={() => navigation.push("Detail", { item })}
                        >
                            {/* 
                            we wrap the icons here and when wrap should get it unique id
                            go to Detail Screen...
                            */}
                            <SharedElement id={`item.${item.id}.icon`}>
                                <Icon uri={item.imageUri} />
                            </SharedElement>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </SafeAreaView>
    );
}

export default List;
