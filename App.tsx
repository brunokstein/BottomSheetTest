import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { ApplePay } from './src/components/ApplePay';

export default function App() {
  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["10%", "40%", "90%"];

  const handleSnapPress = useCallback((index: any) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={[styles.container, { backgroundColor: isOpen ? "#885044" : "#310956" }]}>
          <TouchableOpacity onPress={() => handleSnapPress(0)}>
            <Text style={{ color: "#fff" }}>
              BottomSheet test
            </Text>
          </TouchableOpacity>
          <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onClose={() => setIsOpen(false)}
          >
            <BottomSheetView>
              <Text>
                Deu certo caralho
              </Text>
            </BottomSheetView>
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555454",
    alignItems: "center",
    justifyContent: "center"
  },
})