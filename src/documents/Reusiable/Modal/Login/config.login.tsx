export const LOGIN_FORM_VALUES = {
    username: {
        name: 'username',
        label: "E-mailingizni kiriting",
        require: true,
    },
    password: {
        name: 'password',
        label: "Parol",
        require: true,
    },
}
export const SEND_CODE_FORM = {
    number: {
        name: 'number',
        label: "E mail",
        require: true,
    },
    approve: {
        name: 'approve',
        label: "Kod",
        require: true,
    },
    new_password: {
        name: 'new_password',
        label: "Yangi parolni kiriting",
        require: true,
    },
    re_new_password: {
        name: 're_new_password',
        label: "Yangi parolni takrorlang",
        require: true,
    },
}

export const SIGN_UP_FORM_VALUES = {
    firstName: {
        name: 'firstname',
        label: "Ismingiz",
        require: true,
    },
    lastName: {
        name: 'lastname',
        label: "Familiyangiz",
        require: true,
    },
    email: {
        name: 'email',
        label: "E-mailingiz",
        require: true,
    },
    password1: {
        name: 'password1',
        label: "Parolingiz",
        require: true,
    },
    password2: {
        name: 'password2',
        label: "Parolingizni qayta kirgazing",
        require: true,
    },
    phone: {
        name: 'phone',
        label: "Tel raqamingizni kirgazing",
        require: true,
    },
    confirm: {
        name: 'confirm',
        label: 'Raqamni kirgazing',
        require: true,
    }
}
