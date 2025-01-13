<template>
    <ContentBase>
        <div class="card" v-for="user in users" :key="user.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-1">
                        <img class="img-fluid" :src="user.photo">
                    </div>
                    <div class="col-11">
                        <div class="username">{{ user.username }}</div>
                        <div class="fans">{{ user.followerCount }}</div>
                    </div>
                </div>
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import $ from 'jquery';
import {ref} from 'vue';

export default {
    components: { ContentBase },
    name: "UserList",

    setup() {
        let users = ref([]);
        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/userlist/",
            type: "GET",
            success(resp) {
                users.value = resp;
            }
        });
        return {
            users
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 80%;
}

.username {
    font-size: larger;    
}

.fans {
    font-size: 12px;
}

.img-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.card {
    margin-top: 8px;
}

.card:hover {
    box-shadow: 2px 2px 10px lightgreen;
    transition: 300ms;
}
</style>