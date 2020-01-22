<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h3>Se connecter</h3>
                <vs-input type="text" aria-placeholder="Email"/><br>
                <vs-input type="password" aria-placeholder="Mot de passe"/><br>
                <vs-button @click="login">Connexion</vs-button>
                <p>Pas de compte ? <router-link to="/signup">Créer un compte</router-link></p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data () {
            return {

            }
        },
        methods: {
            login: function () {
                this.$router.replace('home');
            }
        }
    }
</script>

<style scoped>

</style>