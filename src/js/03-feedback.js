import throttle from 'lodash.throttle';

const inputFormRef = document.querySelector(".feedback-form")

inputFormRef.addEventListener("input", throttle(onTextareaInput,500));
inputFormRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    const newEmail = evt.currentTarget.elements.email.value;
    const newMessage = evt.currentTarget.elements.message.value;
    const newForm = {
        email: newEmail,
        message: newMessage
    };
    console.log(newForm);
    inputFormRef.reset();
    localStorage.removeItem("feedback-form-state");
}
function onTextareaInput(evt) {
    const newEmail = inputFormRef.elements.email.value;
    const newMessage = inputFormRef.elements.message.value;
    const newForm = {
        email: newEmail,
        message: newMessage
    };
    newForm[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(newForm));

}
function messageOutput() {
    const savedMessage = localStorage.getItem("feedback-form-state");
    if (savedMessage) {
        inputFormRef.email.value = JSON.parse(savedMessage).email;
        inputFormRef.message.value = JSON.parse(savedMessage).message;
    }
}
messageOutput();





