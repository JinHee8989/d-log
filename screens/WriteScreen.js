import React, {useState, useContext} from 'react';
import {StyleSheet, View, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import LogContext from '../contexts/LogContext';

function WriteScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigation = useNavigation();
  const {onCreate} = useContext(LogContext);
  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(), //날짜를 문자열로 변환
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          body={body}
          onChangeTitle={setTitle}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'white'},
  avoidingView: {flex: 1},
});

export default WriteScreen;
