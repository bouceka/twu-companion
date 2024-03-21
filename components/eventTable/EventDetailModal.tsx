import { TWUEvent } from '@/types';
import React from 'react';
import { View, Text, Button, Modal } from 'react-native';

interface EventDetailModalProps {
  event: TWUEvent;
  visible: boolean;
  onClose: () => void;
}

const EventDetailModal = ({ event, visible, onClose }: EventDetailModalProps) => (
  <Modal animationType='slide' transparent={true} visible={visible}>
    <View style={{ margin: 20, backgroundColor: 'white', padding: 30 }}>
      <Text style={{ fontSize: 20 }}>Item Details:</Text>
      <Text>Name: {event.title}</Text>
      <Text>Description: {event.description}</Text>
      <Button title='Close' onPress={onClose} />
    </View>
  </Modal>
);

export default EventDetailModal;
