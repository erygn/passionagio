<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h3>Se connecter</h3>
                <vs-input type="text" v-model="email" aria-placeholder="Email"/><br>
                <vs-input type="password" v-model="password" aria-placeholder="Mot de passe"/><br>
                <vs-button @click="login">Connexion</vs-button>
                <p>Pas de compte ? <router-link to="/signup">Créer un compte</router-link></p>
                <p v-if="isNotValid">Remplir tous les champs</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import firebase from 'firebase'
    export default {
        name: "Login",
        data () {
            return {
                email: null,
                password: null,

                isNotValid: false
            }
        },
        methods: {
            login: function () {
                if (this.email != null && this.password != null) {
                    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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