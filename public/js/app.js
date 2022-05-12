const vm = new Vue({
    el: '#contact',
    data: {
        errors: [],
        name: null,
        mail: null,
        message: null
    },
    methods: {
        checkForm: function (e) {
            if (this.name && this.mail && this.message) {
                return true
            }

            this.errors = {}
            errorname = {}
            errormail = {}
            errormessage = {}

            if (!this.name) {
                errorname = {name: 'Le champ nom est requis'}
            }

            if (!this.mail) {
                errormail = {mail: 'Le champ mail est requis'}
            }else if (!this.validEmail(this.mail)) {
                errormail = {mail: 'Mail non valide'}
            }

            if (!this.message) {
                errormessage = {message: 'Le champ message est requis'}
            }
            this.errors = {...errorname, ...errormail, ...errormessage}
            e.preventDefault()
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }

});