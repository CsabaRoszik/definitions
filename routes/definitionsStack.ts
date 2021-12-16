import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DefinitionDetails from '../screens/DefinitionDetails';
import DefinitionList from '../screens/DefinitionList';

const screens = {
  Definitions: {
    screen: DefinitionList,
  },
  DefinitionDetails: {
    screen: DefinitionDetails,
  }
};

const DefinitionStack = createStackNavigator(screens);
export default createAppContainer(DefinitionStack);
