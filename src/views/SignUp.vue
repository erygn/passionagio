<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h3>Créer un compte</h3>
                <vs-input type="text" aria-placeholder="Email" v-model="email"/><br>
                <vs-input type="password" v-model="password" aria-placeholder="Mot de passe"/><br>
                <vs-button @click="signUp">Inscription</vs-button>
                <p>Déjà un compte ? <router-link to="/login">Connexion</router-link></p>
                <p v-if="isNotValid">Remplir tous les champs</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "SignUp",
        data() {
            return {
                email: null,
                password: null,

                isNotValid: false
            }
        },
        methods: {
            signUp: function () {
                if (this.email != null && this.password != null) {
                    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                        () => {
                            this.$router.replace('home')
                        },
                        (err) => {
                            alert('Oops. ' + err.message)
                        }
                    );
                } else {
                    this.isNotValid = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>