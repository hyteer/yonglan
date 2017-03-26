<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'/orders'" class="nav-link"><i class="fa fa-truck"></i> 订单管理 <span class="badge badge-info">NEW</span></router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/warehouse'" class="nav-link"><i class="fa fa-tasks"></i> 仓库管理 </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/users'" class="nav-link"><i class="fa fa-users"></i> 用户管理 </router-link>
        </li>
        <li class="nav-item">
          <router-link :to="'/settings'" class="nav-link"><i class="fa fa-gear"></i> 系统设置 <span class="badge badge-info">NEW</span></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

export default {
  name: 'sidebar',
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
