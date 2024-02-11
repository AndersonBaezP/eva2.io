import { createStackNavigator } from '@react-navigation/stack';
import { ScreenPan1 } from '../screens/ScreenPan1';
import { ScreenPan2 } from '../screens/ScreenPan2';
import { ScreenPan3 } from '../screens/ScreenPan3';
import { ScreenPan4 } from '../screens/ScreenPan4';
import { Principal } from '../screens/Principal';

const Stack = createStackNavigator();

export const StackNavigation=()=> {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Mi Movil" component={Principal} />
      <Stack.Screen name="creenPan1" options ={{title:'Pantalla 1'}} component={ScreenPan1} />
      <Stack.Screen name="creenPan2" options ={{title:'Pantalla 2'}} component={ScreenPan2} />
      <Stack.Screen name="creenPan3" options ={{title:'Pantalla 3'}} component={ScreenPan3} />
      <Stack.Screen name="creenPan4" options ={{title:'Pantalla 4'}} component={ScreenPan4} />
    </Stack.Navigator>
  );
}