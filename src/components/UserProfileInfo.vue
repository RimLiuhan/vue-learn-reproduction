<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3 img-field"><img :src="user.photo"></div>
                <div class="col-9">
                    <div class="username">{{user.username}}</div>
                    <div class="fans">粉丝数: {{user.followerCount}}</div>
                    <div>
                        <button @click="follow" v-if="!user.is_followed" type="button" class="btn btn-success btn-sm">+关注 </button>
                        <button @click="unfollow"  v-if="user.is_followed" type="button" class="btn btn-success btn-sm">取消关注</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import { useStore } from 'vuex';

export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    setup(props, context)  {
        const store = useStore();
        const follow = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: props.user.id
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        console.log("关注");
                        context.emit("followEvent");
                    }
                }
            })
        };

        const unfollow = () => {
            $.ajax({
                url: "https://app165.acapp.acwing.com.cn/myspace/follow/",
                type: "POST",
                data: {
                    target_id: props.user.id
                },
                headers: {
                    'Authorization': "Bearer " + store.state.user.access,
                },
                success(resp) {
                    if (resp.result === "success") {
                        console.log("取消关注");
                        context.emit("unfollowEvent");
                    }
                }
            })
        };

        return {
            follow,
            unfollow
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
</style>