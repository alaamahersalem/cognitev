import React, { Component } from 'react';
import acl from '../../acl';

class CreateRole extends Component {
	state = {
		roleName: ''
	};

	async submit(event) {
		event.preventDefault();
		const { roleName } = this.state;
		await acl.createRole(roleName);
		this.props.addRole({ name: roleName });
		this.setState({ roleName: '' });
	}
	render() {
		return (
			<form onSubmit={(event) => this.submit(event)}>
				<div className="form-group">
					<span>Create Role </span>
				</div>
				<div className="form-group">
					<input
						value={this.state.roleName}
						onChange={(e) => this.setState({ roleName: e.target.value })}
						type="text"
						className="form-control"
						required
						placeholder="Enter role name"
					/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary ">
						Submit
					</button>
				</div>
			</form>
		);
	}
}

export default CreateRole;
