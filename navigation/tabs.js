import React from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS, icons } from "../constants";
import { TabIcon, TabBarCustomButton } from "../components";
import { setTradeModelVisibility } from "../stores/tab/tabAction";
import { connect } from "react-redux";

const Tab = createBottomTabNavigator();

const Tabs = ({ setTradeModelVisibility, isTradeModelVisible }) => {
  const tradeTabButtonOnClickHandler = () => {
    setTradeModelVisibility(!isTradeModelVisible);
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 140,
          backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModelVisible)
              return (
                <TabIcon focused={focused} icon={icons.home} label={"Home"} />
              );
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModelVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModelVisible)
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.briefcase}
                  label={"Portfolio"}
                />
              );
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModelVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon
                focused={focused}
                icon={icons.trade}
                label={"Trade"}
                isTrade={true}
              />
            );
          },
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
              onPress={() => tradeTabButtonOnClickHandler()}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModelVisible)
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.market}
                  label={"Market"}
                />
              );
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModelVisible) {
              e.preventDefault();
            }
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            if (!isTradeModelVisible)
              return (
                <TabIcon
                  focused={focused}
                  icon={icons.profile}
                  label={"Profile"}
                />
              );
          },
        }}
        listeners={{
          tabPress: (e) => {
            if (isTradeModelVisible) {
              e.preventDefault();
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
function mapStateToProps(state) {
  return { isTradeModelVisible: state.tabReducer.isTradeModelVisible };
}
function mapDispatchToProps(dispatch) {
  return {
    setTradeModelVisibility: (isVisible) => {
      return dispatch(setTradeModelVisibility(isVisible));
    },
  };
}
