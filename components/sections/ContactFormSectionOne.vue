<script setup lang="ts">

</script>

<template>
  <div class="contact-form-wrap">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="contact-form bg-secondary m-0 mt-0">
            <div class="section-heading text-center">
              <h2>Have Questions? <br>Contact us!</h2>
            </div>

            <div class="divider-sm"></div>

            <!-- Contact Form -->
            <form action="#" method="get">
              <div class="row g-4 g-xl-5">
                <div class="col-12 col-lg-6">
                  <input type="text" class="form-control" placeholder="Your Name">
                </div>
                <div class="col-12 col-lg-6">
                  <input type="email" class="form-control" placeholder="Email Address">
                </div>
                <div class="col-12 col-lg-6">
                  <input type="text" class="form-control" placeholder="Your Phone">
                </div>
                <div class="col-12 col-lg-6">
                  <select class="form-control">
                    <option value="">Select Subject</option>
                    <option value="">Help &amp; Support</option>
                    <option value="">Features Inquiry</option>
                  </select>
                </div>
                <div class="col-12">
                           <textarea class="form-control" rows="20" cols="30"
                                     placeholder="Type your message"></textarea>
                </div>
                <div class="col-12">
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary rounded-pill"><span>SEND
                                    MESSAGE</span><span>SEND MESSAGE</span></button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>

</style>