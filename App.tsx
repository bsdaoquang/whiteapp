import React, {useState} from 'react';
import {View} from 'react-native';
import {Sort} from 'iconsax-react-native';
import {CheckboxTree} from 'react-native-rncomponents';

const App = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const datas = [
    {
      key: 'a1',
      label: 'afafa1',
      value: 'a1',
      children: [
        {
          key: 'b1',
          label: 'afafa',
          value: 'b1',
        },
        {
          key: 'b2',
          label: 'afafa2',
          value: 'b2',
          children: [
            {
              key: 'c1',
              label: 'afafa',
              value: 'c1',
              children: [
                {
                  key: 'd1',
                  label: 'afafa',
                  value: 'd1',
                },
                {
                  key: 'd2',
                  label: 'afafa',
                  value: 'd2',
                },
                {
                  key: 'd3',
                  label: 'afafa',
                  value: 'd3',
                },
              ],
            },
            {
              key: 'c2',
              label: 'afafa',
              value: 'c2',
            },
            {
              key: 'c3',
              label: 'afafa',
              value: 'c3',
            },
            {
              key: 'c4',
              label: 'afafa',
              value: 'c4',
            },
          ],
        },
        {
          key: 'b3',
          label: 'afafa',
          value: 'b3',
        },
        {
          key: 'b4',
          label: 'afafa',
          value: 'b4',
        },
      ],
    },
    {
      key: 'a2',
      label: 'value 2',
      value: 'a2',
    },
    {
      key: 'a3',
      label: 'Value 3',
      value: 'a3',
      icon: <Sort size={22} color={'coral'} />,
    },
  ];

  return (
    <View style={{padding: 20}}>
      <CheckboxTree
        data={datas}
        onSelect={vals => setSelected(vals)}
        selected={selected}
      />
    </View>
  );
};

export default App;
