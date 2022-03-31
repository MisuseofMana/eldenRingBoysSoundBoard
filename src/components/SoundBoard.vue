<template>
    <v-expand-transition>
        <div :key="who" class="mb-10">
            <h2 class="text-left teal--text mb-5">{{ title }}</h2>
            <v-row v-if="boardItems">
                <v-col cols="6" xs="6" sm="6" md="4" lg="2" v-for="(item, index) in boardItems" :key="index+item.soundClip">
                    <SoundCard
                    :displayText="item.displayText"
                    :soundClip="item.soundClip"
                    :audio="item.audio"
                    :isNew="item.new"
                    :who="who"
                    :counter="getCounter(item.soundClip)"
                    class="mb-3 text-center"
                    />
                </v-col>
            </v-row>
        </div>
    </v-expand-transition>
</template>

<script>
import SoundCard from '@/components/SoundCard'

import { db } from '@/plugins/firebaseDb.js'
import { getDocs, collection } from "firebase/firestore"

export default {
    props: {
        title: {
            type: String,
            default:""
        },
        image: {
            type: String,
            default: ''
        },
        boardItems: {
            type: Array,
            default: () => []
        },
        opened: {
            type: Boolean,
            default: false,
        },
        who: {
            type: String,
            default: ''
        }
    },
    data() {
        return{
            counters: {}
        }
    },
    created() {
        this.getSoundData()
    },
    methods: {
    async getSoundData() {
      const query = await getDocs(collection(db, this.who))
      
      query.forEach((item) => {
            console.log(item)
          this.boardItems[item.id].count = item.data().count
      })
    },
        getCounter(clip) {
            return this.counters[clip]
        }
    },
    components: {
        SoundCard
    }
}
</script>

<style lang="scss" scoped>

</style>