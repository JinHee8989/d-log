import React from 'react';
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function FloatingWriteButton() {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Write');
  };
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={pressed => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{color: 'white'}}
        onPress={onPress}>
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    //ios전용 그림자 설정
    shadowColor: '#4d4d4d',
    shadowOset: {
      sidth: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    //안드로이드 전용 그림자 설정
    elevation: 5,
    //안드로이드에서 물ㄹ결 효과가 영역 밖으로ㅗ 나가지않도록 설정
    //IOS에서는 overflow가 hihdden인 경우 글림자가 보여지지 않음
    overflow: Platform.select({android: 'hidden'}),
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {color: 'white'},
});

export default FloatingWriteButton;
