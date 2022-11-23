

export const inputs = [
    {
        id: 1,
        name: 'name',
        placeholder: 'John',
        label: 'Frist Name',
        type: 'text',
        pattern: "[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{3,50}",
        errorMsg:"Name should be 3-50 characters and should not include special characters!",
        required: true,
    },
    {
        id: 2,
        name: 'surname',
        placeholder: 'Doe',
        label: 'Last Name',
        type: 'text',
        pattern: "[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{3,50}",
        errorMsg:"Surname should be 3-50 characters and should not include special characters!",
        required: true,
    },
    {
        id: 3,
        name: 'phoneNumber',
        placeholder: '999 999 9999',
        label: 'Phone Number',
        type: 'text',
        pattern: "([0-9][ ]?){7,50}",
        errorMsg:"It should be a valid phone number!",
        required: true,
    },
    {
        id: 4,
        name: 'email',
        placeholder: 'you@example.com',
        label: 'Email',
        type: 'email',
        errorMsg:"It should be a valid email address!",
        required: true,
    },
    {
        id: 5,
        name: 'confirmEmail',
        placeholder: 'you@example.com',
        label: 'Confirm Email',
        type: 'email',
        //pattern: values.email, (Así es como estaba antes, cuando la variable estaba en el archivo Checkout)
        errorMsg:"Emails don't match!",
        required: true,
    },
]
