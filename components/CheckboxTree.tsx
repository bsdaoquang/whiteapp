import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CheckboxItem from './CheckboxItem';

interface CheckBoxModel {
  key: string;
  children?: CheckBoxModel[];
  value: string;
  title: string;
}

interface Props {
  data: CheckBoxModel[];
  onSelect: (vals: string[]) => void;
  selected: string[];
}

const CheckboxTree = (props: Props) => {
  const {data, onSelect, selected} = props;

  const items = [...selected];
  const handleSelectItem = (val: string) => {
    const index = items.findIndex(element => element === val);

    if (index !== -1) {
      items.splice(index, 1);
    } else {
      items.push(val);
    }

    onSelect(items);
  };

  return (
    <>
      {data.map(item => (
        <CheckboxItem
          item={item}
          key={item.key}
          onSelect={val => handleSelectItem(val)}
          selected={selected}
        />
      ))}
    </>
  );
};

export default CheckboxTree;
