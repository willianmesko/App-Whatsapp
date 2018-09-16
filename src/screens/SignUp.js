import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import LoadingItem from '../components/LoadingItem';
import { checkLogin, changeEmail, changePassword, changeName, SignUpAction } from '../actions/AuthActions';

export class SignUp extends Component {

	static navigationOptions = {
		title:'Cadastrar'
	}

	constructor(props) {
		super(props);
		this.state = {
			loading:false
		};
	}

	componentDidUpdate() {
		if(this.props.status == 1) {
			Keyboard.dismiss();
			this.props.navigation.navigate('Conversas');
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Digite seu nome</Text>
				<TextInput style={styles.input} value={this.props.name} onChangeText={this.props.changeName} />

				<Text>Digite seu e-mail</Text>
				<TextInput style={styles.input} value={this.props.email} onChangeText={this.props.changeEmail} />

				<Text>Digite sua senha</Text>
				<TextInput secureTextEntry={true} style={styles.input} value={this.props.password} onChangeText={this.props.changePassword} />

				<Button title="Cadastrar" onPress={()=>{
					this.setState({loading:true});
					this.props.SignUpAction(this.props.name, this.props.email, this.props.password, ()=>{
						this.setState({loading:false});
					});
				}} />

				<LoadingItem visible={this.state.loading} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:10,
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	input:{
		width:'80%',
		fontSize:23,
		height:50,
		backgroundColor:'#DDDDDD'
	}
});

const mapStateToProps = (state) => {
	return {
		name:state.auth.name,
		email:state.auth.email,
		password:state.auth.password,
		status:state.auth.status
	};
};

const SignUpConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, changeName, SignUpAction })(SignUp);
export default SignUpConnect;
















