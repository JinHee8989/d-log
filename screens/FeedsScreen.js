import React, {useContext} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';
import FeedList from '../components/FeedList';

function FeedsScreen() {
  // const {text, setText} = useContext(LogContext);
  const {logs} = useContext(LogContext);
  return (
    // ** context API 사용

    // 1. consumer와 render props 이용
    // <View style={styles.block}>
    //   <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer>
    // </View>

    // 2. children props 이용
    // <View style={styles.block}>
    //   <Box>
    //     <Text>1</Text>
    //   </Box>
    //   <Box>
    //     <Text>2</Text>
    //   </Box>
    //   <Box>
    //     <Text>3</Text>
    //   </Box>
    // </View>

    // <View style={styles.block}>
    //   <TextInput
    //     value={text}
    //     onChangeText={setText}
    //     placeholder="텍스트를 입력하세요."
    //     style={styles.input}
    //   />
    // </View>

    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
}

// 2. children props 이용
// function Box({children}) {
//   return <View style={styles.box}>{children('Hello world!')}</View>;
// }

const styles = StyleSheet.create({
  block: {flex: 1},
  box: {
    borderWidth: 2,
    padding: 16,
    borderBottomColor: 'black',
    marginBottom: 16,
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});

export default FeedsScreen;
