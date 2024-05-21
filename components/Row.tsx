import {
  View,
  Text,
  StyleSheet,
  FlexAlignType,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  flex?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined;
  alignItems?: FlexAlignType;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const Row = (props: Props) => {
  const {children, justifyContent, flex, wrap, alignItems, styles, onPress} =
    props;

  return onPress ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        localStyles.container,
        {
          justifyContent: justifyContent ?? 'center',
          flex: flex ?? 0,
          flexWrap: wrap,
          alignItems: alignItems ?? 'center',
        },
        styles,
      ]}>
      {children}
    </TouchableOpacity>
  ) : (
    <View
      style={[
        localStyles.container,
        {
          justifyContent: justifyContent ?? 'center',
          flex: flex ?? 0,
          flexWrap: wrap,
          alignItems: alignItems ?? 'center',
        },
        styles,
      ]}>
      {children}
    </View>
  );
};

export default Row;

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});
