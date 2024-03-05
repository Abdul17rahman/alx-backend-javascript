export default function createReportObject(employeesList) {
	return {
		allEmployees: { ...employeesList },
		getNumberOfDepartments() {
			let count = Object.keys(employeesList)
			return count.length
		}	
	}
}