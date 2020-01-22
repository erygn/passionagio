<template>

    <vs-row vs-justify="center">
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-card class="cardx">
                <div slot="header">
                    <h3>
                        Hello world !
                    </h3>
                </div>
                <div slot="media">
                    <img width="20%" src="https://shuros.subswapr.fr/presentation1.jpg">
                </div>
                <div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
                        <vs-button color="primary" icon="turned_in_not"></vs-button>
                        <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
        <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="6">
            <vs-card class="cardx">
                <div slot="header">
                    <h3>
                        Hello world !
                    </h3>
                </div>
                <div slot="media">
                    <img width="50px" height="120" src="https://cdn.icon-icons.com/image-packs/windowsicon_iconset_43.png">
                </div>
                <div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                </div>
                <div slot="footer">
                    <vs-row vs-justify="flex-end">
                        <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
                        <vs-button color="primary" icon="turned_in_not"></vs-button>
                        <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
                    </vs-row>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    export default {
        name: "Test"
    }
</script>

<style>
    .cardx {
        margin: 15px;
    }
</style>