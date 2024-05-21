import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

interface Props {
  text: string;
  size?: number;
  color?: string;
  font?: string;
  styles?: StyleProp<TextStyle>;
  flex?: number;
  width?: any;
  numberOfLine?: number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = (props: Props) => {
  const {text, size, flex, color, font, styles, numberOfLine, level} = props;
  let fontSize = 20;

  switch (level) {
    case 1:
      fontSize = 20;
      break;

    case 2:
      fontSize = 18;
      break;
    case 3:
      fontSize = 16;
      break;
    case 4:
      fontSize = 14;
      break;
    case 5:
      fontSize = 12;
      break;
    case 6:
      fontSize = 10;
      break;

    default:
      fontSize = 20;
      break;
  }

  return (
    <Text
      numberOfLines={numberOfLine}
      style={[
        {
          fontSize: size ?? fontSize,
          fontWeight: '700',
          flex: flex ?? 0,
          fontFamily: font ?? '',
          lineHeight: size ? size + 4 : level ? fontSize + 4 : 19,
          color: color ?? '#212121',
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default Title;
