import React from 'react';


function Message(props)
{
	if (props.isLoggedIn)
		return <h4>Welcome UserName</h4>;
	else
		return <h4>Login to app</h4>;
}

function Login(props)
{
return(
		<button onClick = {props.clickFunc}>
			Login
		</button>
	);
}

function Logout(props)
{
	return(
		<button onClick = {props.clickFunc}>
			Logout
		</button>
	);
}

class Homepage extends React.Component{

	constructor(props)
	{
		super(props);

		this.state = {isLoggedIn : false};

		this.ifLoginClicked = this.ifLoginClicked.bind(this);
		this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
	}

	ifLoginClicked()
	{
		this.setState({isLoggedIn : true});
	}

	ifLogoutClicked()
	{
		this.setState({isLoggedIn : false});
	}

	render(){

		return(

			<div>

				<Message isLoggedIn = {this.state.isLoggedIn}/>
				
				{
					(this.state.isLoggedIn)?(
					<Logout clickFunc = {this.ifLogoutClicked} />
					) : (
					<Login clickFunc = {this.ifLoginClicked} />
					)
				}

			</div>
				
			);
	}
}
export default Homepage;