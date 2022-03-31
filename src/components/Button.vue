<template>
    <v-col sm="12" md="6">
        <v-btn width="100%" class="pa-10" @click="$emit('change-open', whoAbbreviation)" :color="iconColor({ r: 197, g: 202, b: 233 })">
        <h1>
            {{ who }}
        </h1>
        </v-btn>
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
            whoAbbreviation: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>