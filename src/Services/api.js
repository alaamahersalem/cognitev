const baseUrl = 'http://localhost:4000';
export const addRole = `${baseUrl}/roles`;
export const addPermission = `${baseUrl}/permissions`;
export const editPermission = (id) => `${baseUrl}/permissions/${id}`;
export const getPermission = (data) =>
	`${baseUrl}/permissions?role=${data.role}&&method=${data.method}
	`;
export const getRole = (name) => `${baseUrl}/roles?name=${name}`;
export const getRoles = `${baseUrl}/roles`;
