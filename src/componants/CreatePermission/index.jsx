import React, { Component } from 'react';

import { a } from '../../acl';

class CreatePermission extends Component {
	state = {
		role: '',
		to: '',
		where: '',
		method: '',
		methods: [ 'get', 'post', 'put', 'delete', 'patch' ],
		roles: []
	};
	async submit(event) {
		event.preventDefault();
		const { method, to, role, where } = this.state;

		// if (where) {
		// 	var func = new Function('return (' + where + ')')();
		// 	debugger;
		// }
		await a(role).can(method).from(to).when(where);

		this.setState({
			to: '',
			where: ''
		});
	}

	render() {
		const { methods, to, where } = this.state;
		const { roles } = this.props;
		return (
			<React.Fragment>
				<form onSubmit={(event) => this.submit(event)}>
					<div className="form-group">
						<span>Create Permission</span>
					</div>
					<div className="form-group">
						<select
							required
							onChange={(e) => this.setState({ role: e.target.value })}
							className="custom-select mr-sm-2"
							defaultValue=""
						>
							<option value="" disabled>
								Choose Role...
							</option>
							{roles.map((item, index) => {
								return (
									<option key={index} value={item.name}>
										{item.name}
									</option>
								);
							})}
						</select>
					</div>
					<div className="form-group">
						<select
							onChange={(e) => this.setState({ method: e.target.value })}
							className="custom-select mr-sm-2"
							required
							defaultValue=""
						>
							<option value="" disabled>
								Choose Method...
							</option>
							{methods.map((item, index) => {
								return (
									<option key={index} value={item}>
										{item}
									</option>
								);
							})}
						</select>
					</div>
					<div className="form-group">
						<input
							value={to}
							onChange={(e) => this.setState({ to: e.target.value })}
							type="text"
							className="form-control"
							required
							placeholder="to"
						/>
					</div>

					{/* TODO ::// to add the conditions to the screens but not done yet  */}

					{/* <div className="form-group">
						<input
							value={where}
							onChange={(e) => this.setState({ where: e.target.value })}
							type="text"
							className="form-control"
							placeholder="where"
						/>
					</div> */}
					<div className="form-group">
						<button type="submit" className="btn btn-primary ">
							Submit
						</button>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default CreatePermission;
