<template>
    <v-expand-transition>
        <div :key="who" class="mb-10">
            <h2 class="text-left teal--text mb-5">{{ title }}</h2>
            <v-row v-if="boardItems">
                <v-col cols="6" xs="6" sm="6" md="4" lg="2" v-for="(item, index) in withCountBoardItems" :key="index+item.soundClip">
                    <SoundCard
                    :displayText="item.displayText"
                    :soundClip="item.soundClip"
                    :audio="item.audio"
                    :isNew="item.new"
                    :who="who"
                    :counter="item.count"
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
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
    components: {
        SoundCard
    },
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
        return {
            boardItemCounts: []
        }
    },
    mounted() {
        this.getSoundData()
    },
    computed: {
        withCountBoardItems() {
            return [...this.boardItemCounts, ...this.boardItems ]
        }
    },
    methods: {
        async getSoundData() {
            const countQuery = query(collection(db, this.who), where("count", ">", 0));
            const querySnapshot = await getDocs(countQuery);
            
            querySnapshot.forEach((doc) => {   
                const id = doc.id
                const countObj = doc.data()         
                this.boardItemCounts.push({[id]: countObj})
                console.log({[id]: countObj})
            })
            console.log(this.withCountBoardItems)
        },
    },
}
</script>

<style lang="scss" scoped>

</style>