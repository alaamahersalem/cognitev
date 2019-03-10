import axios from 'axios';
import * as Apis from './api';
import { toast } from 'react-toastify';

export const addRole = (name) => {
	try {
		return new Promise(function(resolve, reject) {
			axios({
				method: 'POST',
				url: Apis.addRole,
				data: {
					name
				}
			})
				.then(function(response, reject) {
					toast.info('You have created the Role Successfully');
					resolve(response.data);
				})
				.catch((error) => {
					toast.error('something went wrong');
					reject(error);
				});
		});
	} catch (error) {
		return `Caught an error: ${error}`;
	}
};

export const getRoles = () => {
	try {
		return new Promise(function(resolve, reject) {
			axios({
				method: 'get',
				url: Apis.getRoles
			})
				.then(function(response, reject) {
					resolve(response.data);
				})
				.catch((error) => {
					toast.error('something went wrong in getting Roles');
					reject(error);
				});
		});
	} catch (error) {
		return `Caught an error: ${error}`;
	}
};

export const getRole = (name) => {
	try {
		return new Promise(function(resolve, reject) {
			axios({
				method: 'get',
				url: Apis.getRole(name)
			})
				.then(function(response, reject) {
					resolve(response.data[0]);
				})
				.catch((error) => {
					toast.error('something went wrong');
					reject(error);
				});
		});
	} catch (error) {
		return `Caught an error: ${error}`;
	}
};

export const addPermission = (data) => {
	try {
		return new Promise(function(resolve, reject) {
			const { role, method, table, condition, roleId } = data;
			axios({
				method: 'post',
				url: Apis.addPermission,
				data: {
					role,
					method,
					table,
					roleId,
					where: condition ? '' + condition : null
				}
			})
				.then(function(response, reject) {
					toast.info('You have created the Permission Successfully');
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	} catch (error) {
		return `Caught an error: ${error}`;
	}
};

export const editPermission = (data) => {
	const { condition, id } = data;
	try {
		debugger;
		return new Promise(function(resolve, reject) {
			axios
				.patch(Apis.editPermission(id), {
					where: '' + condition
				})
				.then((resp) => {
					resolve(resp.data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	} catch (error) {
		return `Caught an error: ${error}`;
	}
};

export const getPermission = (data) => {
	try {
		return new Promise(function(resolve, reject) {
			const { role, method } = data;

			axios({
				method: 'GET',
				url: Apis.getPermission(data),
				data: {
					role,
					method
				}
			})
				.then(function(response, reject) {
					resolve(response.data);
				})
				.catch((error) => {
					reject(error);
				});
		});
	} catch (error) {
		return `Caught an error: ${error}`;
	}
};
