<template>
  <div class="container-fluid login-page-heroes">
    <div class="container">
      <div class="row align-items-center justify-content-center mt-5">
        <div class="col-lg-6">
          <!-- Success Alert -->
          <transition name="fade">
            <div
              v-if="showSuccessAlert"
              class="alert alert-success d-flex align-items-center"
              role="alert"
            >
              <i class="bi bi-check-circle-fill me-3 ms-3"></i>
              <div>Login successful! Redirecting to dashboard...</div>
            </div>
          </transition>

          <!-- Error Alert -->
          <transition name="fade">
            <div
              v-if="showErrorAlert"
              class="alert alert-danger d-flex align-items-center"
              role="alert"
            >
              <i class="bi bi-x-circle-fill me-3 ms-3"></i>
              <div>Login failed! Please check your credentials.</div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="container">
      <div class="row justify-content-center align-items-center p-4">
        <div class="col-lg-4">
          <form @submit.prevent="handleSubmit">
            <div class="d-flex flex-column mb-4 logos">
              <div>
                <img src="../../../assets/logo.png" alt="Logo" width="120" />
              </div>
              <!-- <div>
                <img
                  alt="Pesona Linggarjati"
                  width="130px"
                  class="d-inline-block align-text-center"
                  src="../../../assets/pesonalinggarjati.png"
                />
              </div> -->
            </div>

            <div class="form-floating">
              <input
                class="form-control"
                id="floatingInput"
                v-model="email"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                v-model="password"
                placeholder="Password"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="rememberMe"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
            <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "LoginPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const rememberMe = ref(false);
    const router = useRouter();
    const store = useStore();
    const showSuccessAlert = ref(false);
    const showErrorAlert = ref(false);

    const handleSubmit = async () => {
      try {
        const credentials = { email: email.value, password: password.value };
        await store.dispatch("login", credentials);

        showSuccessAlert.value = true;
        showErrorAlert.value = false;

        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 2000);
      } catch (error) {
        // Show error alert
        showErrorAlert.value = true;

        // Hide success alert
        showSuccessAlert.value = false;

        console.error("Error:", error);
      }
    };

    return {
      email,
      password,
      rememberMe,
      handleSubmit,
      showSuccessAlert,
      showErrorAlert,
    };
  },
};
</script>

<style>
.login-page-heroes {
  height: 20vh;
  background-image: url("../../../assets/rafting_hd.webp");
  background-size: cover;
  display: flex;
}

.logos {
  background-image: url("../../../assets/rafting_hd.webp");
  padding: 20px;
  border-radius: 10px;
}

.alert-overlay {
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1050;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 767px) {
  .login-page-heroes {
    height: 15vh;
    box-shadow: 10px;
  }
}
</style>
