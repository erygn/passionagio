<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h3>Créer un compte</h3>
                <vs-input type="text" aria-placeholder="Email"/><br>
                <vs-input type="password" aria-placeholder="Mot de passe"/><br>
                <vs-button>Inscription</vs-button>
                <p>Déjà un compte ? <router-link to="/login">Connexion</router-link></p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>

<style scoped>

</style>