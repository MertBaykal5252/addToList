
// Elements
const form = document.querySelector("form");

// Helpers
const getById = (id) => document.getElementById(id);

// Handlers
const createError = (inputTarget, message) => {
    const error = document.createElement("div");
    error.classList.add("error", 'error-message');
    error.innerHTML = message;
    inputTarget.classList.add("error");
    inputTarget.parentNode.insertBefore(error, inputTarget.nextSibling);
};

const clearError = () => {
    const errors = form.querySelectorAll(".error.error-message");

    errors.forEach((error) => {
        error.previousElementSibling.classList.remove("error"); // Input
        error.parentNode.removeChild(error); // Error div element
    });
}

// Actions
const onSubmit = (e) => {
    e.preventDefault();

    clearError();

    if (validateForm()) {
        saveForm();
    }
}

const getFormValues = () => {
    return [...form.elements].filter((el) => {
        return el.tagName == 'INPUT';
    });
}

const clearForm = () => {
    const inputs = getFormValues();
    inputs.forEach((input) => {
        input.value = '';
    });
}

// Validations


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateForm = () => {

    const result = getFormValues().every((target) => {
        if (target.value == '') {
            createError(target, 'Bu alan boş bırakılamaz');
            return false;
        }

        if (target.name == 'email' && !validateEmail(target.value)) {
            createError(target, 'Geçerli bir email adresi giriniz');
            return false;
        }

        if (target.name == 'phone' && target.value.length != 11) {
            createError(target, 'Telefon numarası 11 haneli olmalıdır');
            return false;
        }

        if (target.name == 'phone' && /^05\d{9}$/.test(target.value) == false) {
            createError(target, 'Telefon numarası 05 ile başlamalıdır');
            return false;
        }

        return true;
    });

    return result;
}

const createRemoveButton = (placeholder, target, data) => {
    const removeButton = document.createElement('button');
    removeButton.classList.add('deleteButton');
    removeButton.innerHTML = 'Sil';
    removeButton.addEventListener('click', () => {
        deleteRow(data)
        target.parentNode.removeChild(target);
    });

    placeholder.appendChild(removeButton);

}

const removeItem = (e) => {
    console.log(e);
}

const createItem = (data) => {
    let listTableBody = getById("listTableBody");
    let rowCount = listTableBody.rows.length;


    let row = listTableBody.insertRow(rowCount);
    row.insertCell(0).innerHTML = '';
    row.insertCell(1).innerHTML = data.name;
    row.insertCell(2).innerHTML = data.surName;
    row.insertCell(3).innerHTML = data.email;
    row.insertCell(4).innerHTML = data.phone;

    createRemoveButton(row.insertCell(5), row, data);

    row.index = rowCount;
}

const saveForm = () => {
    const data = {
        id: new Date().getTime(),
        name: form.elements.name.value,
        surName: form.elements.surname.value,
        email: form.elements.email.value,
        phone: form.elements.phone.value
    }


    const existingData = localStorage.getItem("data");
    if (existingData) {
        const dataArray = JSON.parse(existingData);
        dataArray.push(data);
        localStorage.setItem("data", JSON.stringify(dataArray));
    } else {
        const dataArray = [data];
        localStorage.setItem("data", JSON.stringify(dataArray));
    }

    createItem(data);


    clearForm();
}

function loadList() {
    const existingData = localStorage.getItem("data");
    if (existingData) {
        const dataArray = JSON.parse(existingData);
        const listTableBody = getById("listTableBody");
        listTableBody.innerHTML = "";

        dataArray.forEach((data) => {
            createItem(data)
        });
    }
}

function deleteRow(row) {

    let dataArray = JSON.parse(localStorage.getItem("data"));

    let updatedDataArray = dataArray.filter((data) => { return data.id != row.id });

    localStorage.setItem("data", JSON.stringify(updatedDataArray));

}

// Main

const main = () => {

    const form = document.querySelector('form');
    form.addEventListener('submit', onSubmit);

    form.elements.phone.addEventListener('keydown', (e) => {
        if (/[^0-9]/.test(e.key) && e.key != 'Backspace') {
            e.preventDefault();
            return false;
        }
    });

    loadList();
}

// Init
main();
