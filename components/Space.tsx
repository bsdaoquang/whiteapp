import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  width?: number;
  height?: number;
};

const Space = (props: Props) => {
  const {width, height} = props;

  return <View style={{width, height}} />;
};

export default Space;
