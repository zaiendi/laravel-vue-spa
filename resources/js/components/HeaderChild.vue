<template>
  <div class="row mb-2">
    <slot>
      <div class="col-sm-6">
        <h1>Inline Charts</h1>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item active">Inline Charts</li>
        </ol>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'HeaderChild'
}
</script>
