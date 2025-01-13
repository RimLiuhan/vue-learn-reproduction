<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3 img-field"><img src="https://cdn.acwing.com/media/user/profile/photo/266053_lg_134d78f78a.jpg"></div>
                <div class="col-9">
                    <div class="username">hhh</div>
                    <div class="fans">粉丝数: 111</div>
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