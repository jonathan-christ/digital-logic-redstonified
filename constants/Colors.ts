const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
  border: {
    borderWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderBottomColor: 'rgb(80,0,0)',
    borderLeftColor: 'rgb(100, 5,5)',
    borderRightColor: 'rgb(100, 5,5)',
    borderTopColor: 'rgb(180,25,25)',
  },
  borderHL: {
    borderBottomColor: 'rgb(200,30,30)',
    borderLeftColor: 'rgb(225,40,40)',
    borderRightColor: 'rgb(225,40,40)',
    borderTopColor: 'rgb(255,75,75)',
    // borderBottomColor: 'rgb(100,54,0)',
    // borderLeftColor: 'rgb(125, 82,38)',
    // borderRightColor: 'rgb(125, 82,38)',
    // borderTopColor: 'rgb(255,189,81)',
  },
  borderHL_text: {
    borderBottomColor: 'rgb(100,54,0)',
    borderLeftColor: 'rgb(125, 82,38)',
    borderRightColor: 'rgb(125, 82,38)',
    borderTopColor: 'rgb(255,189,81)',
    color: 'rgb(255,189,81)'
  }
};
