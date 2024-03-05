export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      const count = Object.keys(employeesList);
      return count.length;
    },
  };
}
