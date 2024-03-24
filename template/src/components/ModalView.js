import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';

export default function ModalView({
  children,
  isVisible = false,
  onBackdropPress = () => null,
  style = {},
}) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{...styles.style, ...style}}>
      {children}
    </Modal>
  );
}

const styles = StyleSheet.create({
  style: {},
});
