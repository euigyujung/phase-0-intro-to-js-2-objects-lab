const employee = {
    name: "danny",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key]=value

    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    const deletekey = Object.assign({}, employee)
    delete deletekey[key];
    return deletekey
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee

}