import React, { Compoent } from 'react';
import { StackNavigator } from 'react-navigation';
//import { connect } from 'react-redux';

import ConversasList from './ConversasList';
import ConversaInterna from './ConversaInterna';

const ConversasStackNavigator = StackNavigator({
	ConversasList:{
		screen:ConversasList
	},
	ConversaInterna:{
		screen:ConversaInterna
	}
});

export default ConversasStackNavigator;