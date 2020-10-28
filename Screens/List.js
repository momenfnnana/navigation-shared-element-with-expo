import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context"
import { View, TouchableOpacity } from 'react-native';
import MarktingSlider from '../Components/MarktingSlider';
import { DATA } from '../config/travel';
import { SPACING } from '../config/theme';
import Icon from '../Components/Icon';
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
