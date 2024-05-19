import CheckBox from '@react-native-community/checkbox';
import {ArrowDown2, ArrowRight2} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface CheckBoxModel {
  key: string;
  children?: CheckBoxModel[];
  value: string;
  title: string;
}

interface Props {
  item: CheckBoxModel;
  onSelect: (val: string) => void;
  selected: string[];
}

const CheckboxItem = (props: Props) => {
  const {item, onSelect, selected} = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleCheck = (item: CheckBoxModel) => {
    if (item.children && item.children.length > 0) {
      item.children.forEach(val => handleCheck(val));
    } else {
      onSelect(item.value);
    }
  };

  const calcChildLength = (item: CheckBoxModel) => {
    let total = 0;
    if (item.children) {
      item.children.forEach(child => {
        total += calcChildLength(child);
      });
    } else {
      total = +1;
    }
    return total;
  };

  const countSelectedItems = (item: CheckBoxModel) => {
    let total = 0;

    if (item.children) {
      item.children.forEach(val => (total += countSelectedItems(val)));
    } else {
      total += selected.includes(item.value) ? 1 : 0;
    }

    return total;
  };

  const renderCheckbox = (item: CheckBoxModel) => {
    let count = 0;
    let totalChild = 0;

    if (item.children) {
      item.children.forEach(val => {
        count += countSelectedItems(val);
        totalChild += calcChildLength(val);
      });
    } else {
      count += selected.includes(item.value) ? 1 : 0;
      totalChild = 1;
    }

    return (
      <CheckBox
        tintColors={{
          true: '#1abc9c',
          false: item.children
            ? count > 0 && count > 0 && count < totalChild
              ? '#1abc9c'
              : '#bdc3c7'
            : '#bdc3c7',
        }}
        onValueChange={() => handleCheck(item)}
        value={
          item.children
            ? count === totalChild
              ? true
              : false
            : selected.includes(item.value)
        }
      />
    );
  };

  return (
    <View key={item.key}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {item.children && item.children.length > 0 ? (
          <TouchableOpacity onPress={() => setCollapsed(!collapsed)}>
            {collapsed ? (
              <ArrowDown2 size={16} color="#212121" />
            ) : (
              <ArrowRight2 size={16} color="#212121" />
            )}
          </TouchableOpacity>
        ) : (
          <View style={{width: 16}} />
        )}
        <TouchableOpacity
          onPress={() => handleCheck(item)}
          style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          {renderCheckbox(item)}
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>

      {collapsed && (
        <View>
          {item.children &&
            item.children.length > 0 &&
            item.children.map(chil => (
              <View style={{marginLeft: 24}} key={chil.key}>
                <CheckboxItem
                  item={chil}
                  onSelect={val => onSelect(val)}
                  selected={selected}
                />
              </View>
            ))}
        </View>
      )}
    </View>
  );
};

export default CheckboxItem;
