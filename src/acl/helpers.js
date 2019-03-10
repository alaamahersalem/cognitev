import { getPermission } from '../Services';
import { matchPath } from 'react-router';

export async function getData(checkObj) {
	//get Data is used to make an APi call to:
	// get the data from the DB.
	// check the the path that saved in the DB with the router path .
	// return the value of the function.
	const { method, role, table, condition } = checkObj;
	var result = await getPermission({ role, method });

	if (condition) {
		// To handle the error message from the user
		if (condition instanceof Object) {
			var checkList = result
				.filter((item) => {
					return !!matchPath(table, item.table);
				})
				.map((permission) => {
					//get variable from the URL.
					const variable = matchPath(table, {
						path: permission.table
					}).params;

					var func = new Function('return (' + permission.where + ')')();
					return func(variable, condition);
				});

			return checkList[0] || false;
		} else {
			throw new console.error(
				' please follow this template to check the permission ==> await check.if(role).can(method).to(current Url).when( { id:"1" });'
			);
		}
	}
	return result.filter((item) => item.table === table).length > 0 ? true : false;
}
