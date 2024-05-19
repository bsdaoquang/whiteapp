import React, {useState} from 'react';
import {View} from 'react-native';
import CheckboxItem from './components/CheckboxItem';
import CheckboxTree from './components/CheckboxTree';

const App = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const datas = [
    {
      key: 'a1',
      title: 'afafa1',
      value: 'a1',
      children: [
        {
          key: 'b1',
          title: 'afafa',
          value: 'b1',
        },
        {
          key: 'b2',
          title: 'afafa2',
          value: 'b2',
          children: [
            {
              key: 'c1',
              title: 'afafa',
              value: 'c1',
              children: [
                {
                  key: 'd1',
                  title: 'afafa',
                  value: 'd1',
                },
                {
                  key: 'd2',
                  title: 'afafa',
                  value: 'd2',
                },
                {
                  key: 'd3',
                  title: 'afafa',
                  value: 'd3',
                },
              ],
            },
            {
              key: 'c2',
              title: 'afafa',
              value: 'c2',
            },
            {
              key: 'c3',
              title: 'afafa',
              value: 'c3',
            },
            {
              key: 'c4',
              title: 'afafa',
              value: 'c4',
            },
          ],
        },
        {
          key: 'b3',
          title: 'afafa',
          value: 'b3',
        },
        {
          key: 'b4',
          title: 'afafa',
          value: 'b4',
        },
      ],
    },
    {
      key: 'a2',
      title: 'value 2',
      value: 'a2',
    },
    {
      key: 'a3',
      title: 'Value 3',
      value: 'a3',
    },
    // {
    //   key: 'a',
    //   title: 'afafa',
    //   value: 'dafafa',
    //   children: [
    //     {
    //       key: 'a',
    //       title: 'afafa',
    //       value: 'dafafa',
    //     },
    //     {
    //       key: 'a',
    //       title: 'afafa',
    //       value: 'dafafa',
    //       children: [
    //         {
    //           key: 'a',
    //           title: 'afafa',
    //           value: 'dafafa',
    //         },
    //         {
    //           key: 'a',
    //           title: 'afafa',
    //           value: 'dafafa',
    //         },
    //         {
    //           key: 'a',
    //           title: 'afafa',
    //           value: 'dafafa',
    //         },
    //         {
    //           key: 'a',
    //           title: 'afafa',
    //           value: 'dafafa',
    //         },
    //       ],
    //     },
    //     {
    //       key: 'a',
    //       title: 'afafa',
    //       value: 'dafafa',
    //     },
    //     {
    //       key: 'a',
    //       title: 'afafa',
    //       value: 'dafafa',
    //     },
    //   ],
    // },
    // {
    //   key: 'a',
    //   title: 'afafa',
    //   value: 'dafafa',
    //   children: [
    //     {
    //       key: 'a',
    //       title: 'afafa',
    //       value: 'dafafa',
    //     },
    //     {
    //       key: 'a',
    //       title: 'afafa',
    //       value: 'dafafa',
    //       children: [
    //         {
    //           key: 'a',
    //           title: 'afafa',
    //           value: 'dafafa',
    //         },
    //         {
    //           key: 'a',
    //           title: 'afafa',
    //           value: 'dafafa',
    //         },
    //         {
    //           key: 'a',
    //           title: 'afafa',
    //           value: 'dafafa',
    //         },
    //         {
    //           key: 'a',
    //           title: 'afafa',
    //           value: 'dafafa',
    //         },
    //       ],
    //     },
    //     {
    //       key: 'a',
    //       title: 'afafa',
    //       value: 'dafafa',
    //     },
    //     {
    //       key: 'a',
    //       title: 'afafa',
    //       value: 'dafafa',
    //     },
    //   ],
    // },
  ];

  /*
  selected: {
   a1: {
    selected: [1, 3, ,5, 5],
    b1: {
      selected: [1234]
    }
   }
  }
*/

  // console.log(selected);

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
