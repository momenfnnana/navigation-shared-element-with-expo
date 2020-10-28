import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { SLIDER_DATA } from '../config/travel';
import { width, SPACING, ITEM_WIDTH } from '../config/theme';
// const { ITEM_HEIGHT, ITEM_WIDTH, RADIUS, FULL_SIZE } = tutorial2Spec;

const MarktingSlider = () => {
    console.log("ITEM_WIDTH", ITEM_WIDTH);
    return (
        <FlatList
            data={SLIDER_DATA}
            keyExtractor={(item) => item.color}
            horizontal
            snapToInterval={ITEM_WIDTH + SPACING * 2}
            contentContainerStyle={{
                paddingRight: width - ITEM_WIDTH - SPACING * 2
            }}
            decelerationRate={'fast'}
            renderItem={({ item }) => {
                return (
                    <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
                        <Text style={styles.itemText}>{item.title}</Text>
                    </View>
                )
            }}
            showsHorizontalScrollIndicator={false}
        />
    )
}
const styles = StyleSheet.create({
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_WIDTH * 0.6,
        borderRadius: 16,
        padding: SPACING,
        margin: SPACING
    },
    itemText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})
export default MarktingSlider;
