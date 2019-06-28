<template>
  <div class="wrapper">
    <navbar />
    <sidebar />
    <div class="content-wrapper">
      <section class="content-header">
        <div class="container-fluid">
          <!-- <headerChild /> -->
          <!-- <div class="row mb-2"> -->
            <!-- <div class="col-sm-6">
            </div>
            <div class="col-sm-6">
              <breadcrumbs />
            </div> -->
          <!-- </div> -->
          <breadcrumbs />
        </div>
      </section>
      <section class="content">
        <div class="container-fluid">
          <child />
        </div>
      </section>
    </div>
    <!-- <footer class="main-footer">
      <div class="float-right d-none d-sm-inline">
        Anything you want
      </div>
      <strong>Copyright &copy; 2014-2018 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/NavbarAdminLte'
import Sidebar from '~/components/SidebarAdminLte'

export default {
  name: 'AdminLayout',

  components: {
    Navbar,
    Sidebar
  },

  computed: mapGetters({
    user: 'auth/user'
  }),
}
</script>
