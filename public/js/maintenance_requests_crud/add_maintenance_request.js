// Citation for the following function:
// Date: 11/15/23
// Based on: nodejs-starter-app (Add new data)
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app/tree/main/Step%205%20-%20Adding%20New%20Data

const addMaintenanceRequestForm = document.getElementById("add-maintenance-request-form");

addMaintenanceRequestForm.addEventListener("submit", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    console.log("Add Maintenance Request form submitted");


    // Get form fields
    let unitIdInput = document.getElementById("input-unit-id");
    let tenantIdInput = document.getElementById("input-tenant-id");
    let descriptionInput = document.getElementById("input-description");
    let dateSubmittedInput = document.getElementById("input-date-submitted");
    let timeToCompleteInput = document.getElementById("input-time-to-complete");
    let repairCostInput = document.getElementById("input-repair-cost");
    let isClosedInput = document.getElementById("input-is-closed");
    console.log(isClosedInput)

    // Get values from the form fields
    let unitIdValue = unitIdInput.value;
    let tenantIdValue = tenantIdInput.value;
    let descriptionValue = descriptionInput.value;
    let dateSubmittedValue = dateSubmittedInput.value;
    let timeToCompleteValue = timeToCompleteInput.value;
    let repairCostValue = parseFloat(repairCostInput.value);
    let isClosedValue = parseInt(isClosedInput.value);

    // Check for empty values
    if (!unitIdValue || !tenantIdValue || !descriptionValue || !dateSubmittedValue || !timeToCompleteValue || !repairCostValue) {
        console.log("Please fill in all fields.");
        return;
    }

    // Prepare data for AJAX request
    let data = {
        unit_ID: unitIdValue,
        tenant_ID: tenantIdValue,
        description: descriptionValue,
        date_submitted: dateSubmittedValue,
        time_to_complete: timeToCompleteValue,
        repair_cost: repairCostValue,
        is_closed: isClosedValue,
    };

    // Setup AJAX request
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-maintenance-request-form", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Define AJAX callback function
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState == 4) {
            if (xhttp.status == 200) {
                location.reload(); // Reload the page upon successful submission
            } else {
                console.error("There was an error with the input.");
            }
        }
    };

    // Send the AJAX request
    xhttp.send(JSON.stringify(data));
});