import { Text } from 'react-native';

const Entry = ({navigation, route}) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };


export default Entry;