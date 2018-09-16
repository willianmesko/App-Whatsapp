import React, { Compoent } from 'react';
import { TabNavigator } from 'react-navigation';
//import { connect } from 'react-redux';

import ConversasStack from './ConversasStack';
import ContatoList from './ContatoList';
import Config from './Config';

const ConversasNavigator = TabNavigator({
	ConversasStack:{
		screen:ConversasStack,
		navigationOptions:{
			tabBarLabel:'Conversas',
			header:null
		}
	},
	ContatoList:{
		screen:ContatoList
	},
	Config:{
		screen:Config
	}
}, {
	tabBarPosition:'bottom',
	animationEnabled:false,
	swipeEnabled:false
});

export default ConversasNavigator;