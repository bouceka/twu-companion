import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  container: {
    // flex: 1,
    
    paddingHorizontal: 16,
  },
  inputField: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    flex: 1,
  },

  link: {
    color: Colors.accessibleBlue,
    fontSize: 16,
  },
  btn: {
    backgroundColor: Colors.accessibleBlue,
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOutline: {
    borderColor: Colors.accessibleBlue,
    borderWidth: 2,
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOutlineText: {
    color: Colors.accessibleBlue,
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  btnIcon: {
    position: 'absolute',
    left: 16,
  },
  footer: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.white,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  bold: {
    fontWeight: 'bold',
  },
});
