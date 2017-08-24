<template>
	<header id="header">
        <div class="logo">
            <a href="" class="hidden-xs">
                桐享
                <span>系统管理</span>
            </a>
            <i class="logo__trigger zmdi zmdi-menu" data-mae-action="block-open" data-mae-target="#navigation"></i>
        </div>

        <ul class="top-menu">
            <li class="top-menu__alerts" data-mae-action="block-open" data-mae-target="#notifications" data-toggle="tab" data-target="#notifications__messages">
                <a href=""><i class="zmdi zmdi-notifications"></i></a>
            </li>
            <li class="top-menu__profile dropdown">
                <a data-toggle="dropdown" href="">
                    <img src="assets/components/header/profile.jpg" alt="">
                </a>

                <!-- <ul class="dropdown-menu pull-right dropdown-menu--icon">test -->
                    <!-- <li>
                        <a href="profile-about.html"><i class="zmdi zmdi-account"></i> View Profile</a>
                    </li>
                    <li>
                        <a href=""><i class="zmdi zmdi-input-antenna"></i> Privacy Settings</a>
                    </li>
                    <li>
                        <a href=""><i class="zmdi zmdi-settings"></i> Settings</a>
                    </li>
                    <li>
                        <a href=""><i class="zmdi zmdi-time-restore"></i> Logout</a>
                    </li> -->
                <!-- </ul> -->
            </li>
        </ul>

        <!-- <form class="top-search">
            <input type="text" class="top-search__input" placeholder="Search for people, files & reports">
            <i class="zmdi zmdi-search top-search__reset"></i>
        </form> -->
    </header>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
	#header {
		user-select: none;
		position: relative;
		z-index: 10;
		height: 60px;
		display: flex;
		justify-content: space-between;
		.logo {
			padding: 0 45px;
			line-height: 60px;
			a {
				color: #edeff0;
				font-weight: 700;
				font-size: 20px;
				span {
					font-weight: 400;
					font-size: 14px;
					color: #8a9ba1;
				}
			}
		}
	}
</style>
