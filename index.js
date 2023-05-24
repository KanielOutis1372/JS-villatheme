// define objects
var count = 0;

function addFormInput() {
    count++;
    console.log(count);
    var getWrapRight = document.getElementById('wrap-right');
    console.log(getWrapRight);
    const formBuild = document.createElement('div');
    formBuild.id = 'form-build';
    formBuild.classList.add(count);
    formBuild.innerHTML = `
        <div id="form-wrap">
            <div id="form-head">
                <div id="form-title">Input field</div>
                <button id="form-exit" onClick="removeForm()">X</button>
            </div>
            <div id="form-body">
                <div class="group type">
                    <label for="">Type</label>
                    <select name="" id="">
                        <option value="text" id="option1">text</option>
                        <option value="text" id="option2">textarea</option>
                        <option value="button" id="option3">button</option>
                    </select>
                </div>

                <div class="group label">
                    <label for="">Label</label>
                    <input type="text">
                </div>

                <div class="group name">
                    <label for="">Name</label>
                    <input type="text">
                </div>

                <div class="group id">
                    <label for="">Id</label>
                    <input type="text">
                </div>

                <div class="group placeholder">
                    <label for="">Placeholder</label>
                    <input type="text">
                </div>

                <div class="group require">
                    <label for="">Require</label>
                    <span>
                        <input type="checkbox">
                    </span>
                </div>
            </div>
        </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function addFormTextarea() {
    count++;
    console.log(count);
    var getWrapRight = document.getElementById('wrap-right');
    console.log(getWrapRight);
    const formBuild = document.createElement('div');
    formBuild.id = 'form-build';
    formBuild.innerHTML = `
        <div id="form-wrap">
            <div id="form-head">
                <div id="form-title">Texterea field</div>
                <button id="form-exit" onClick="removeForm()">X</button>
            </div>
            <div id="form-body">
                <div class="group">
                    <label for="">Type</label>
                    <select name="" id="">
                        <option value="text">text</option>
                        <option value="text">textarea</option>
                        <option value="button">button</option>
                    </select>
                </div>

                <div class="group">
                    <label for="">Label</label>
                    <input type="text">
                </div>

                <div class="group">
                    <label for="">Name</label>
                    <input type="text">
                </div>

                <div class="group">
                    <label for="">Id</label>
                    <input type="text">
                </div>

                <div class="group">
                    <label for="">Placeholder</label>
                    <input type="text">
                </div>

                <div class="group">
                <label for="">Row</label>
                <input type="number">
                </div>

                <div class="group">
                    <label for="">Column</label>
                    <input type="number">
                </div>

                <div class="group">
                    <label for="">Require</label>
                    <span>
                        <input type="checkbox">
                    </span>
                </div>
            </div>
        </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function addFormButton() {
    count++;
    console.log(count);
    var getWrapRight = document.getElementById('wrap-right');
    console.log(getWrapRight);
    const formBuild = document.createElement('div');
    formBuild.id = 'form-build';
    formBuild.innerHTML = `
    <div id="form-wrap">
        <div id="form-head">
            <div id="form-title">Button field</div>
            <button id="form-exit" onClick="removeForm()">X</button>
        </div>
        <div id="form-body">
            <div class="group">
                <label for="">Type</label>
                <select name="" id="">
                    <option value="text">text</option>
                    <option value="text">texterea</option>
                    <option value="button">button</option>
                </select>
            </div>

            <div class="group">
                <label for="">Label</label>
                <input type="text">
            </div>

            <div class="group">
                <label for="">Name</label>
                <input type="text">
            </div>

            <div class="group">
                <label for="">Id</label>
                <input type="text">
            </div>

            <div class="group">
                <label for="">Placeholder</label>
                <input type="text">
            </div>

            <div class="group">
                <label for="">Require</label>
                <span>
                    <input type="checkbox">
                </span>
            </div>
        </div>
    </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function removeForm() {
    count--;
    console.log(count);
    var formBuild = document.getElementById('form-build');
    formBuild.parentElement.removeChild(formBuild);    
}

function getDataFormInputField() {
    // const FormInputField = {}

    // let selectedOptionText = '';

    // const selectElement = document.querySelector('.group select');

    //     // Add event listener to the <select> element
    // selectElement.addEventListener('change', () => {
    //     // Get the selected option
    //     const selectedOption = selectElement.options[selectElement.selectedIndex];

    //     // Get the value and text of the selected option
    //     const selectedValue = selectedOption.value;
    //     const selectedText = selectedOption.text;

    //     // Do something with the selected value or text
    //     console.log('Selected value:', selectedValue);
    //     console.log('Selected text:', selectedText);
    // });

    // // You can access the selected option text outside the event listener
    // console.log('Initial selected option text:', selectedOptionText);
    // // console.log(a);

    // const _label = document.querySelector('.label input').value;
    // const _name = document.querySelector('.name input').value;
    // const _id = document.querySelector('.id input').value;
    // const _placeholder = document.querySelector('.placeholder input').value;
    // const _require = document.querySelector('.require input').value;
    // const FormInputField = new Object();
    // FormInputField.label = _label;
    // FormInputField.name = _name;
    // FormInputField.id = _id;
    // FormInputField.placeholder = _placeholder;
    // FormInputField.require = _require;
    // console.log(FormInputField);
}


const arr = [];

function saveData() {
    // const title = document.querySelector('#form-title').textContent;
    // const _label = document.querySelector('.label input').value;
    // const _name = document.querySelector('.name input').value;
    // const _id = document.querySelector('.id input').value;
    // const _placeholder = document.querySelector('.placeholder input').value;
    // const _require = document.querySelector('.require input').value;
    // const _row = document.querySelector('.row').value;
    // const _column = document.querySelector('.column').value;
    // // console.log(title);
    // if (title == 'Input field') {
    //     const FormInputField = new Object();
    //     FormInputField.label = _label;
    //     FormInputField.name = _name;
    //     FormInputField.id = _id;
    //     FormInputField.placeholder = _placeholder;
    //     FormInputField.require = _require;
    //     arr.push(FormInputField);
    //     removeForm();
    // } 
    // else if (title == 'Textarea field') {
    //     const FormTextareaField = new Object();
    //     FormTextareaField.label = _label;
    //     FormTextareaField.name = _name;
    //     FormTextareaField.id = _id;
    //     FormTextareaField.placeholder = _placeholder;
    //     FormTextareaField.row = _row;
    //     FormTextareaField.column = _column;
    //     FormTextareaField.require = _require;
    //     arr.push(FormTextareaField);
    //     removeForm();
    // } 
    // else if (title == 'Button field') {
    //     const FormButtonField = new Object();
    //     FormButtonField.label = _label;
    //     FormButtonField.name = _name;
    //     FormButtonField.id = _id;
    //     FormButtonField.placeholder = _placeholder;
    //     FormButtonField.require = _require;
    //     arr.push(FormButtonField);
    //     removeForm();
    // }
 
    // console.log(arr);
}