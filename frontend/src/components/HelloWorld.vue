<template>
  <div class="container my-5">
    <div class="p-5 text-start bg-body-tertiary rounded-3">
      <svg
        class="bi mt-4 mb-3"
        style="color: var(--bs-indigo)"
        width="100"
        height="100"
      >
        <use xlink:href="#bootstrap" />
      </svg>
      <h1 class="text-body-emphasis">BOCOME A TRAVELER TODAY</h1>
      <p class="col-lg-8 fs-5 text-muted">
        This is a custom jumbotron featuring an SVG image at the top, some
        longer text that wraps early thanks to a responsive
        <code>.col-*</code> class, and a customized call to action.
      </p>
      <div class="d-inline-flex gap-2 mb-5">
        <button
          class="d-inline-flex align-items-center btn btn-success btn-lg px-4 rounded-pill"
          type="button"
        >
          Live Chat
          <svg class="bi ms-2" width="24" height="24">
            <use xlink:href="#arrow-right-short" />
          </svg>
        </button>
        <button
          class="btn btn-outline-secondary btn-lg px-4 rounded-pill"
          type="button"
        >
          Secondary link
        </button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.hello {
  margin-top: 60px;
}

.content {
  margin-top: 10px;
}
</style>
