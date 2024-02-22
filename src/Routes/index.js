import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../Tela Home';
import OI from '../Tela OI';


const Drawer = createDrawerNavigator();

function Routes () {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Tela Home" component={Home}
            options={{
                headerStyle: {
                    backgroundColor: '#191970'
                }
            }}
            />

            <Drawer.Screen name="Tela OI" component={OI}/>
        </Drawer.Navigator>
    )
}

export default Routes;