
<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div>V</div>
        <div>S</div>
      </span>
      <span v-else>EOL Monitor</span>
    </h1>

    <SidebarLink to="/" icon="fas fa-home">Menu EOL</SidebarLink>
    <SidebarLink to="/menuNegocios" icon="fas fa-columns">Menu Negocios</SidebarLink>
    <SidebarLink to="/menuPagos" icon="fas fa-chart-bar">Menu Pagos</SidebarLink>
    <SidebarLink to="/menuPec" icon="fas fa-users">Menu PEC</SidebarLink>
    <SidebarLink to="/menuPapel" icon="fas fa-image">Menu Papel</SidebarLink>
    <SidebarLink to="/menuPeel" icon="fas fa-image">Menu PEEL</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>
<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<style>
:root {
  --sidebar-bg-color: #1b29e7;
  --sidebar-item-hover: #dd6616;
  --sidebar-item-active: #dd6616;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
