const toastLiveExample = document.getElementById('liveToast')
const toast = new bootstrap.Toast(toastLiveExample)

const checkField = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const onlyLettersPattern = /^[A-Za-z-á-é-í-ó-ú]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    const email = document.getElementById("email").value.trim();
    let checked = true;

    if (name && surname && message) {
        if (!onlyLettersPattern.test(name)) {
            checked = false;
            customAlert("El campo 'Nombre' solo acepta letras. Por favor corrija");
        }
        if (name.length < 3) { customAlert("El campo 'Nombre' es muy corto. Por favor corrija"); checked = false; }
        if (!onlyLettersPattern.test(surname)) {
            checked = false;
            customAlert("El campo 'Apellido' solo acepta letras. Por favor corrija");
        }
        if (0 < message.length < 3) { customAlert("El campo 'Mensaje' es muy corto. Por favor corrija"); checked = false; }
    } else {
        checked = false;
        customAlert("Por favor complete los campos del formulario.");
    }


    if (checked) {
        event.target.classList.remove("was-validated");
        okAlert("Exito! tu formulario fue enviado!!");
        setTimeout(() => {
            event.target.reset(); // Reiniciar el formulario
            toast.hide(); // Ocultar el toast después de reiniciar el formulario
        }, 3000);

    } else {
        event.target.classList.add("was-validated");
    }

};

const customAlert = (msg) => {
    document.getElementById('msg-body').innerText = msg
    toast.show()
}

const okAlert = (msg) => {
    toastLiveExample.classList.remove("text-bg-danger")
    toastLiveExample.classList.add("text-bg-success")
    document.getElementById('msg-body').innerText = "Excelente! Tu mensaje fue enviado!"
    toast.show()
}


const changeStyle = (ck) => {
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const formContainer = document.querySelector('.card');
    const form = document.querySelector('form');
    const submitButton = document.getElementById('submit');

    if (ck.checked) {
        // Aplicar estilos de alto contraste
        body.classList.remove('bg-light', 'text-dark');
        body.classList.add('bg-dark', 'text-warning');

        header.classList.remove('bg-primary', 'text-white');
        header.classList.add('bg-dark', 'text-danger');

        footer.classList.remove('bg-primary', 'text-white');
        footer.classList.add('bg-dark', 'text-danger');

        formContainer.classList.remove('bg-light');
        formContainer.classList.add('bg-dark', 'text-warning');

        form.classList.remove('bg-white');
        form.classList.add('bg-dark', 'text-warning');

        submitButton.classList.remove('btn-success');
        submitButton.classList.add('btn-warning', 'text-dark');
    } else {
        // Revertir a los estilos normales
        body.classList.remove('bg-dark', 'text-warning');
        body.classList.add('bg-light', 'text-dark');

        header.classList.remove('bg-dark', 'text-danger');
        header.classList.add('bg-primary', 'text-white');

        footer.classList.remove('bg-dark', 'text-danger');
        footer.classList.add('bg-primary', 'text-white');

        formContainer.classList.remove('bg-dark', 'text-warning');
        formContainer.classList.add('bg-light');

        form.classList.remove('bg-dark', 'text-warning');
        form.classList.add('bg-white');

        submitButton.classList.remove('btn-warning', 'text-dark');
        submitButton.classList.add('btn-success');
    }
};


