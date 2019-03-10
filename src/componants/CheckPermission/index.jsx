import React, { Component } from 'react';
import { check } from '../../acl';

class CheckPermission extends Component {
	state = {
		role: '',
		to: '',
		where: '',
		method: '',
		methods: [ 'get', 'post', 'put', 'delete', 'patch' ],
		check: '',
		result: false,
		validationError: false
	};
	async submit(event) {
		event.preventDefault();
		const { method, to, role, where } = this.state;
		try {
			let condition = where ? JSON.parse(where) : '';
			let result = await check.if(role).can(method).to(to).when(condition);

			this.setState({
				result
			});
		} catch (e) {
			this.setState({
				validationError: true
			});
		}
	}

	render() {
		const { methods, to, where, result, validationError } = this.state;
		const { roles } = this.props;
		return (
			<React.Fragment>
				<form onSubmit={(event) => this.submit(event)}>
					<div className="form-group">
						<span>Check Permission</span>
					</div>
					<div className="form-group">
						<select
							onChange={(e) => this.setState({ role: e.target.value })}
							className="custom-select mr-sm-2"
							required
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
					{/* 
					<div className="form-group">
						<input
							value={where}
							onChange={(e) => this.setState({ where: e.target.value })}
							type="text"
							className="form-control"
							placeholder="where ex: {&quot;id&quot;:&quot;10&quot;}"
						/>
					</div> */}
					<div className="form-group">
						{validationError ? (
							<small className="form-text">{`It should be Object ex  {'id':'10'}`}</small>
						) : null}
					</div>
					<div className="form-group">
						<span>result:</span>
						<span>{`${result}`}</span>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary ">
							Check
						</button>
					</div>
				</form>
			</React.Fragment>
		);
	}
}

export default CheckPermission;
