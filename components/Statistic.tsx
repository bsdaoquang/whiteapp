import React, {ReactNode} from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
import Row from './Row';
import Label from './Label';
import Title from './Title';
import Space from './Space';

type Props = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  color?: string;
  onPress?: () => void;
  type?: 'card';
  value?: number;
  styles?: StyleProp<ViewStyle>;
  titleStyleProps?: StyleProp<TextStyle>;
  bordered?: boolean;
  descriptionStyleProps?: StyleProp<TextStyle>;
  valueStyleProps?: StyleProp<TextStyle>;
};

const Statistic = (props: Props) => {
  const {
    title,
    description,
    value,
    icon,
    onPress,
    type,
    styles,
    titleStyleProps,
    descriptionStyleProps,
    valueStyleProps,
    color,
    bordered,
  } = props;
  return (
    <Row
      styles={[
        {
          backgroundColor: color,
          marginBottom: 12,
          borderRadius: 12,
          padding: 12,
          borderColor: '#e0e0e0',
          borderWidth: bordered === false ? 0 : 1,
        },
        styles,
      ]}
      onPress={onPress}>
      {icon && (
        <View
          style={{
            padding: 8,
            borderRadius: 100,
            backgroundColor: color ? `${color}99` : undefined,
          }}>
          {icon}
        </View>
      )}
      {icon && <Space width={12} />}
      <View style={{flex: 1}}>
        {title && (
          <Title
            text={title ?? ''}
            styles={titleStyleProps}
            color={color ? 'white' : '#212121'}
          />
        )}
        {description && (
          <Label
            styles={descriptionStyleProps}
            text={description ?? ''}
            color={color ? 'white' : '#676767'}
          />
        )}
      </View>
      {value && (
        <Title
          text={`${value}`}
          styles={valueStyleProps}
          color={color ? 'white' : '#212121'}
        />
      )}
    </Row>
  );
};

export default Statistic;
