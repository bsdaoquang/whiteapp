import {View, Text} from 'react-native';
import React from 'react';
import {Home} from 'iconsax-react-native';
import Statistic from './components/Statistic';
import Row from './components/Row';

const App = () => {
  const statistics = [
    {
      key: '1',
      title: 'Title',
      description: 'Description',
      color: '#FF7F50',
      icon: <Home size={20} color="coral" />,
      value: 1234,
    },
    {
      key: '2',
      title: 'Title',
      description: 'Description',
      color: '#FF7F50',
      icon: <Home size={20} color="coral" />,
      value: 1234,
    },
    {
      key: '3',
      title: 'Title',
      description: 'Description',
      color: '#FF7F50',
      icon: <Home size={20} color="coral" />,
      value: 1234,
    },
    {
      key: '4',
      title: 'Title',
      description: 'Description',
      color: '#FF7F50',
      icon: <Home size={20} color="coral" />,
      value: 1234,
    },
  ];

  return (
    <View style={{padding: 20}}>
      <Row wrap="wrap">
        {statistics.map(item => (
          <Statistic
            key={item.key}
            icon={item.icon}
            value={item.value}
            description={item.description}
            title={item.title}
            onPress={() => console.log(item)}
            styles={{borderColor: 'coral'}}
          />
        ))}
      </Row>
    </View>
  );
};

export default App;
