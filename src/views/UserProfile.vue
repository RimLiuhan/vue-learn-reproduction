<template>
    <content-base>
        <div class="row">
            <div class="col-3">
                <user-profile-info :user="user"></user-profile-info>
                <user-profile-write></user-profile-write>
            </div>
            <div class="col-9">
                <user-profile-posts></user-profile-posts>
            </div>
        </div>
    </content-base>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue'
import UserProfilePosts from '@/components/UserProfilePosts.vue'
import UserProfileInfo from '@/components/UserProfileInfo.vue'
import UserProfileWrite from '@/components/UserProfileWrite.vue'
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import { useStore } from 'vuex';
import $ from 'jquery';

export default {
    name: "UserProfile",
    components: { ContentBase, UserProfilePosts, UserProfileInfo, UserProfileWrite },
    setup() {
        const route = useRoute();
        const userId = route.params.userId;
        const user = reactive({});
        const posts = reactive({});
        const store = useStore();

        $.ajax({
            url:"https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "GET",
            data: {
                user_id: userId
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                user.id = resp.id;
                user.username = resp.username;
                user.photo = resp.photo;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
            }
        })

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "GET",
            data: {
                user_id: userId
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                posts.count = resp.length;
                posts.posts = resp;
            }
        })

        return {
            user,
            posts
        }
    }
}
</script>

<style scoped>

</style>