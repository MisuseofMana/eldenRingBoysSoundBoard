<template>
    <v-col sm="12" md="6">
        <v-card width="100%" class="pa-5 d-flex justify-center align-center" :color="iconColor({ r: 197, g: 202, b: 233 })">
            <p class="text-center">
                {{ who }}
            </p>
        </v-card>
    </v-col>
</template>

<script>
import { utilities } from '@/mixins/utilities.js'

    export default {
          mixins: [utilities],
        props: {
            who: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style lang="scss" scoped>
p {
    margin:0;
}
</style>