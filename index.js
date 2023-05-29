// define objects
var count = 0;

function addFormInput() {
    var getWrapRight = document.getElementById('wrap-right');
    console.log(getWrapRight);
    const formBuild = document.createElement('div');
    formBuild.classList.add('form-build');
    // formBuild.id = count;
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
                        <option value="text">text</option>
                        <option value="email">email</option>
                        <option value="number">number</option>
                        <option value="password">password</option>
                    </select>
                </div>

                <div class="group label">
                    <label for="">Label</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group name">
                    <label for="">Name</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group id">
                    <label for="">Id</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group placeholder">
                    <label for="">Placeholder</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group require">
                    <label for="">Require</label>
                    <span class="span-check">
                        <input type="checkbox">
                    </span>
                </div>
            </div>
        </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function addFormTextarea() {
    var getWrapRight = document.getElementById('wrap-right');
    console.log(getWrapRight);
    const formBuild = document.createElement('div');
    formBuild.classList.add('form-build');
    formBuild.innerHTML = `
        <div id="form-wrap">
            <div id="form-head">
                <div id="form-title">Texterea field</div>
                <button id="form-exit" onClick="removeForm()">X</button>
            </div>
            <div id="form-body">
                <div class="group type">
                    <label for="">Type</label>
                    <select name="" id="">
                        <option value="textarea">textarea</option>
                    </select>
                </div>

                <div class="group label">
                    <label for="">Label</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group name">
                    <label for="">Name</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group id">
                    <label for="">Id</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group placeholder">
                    <label for="">Placeholder</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group row">
                    <label for="">Row</label>
                    <input type="number" value="0" min=0>
                </div>

                <div class="group column">
                    <label for="">Column</label>
                    <input type="number" value="0" min=0>
                </div>

                <div class="group require">
                    <label for="">Require</label>
                    <span class="span-check">
                        <input type="checkbox">
                    </span>
                </div>
            </div>
        </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function addFormButton() {
    var getWrapRight = document.getElementById('wrap-right');
    console.log(getWrapRight);
    const formBuild = document.createElement('div');
    formBuild.classList.add('form-build');
    formBuild.innerHTML = `
        <div id="form-wrap">
            <div id="form-head">
                <div id="form-title">Button field</div>
                <button id="form-exit" onClick="removeForm()">X</button>
            </div>
            <div id="form-body">
                <div class="group type">
                    <label for="">Type</label>
                    <select name="" id="">
                        <option value="button">button</option>
                    </select>
                </div>

                <div class="group label">
                    <label for="">Label</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group name">
                    <label for="">Name</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group id">
                    <label for="">Id</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group placeholder">
                    <label for="">Placeholder</label>
                    <div class="wrap-input">
                        <input type="text">
                        <span></span>
                    </div>
                </div>

                <div class="group require">
                    <label for="">Require</label>
                    <span class="span-check">
                        <input type="checkbox">
                    </span>
                </div>
            </div>
        </div>
    `;
    getWrapRight.appendChild(formBuild);
}

function removeForm() {
    var formBuild = document.querySelector('.form-build');
    formBuild.parentElement.removeChild(formBuild);    
}

const arr = [];

function saveData() {
    const list = document.querySelectorAll('.form-build');
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        var formTitle = element.querySelector('#form-title').textContent;
        if (formTitle == 'Input field') {
            const inputForm = {};
            inputForm.title = 'Input field';
            inputForm.valueType = element.querySelector("select").value;
            inputForm.valueLabel = element.querySelector('.label input').value;
            inputForm.valueName = element.querySelector('.name input').value;
            inputForm.valueId = element.querySelector('.id input').value;
            inputForm.valuePlaceholder = element.querySelector('.placeholder input').value;
            const require = element.querySelector('.require input');
            const isChecked = require.checked;
            if (isChecked) {
                inputForm.valueRequire = true;
            }
            else {
                inputForm.valueRequire = false;
            }
            arr.push(inputForm);
        }
        else if (formTitle == 'Texterea field') {
            const textareaForm = {};
            textareaForm.title = 'Textarea field';
            textareaForm.valueType = element.querySelector("select").value;
            textareaForm.valueLabel = element.querySelector('.label input').value;
            textareaForm.valueName = element.querySelector('.name input').value;
            textareaForm.valueId = element.querySelector('.id input').value;
            textareaForm.valuePlaceholder = element.querySelector('.placeholder input').value;
            textareaForm.valueRow = element.querySelector('.row input').value;
            textareaForm.valueColumn = element.querySelector('.column input').value;
            const require = element.querySelector('.require input');
            const isChecked = require.checked;
            if (isChecked) {
                textareaForm.valueRequire = true;
            }
            else {
                textareaForm.valueRequire = false;
            }
            arr.push(textareaForm);
        }
        else if (formTitle == 'Button field') {
            const buttonForm = {};
            buttonForm.title = 'Button field';
            buttonForm.valueType = element.querySelector('select').value;
            buttonForm.valueLabel = element.querySelector('.label input').value;
            buttonForm.valueName = element.querySelector('.name input').value;
            buttonForm.valueId = element.querySelector('.id input').value;
            buttonForm.valuePlaceholder = element.querySelector('.placeholder input').value;
            const require = element.querySelector('.require input');
            const isChecked = require.checked;
            if (isChecked) {
                buttonForm.valueRequire = true;
            }
            else {
                buttonForm.valueRequire = false;
            }
            arr.push(buttonForm);
        }
    }

    const myArr = JSON.stringify(arr); 
    if(localStorage.getItem('FORMSDATA')) {
        localStorage.setItem('FORMSDATA', myArr);
    }
    else {
        localStorage.setItem('FORMSDATA', myArr);
    }
}

function setValueForForms(element, item) {
    element.querySelector('select').value = item.valueType.trim();
    element.querySelector('.label input').value = item.valueLabel.trim();
    element.querySelector('.name input').value = item.valueName.trim();
    element.querySelector('.id input').value = item.valueId.trim();
    element.querySelector('.placeholder input').value = item.valuePlaceholder.trim();
    const checkbox = item.valueRequire;
    console.log(checkbox);
    if (checkbox) {
        element.querySelector('.require input').checked = true;
    } 
    else {
        element.querySelector('.require input').checked = false;
    }
}

function loadData() {
    const array = localStorage.getItem('FORMSDATA');
    const convertArrayy = JSON.parse(array);
    
    for (const item of convertArrayy) {
        if (item.title == 'Input field') {
            addFormInput();
        }  
        
        if (item.title == 'Textarea field') {
            addFormTextarea();
        }
        if (item.title == 'Button field') {
            addFormButton();
        }
    }

    const listForm = document.querySelectorAll('.form-build');
    for (let i = 0; i < listForm.length; i++)  {
        if (convertArrayy[i].title == 'Textarea field') {
            listForm[i].querySelector('.row input').value = convertArrayy[i].valueRow;
            listForm[i].querySelector('.column input').value = convertArrayy[i].valueColumn;
        }
        setValueForForms(listForm[i], convertArrayy[i]);
    }
}

loadData();

function validate(element) {
    element.querySelector('.label input').value;
}

function isEmpty() {
    var label = document.querySelector('.label label');
    label.addEventListener('blur', () => {
        if (label.trim() === '') {
            var error = label.parentNode.querySelector('span');
            error.innerHTML = 'This field cannot be empty!';
            error.style.color = 'red';
        }
    });
    
}


function name(params) {
    
}








function isValidPhoneNumber(value) {
// Sử    dụng biểu thức chính quy để kiểm tra định dạng số điện thoại (ví dụ: dạng XXX-XXXXXXX)
    var phoneRegex = /^\d{3}-\d{7}$/;
    return phoneRegex.test(value);
}


  