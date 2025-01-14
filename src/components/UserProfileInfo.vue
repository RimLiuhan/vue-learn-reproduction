<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3 img-field"><img :src="user.photo"></div>
                <div class="col-9">
                    <div class="username">{{user.username}}</div>
                    <div class="fans">粉丝数: {{user.followerCount}}</div>
                    <div>
                        <button type="button" class="btn btn-success btn-sm">+关注</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserProfileInfo",
    props: {
        user: {
            type: Object,
            required: true
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