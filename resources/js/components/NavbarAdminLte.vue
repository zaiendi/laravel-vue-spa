<template>
  <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><fa icon="bars"/></a>
      </li>
      <locale-dropdown />
    </ul>
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
        <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
        <div class="input-group-append">
          <button class="btn btn-navbar">
            <fa icon="search" />
          </button>
        </div>
      </div>
    </form>
    <ul class="navbar-nav ml-auto">
      <li v-if="user" class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ user.name }}
        </a>
        <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
          <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
            <fa icon="cog" fixed-width />
            {{ $t('settings') }}
          </router-link>
          <div class="dropdown-divider" />
          <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
            <fa icon="sign-out-alt" fixed-width />
            {{ $t('logout') }}
          </a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  name: 'navbars',
  components: {
    LocaleDropdown
  },
  computed: mapGetters({
    user: 'auth/user'
  }),
  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>

</style>
