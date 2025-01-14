<template>
    <content-base>
        <div class="row">
            <div class="col-3">
                <user-profile-info @followEvent="follow" @unfollowEvent="unfollow" :user="user"></user-profile-info>
                <user-profile-write v-if="is_me" @post_a_post="post_a_post"></user-profile-write>
            </div>
            <div class="col-9">
                <user-profile-posts :user="user" :posts="posts" @delete_a_post="delete_a_post"></user-profile-posts>
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
import { computed } from 'vue';

export default {
    name: "UserProfile",
    components: { ContentBase, UserProfilePosts, UserProfileInfo, UserProfileWrite },
    setup() {
        const route = useRoute();
        const userId = route.params.userId;
        const user = reactive({});
        const posts = reactive({});
        const store = useStore();

        let is_me = computed(() => userId == store.state.user.id);

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
        });

        const follow = () => {
            if (user.is_followed) return;
            user.is_followed = true;
            user.followCount ++;
        };

        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followCount --;
        };

        const post_a_post = (content)=> {
            posts.count ++;
            posts.posts.unshift({
                id: posts.count,
                userId: 1,
                content: content,
            })
        }

        function delete_a_post(post_id) {
            posts.posts = posts.posts.filter(post => post.id !== post_id);
            posts.count = posts.posts.length;
        }

        return {
            user,
            posts,
            follow,
            unfollow,
            post_a_post,
            delete_a_post,
            is_me
        }
    }
}
</script>

<style scoped>

</style>