<script setup lang="ts">
import { ref } from 'vue';
import imgBg from "@/assets/img/bg-img/12.jpg";

const swiperConfig = {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  },
};

// Form data
const formData = ref({
  name: '',
  email: '',
  message: ''
});

// Form states
const showSuccessMessage = ref(false);
const errors = ref({
  name: '',
  email: '',
  message: ''
});

// Validate email format
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate form
const validateForm = () => {
  let isValid = true;
  errors.value = { name: '', email: '', message: '' };

  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required';
    isValid = false;
  }

  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required';
    isValid = false;
  } else if (!isValidEmail(formData.value.email)) {
    errors.value.email = 'Please enter a valid email address';
    isValid = false;
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required';
    isValid = false;
  }

  return isValid;
};

// Handle form submission
const handleSubmit = (e: Event) => {
  e.preventDefault();
  
  if (validateForm()) {
    // Show success message
    showSuccessMessage.value = true;
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      message: ''
    };
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 5000);
  }
};
</script>

<template>
  <div class="testimonial-contact-wrapper">
    <div class="divider"></div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="section-heading">
            <h2 class="mb-0">Testimonials</h2>
          </div>

          <div class="divider-sm"></div>

          <!-- Testimonial Slide -->
          <ClientOnly>
            <div class="testimonial-slide">
              <div class="swiper testimonial-swiper">
                <!-- Quote Icon -->
                <svg class="mb-3" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"
                     fill="none">
                  <path
                      d="M16.2504 7.5C24.2359 7.5 30.0004 14.0926 30.0002 23.8541C29.9491 38.0369 19.2871 48.0646 3.90567 49.9903C2.47864 50.169 1.9284 48.1922 3.24251 47.6078C9.14448 44.9835 12.1253 41.6533 12.5103 38.3571C12.798 35.8944 11.4592 33.7372 9.77821 33.3333C5.42025 32.286 2.50038 26.859 2.50038 21.25C2.50038 13.6561 8.65647 7.5 16.2504 7.5Z"
                      fill="#ECC80B" />
                  <path
                      d="M46.2504 7.5C54.2359 7.5 60.0004 14.0926 60.0002 23.8541C59.9491 38.0369 49.2871 48.0646 33.9057 49.9903C32.4786 50.169 31.9284 48.1922 33.2425 47.6078C39.1445 44.9835 42.1253 41.6533 42.5103 38.3571C42.798 35.8944 41.4592 33.7372 39.7782 33.3333C35.4203 32.286 32.5004 26.859 32.5004 21.25C32.5004 13.6561 38.6565 7.5 46.2504 7.5Z"
                      fill="#ECC80B" />
                </svg>

                <swiper-container
                    v-bind="swiperConfig"
                    class="swiper-wrapper"
                >
           

              <!-- Testimonial Slide -->
                  <swiper-slide class="swiper-slide">
                    <!-- Rating Info -->
                    <div class="rating-info">
                      <!-- Average -->
                      <div class="rating-average">
                        <span>5.0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
                             fill="none">
                          <path
                              d="M4.84834 16.7794C4.09178 17.2358 3.15841 16.5586 3.35754 15.6978L4.31432 11.5616C4.39779 11.2007 4.27497 10.8233 3.99511 10.5806L0.784975 7.79752C0.117446 7.21879 0.473397 6.1221 1.35356 6.0457L5.59988 5.67709C5.96906 5.64505 6.29024 5.41147 6.43451 5.07014L8.07889 1.17942C8.42303 0.365148 9.57697 0.365148 9.92111 1.17941L11.5655 5.07014C11.7098 5.41147 12.0309 5.64505 12.4001 5.67709L16.6464 6.0457C17.5266 6.1221 17.8826 7.2188 17.215 7.79753L14.0049 10.5806C13.725 10.8233 13.6022 11.2007 13.6857 11.5616L14.6425 15.6978C14.8416 16.5586 13.9082 17.2358 13.1517 16.7794L9.51653 14.5866C9.19884 14.3949 8.80116 14.3949 8.48347 14.5866L4.84834 16.7794Z"
                              fill="#0E0E0E" />
                        </svg>
                      </div>
                      <!-- Logo -->
                      <div class="company-logo">
                        <img src="" alt="">
                        <span>|</span>
                        <span>54 Reviews</span>
                      </div>
                    </div>
                    <p>"The Agile and Scrum Master Certification course was exceptional. The trainer's approach was practical, engaging, and directly relevant to our corporate transformation journey."</p>
                    <div class="border-line"></div>
                    <div class="testimonial-info d-flex align-items-center">
                      <img src="https://cdn.britannica.com/80/263480-050-9EAEE2A9/alia-bhatt-on-the-red-carpet-at-the-2024-met-gala-may-6-2024-new-york-city.jpg" alt="">
                      <div>
                        <h4>Isabella Karlos</h4>
                        <p class="mb-0">Project Manager</p>
                      </div>
                    </div>
                  </swiper-slide>

                   <!-- Testimonial Slide -->
                  <swiper-slide class="swiper-slide">
                    <!-- Rating Info -->
                    <div class="rating-info">
                      <!-- Average -->
                      <div class="rating-average">
                        <span>5.0</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17"
                             fill="none">
                          <path
                              d="M4.84834 16.7794C4.09178 17.2358 3.15841 16.5586 3.35754 15.6978L4.31432 11.5616C4.39779 11.2007 4.27497 10.8233 3.99511 10.5806L0.784975 7.79752C0.117446 7.21879 0.473397 6.1221 1.35356 6.0457L5.59988 5.67709C5.96906 5.64505 6.29024 5.41147 6.43451 5.07014L8.07889 1.17942C8.42303 0.365148 9.57697 0.365148 9.92111 1.17941L11.5655 5.07014C11.7098 5.41147 12.0309 5.64505 12.4001 5.67709L16.6464 6.0457C17.5266 6.1221 17.8826 7.2188 17.215 7.79753L14.0049 10.5806C13.725 10.8233 13.6022 11.2007 13.6857 11.5616L14.6425 15.6978C14.8416 16.5586 13.9082 17.2358 13.1517 16.7794L9.51653 14.5866C9.19884 14.3949 8.80116 14.3949 8.48347 14.5866L4.84834 16.7794Z"
                              fill="#0E0E0E" />
                        </svg>
                      </div>
                      <!-- Logo -->
                      <div class="company-logo">
                        <img src="@/assets/img/bg-img/27.png" alt="">
                        <span>|</span>
                        <span>54 Reviews</span>
                      </div>
                    </div>

                    <p>"Our Lean Six Sigma Green Belt training with them completely transformed our internal process efficiency. The instructor's real-world case studies and personalized mentoring made the learning truly impactful."</p>
                    <div class="border-line"></div>
                    <div class="testimonial-info d-flex align-items-center">
                      <img src="@/assets/img/bg-img/16.png" alt="">
                      <div>
                        <h4>Daniyel Karlos</h4>
                        <p class="mb-0">Operations Director</p>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper-container>

                <!-- If we need navigation buttons -->
                <div class="swiper-navigation-container">
                  <div class="swiper-button-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                         fill="none">
                      <path
                          d="M3.22024 13.8603L10.5175 21.1576C10.746 21.3861 11.0559 21.5144 11.379 21.5144C11.7021 21.5144 12.012 21.3861 12.2405 21.1576C12.469 20.9291 12.5973 20.6192 12.5973 20.2961C12.5973 19.973 12.469 19.6631 12.2405 19.4346L7.0199 14.216H21.9185C22.2411 14.216 22.5505 14.0879 22.7785 13.8598C23.0066 13.6317 23.1348 13.3224 23.1348 12.9998C23.1348 12.6773 23.0066 12.3679 22.7785 12.1398C22.5505 11.9117 22.2411 11.7836 21.9185 11.7836H7.0199L12.2385 6.56199C12.467 6.33351 12.5953 6.02362 12.5953 5.7005C12.5953 5.37738 12.467 5.0675 12.2385 4.83902C12.01 4.61054 11.7001 4.48218 11.377 4.48218C11.0539 4.48218 10.744 4.61054 10.5155 4.83902L3.21821 12.1363C3.10481 12.2495 3.01487 12.3839 2.95357 12.5319C2.89227 12.6799 2.86081 12.8385 2.861 12.9987C2.86119 13.1589 2.89302 13.3175 2.95467 13.4654C3.01632 13.6132 3.10657 13.7474 3.22024 13.8603Z"
                          fill="#0E0E0E" />
                    </svg>
                  </div>

                  <div class="swiper-button-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                         fill="none">
                      <path
                          d="M22.7798 13.8603L15.4825 21.1576C15.254 21.3861 14.9441 21.5144 14.621 21.5144C14.2979 21.5144 13.988 21.3861 13.7595 21.1576C13.531 20.9291 13.4027 20.6192 13.4027 20.2961C13.4027 19.973 13.531 19.6631 13.7595 19.4346L18.9801 14.216H4.08145C3.75889 14.216 3.44954 14.0879 3.22146 13.8598C2.99337 13.6317 2.86523 13.3224 2.86523 12.9998C2.86523 12.6773 2.99337 12.3679 3.22146 12.1398C3.44954 11.9117 3.75889 11.7836 4.08145 11.7836H18.9801L13.7615 6.56199C13.533 6.33351 13.4047 6.02362 13.4047 5.7005C13.4047 5.37738 13.533 5.0675 13.7615 4.83902C13.99 4.61054 14.2999 4.48218 14.623 4.48218C14.9461 4.48218 15.256 4.61054 15.4845 4.83902L22.7818 12.1363C22.8952 12.2495 22.9851 12.3839 23.0464 12.5319C23.1077 12.6799 23.1392 12.8385 23.139 12.9987C23.1388 13.1589 23.107 13.3175 23.0453 13.4654C22.9837 13.6132 22.8934 13.7474 22.7798 13.8603Z"
                          fill="#0E0E0E" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </ClientOnly>
        </div>
      </div>
    </div>

    <!-- Contact Wrapper -->
    <div class="contact-wrapper" :style="{backgroundImage: `url(${imgBg})`}">
      <div class="contact-form">
        <h3 class="mb-4">Get in Touch</h3>
        
        <!-- Success Message -->
        <div v-if="showSuccessMessage" class="alert alert-success" role="alert">
          <strong>Thank you for getting in touch with us!</strong> We'll get back to you soon.
        </div>
        
        <!-- Form -->
        <form @submit="handleSubmit" class="mt-3">
          <div class="form-group">
            <input 
              type="text" 
              v-model="formData.name"
              class="form-control" 
              :class="{ 'is-invalid': errors.name }"
              placeholder="Your Name"
            >
            <div v-if="errors.name" class="invalid-feedback">
              {{ errors.name }}
            </div>
          </div>

          <div class="form-group">
            <input 
              type="email" 
              v-model="formData.email"
              class="form-control" 
              :class="{ 'is-invalid': errors.email }"
              placeholder="Email Address"
            >
            <div v-if="errors.email" class="invalid-feedback">
              {{ errors.email }}
            </div>
          </div>

          <div class="form-group">
            <textarea 
              v-model="formData.message"
              class="form-control" 
              :class="{ 'is-invalid': errors.message }"
              placeholder="Message" 
              id="message"
            ></textarea>
            <div v-if="errors.message" class="invalid-feedback">
              {{ errors.message }}
            </div>
          </div>

          <button type="submit" class="btn btn-primary mt-3">
            <span>SEND MESSAGE</span>
            <span>SEND MESSAGE</span>
          </button>
        </form>
      </div>
    </div>

    <div class="divider d-none d-lg-block"></div>
  </div>
</template>

<style scoped>
.alert {
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.form-group {
  margin-bottom: 1rem;
}

.form-control.is-invalid {
  border-color: #dc3545;
  padding-right: calc(1.5em + 0.75rem);
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
}
</style>