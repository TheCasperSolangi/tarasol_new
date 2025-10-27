
<script setup lang="ts">
import { ref } from 'vue';
import servicesData from '@/assets/data/services.json';

const services = ref(servicesData);

const truncateTitle = (title: string) => {
  return title.length > 30 ? title.slice(0, 27) + '...' : title;
};

const formData = ref({
  fullName: '',
  email: '',
  selectedProgram: '',
  message: ''
});

const submitForm = () => {
  console.log('Form submitted:', formData.value);
  // Add actual submission logic here if needed, e.g., API call
  formData.value = { fullName: '', email: '', selectedProgram: '', message: '' }; // Reset form
};
</script>

<template>
  <div class="service-details-wrapper">
    <div class="divider"></div>

    <div class="container">
      <div class="row g-4 g-xxl-5">
        <!-- Service Details Content -->
        <div class="col-12 col-lg-8">
          <div class="service-details-content">
            <img class="rounded-lg" src="@/assets/img/bg-img/33.jpg" alt="International Certifications">
            <h2>International Certifications</h2>
            <p>Our internationally recognized certifications such as <strong>Lean Six Sigma</strong>, <strong>Agile</strong>, and <strong>Scrum</strong> empower professionals to enhance their skills, boost career growth, and drive organizational excellence. These globally accepted credentials demonstrate your ability to lead change, improve efficiency, and deliver value in complex business environments.</p>
            
            <p>At Tara Solutions, we partner with global certification bodies to deliver high-quality training programs that combine theory with real-world application. Whether you aim to optimize processes with Lean Six Sigma or enhance team collaboration through Agile and Scrum, our courses prepare you for both certification and success in practice.</p>

            <ul class="list-unstyled">
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Gain globally recognized certifications in Lean Six Sigma, Agile, and Scrum.
              </li>

              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Learn practical frameworks for process improvement, project delivery, and leadership.
              </li>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Enhance your career prospects with skills in continuous improvement and agile management.
              </li>
            </ul>

            <div class="row g-4">
              <div class="col-6">
                <img src="@/assets/img/bg-img/34.jpg" alt="Lean Six Sigma Training">
              </div>
              <div class="col-6">
                <img src="@/assets/img/bg-img/35.jpg" alt="Agile & Scrum Workshop">
              </div>
            </div>

            <p>Our programs are designed for professionals from all industries who wish to achieve operational excellence and lead high-performing teams. With a balance of online flexibility and expert mentorship, Tara Solutions helps you unlock your potential and stand out in the global job market.</p>
          </div>

          <div class="divider-sm"></div>

          <!-- FAQ -->
          <div class="faq-accordion service-details-faq">
            <h3 class="mb-5">Frequently Asked Questions</h3>
            <div class="accordion" id="faqAccordion">

              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion1" aria-expanded="true" aria-controls="faqQuestion1">
                    What is the value of an international certification like Lean Six Sigma or Agile?
                  </button>
                </h2>
                <div id="faqQuestion1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    International certifications such as Lean Six Sigma, Agile, and Scrum are globally recognized
                    credentials that validate your professional competence. They enhance your ability to lead projects,
                    improve processes, and implement best practices in both local and international organizations.
                  </div>
                </div>
              </div>

              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion2" aria-expanded="false" aria-controls="faqQuestion2">
                    Do I need prior experience to enroll in these certifications?
                  </button>
                </h2>
                <div id="faqQuestion2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    No prior experience is required for entry-level certifications like Lean Six Sigma Yellow Belt or
                    Scrum Fundamentals. However, for advanced certifications such as Lean Six Sigma Black Belt or Agile
                    Project Management, prior project experience is highly recommended.
                  </div>
                </div>
              </div>

              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion3" aria-expanded="false" aria-controls="faqQuestion3">
                    Are these certifications recognized globally?
                  </button>
                </h2>
                <div id="faqQuestion3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Yes, certifications like Lean Six Sigma, Agile, and Scrum are recognized by top organizations around
                    the world. They are valued in industries such as IT, manufacturing, healthcare, and consulting, making
                    them an excellent investment for international career growth.
                  </div>
                </div>
              </div>

              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion4" aria-expanded="false" aria-controls="faqQuestion4">
                    How long does it take to complete the certification?
                  </button>
                </h2>
                <div id="faqQuestion4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    The duration varies depending on the certification level. For example, Lean Six Sigma Yellow Belt may
                    take 2–3 weeks, while Black Belt programs can take up to 8–12 weeks. Agile and Scrum certifications
                    are typically completed within a few weeks of focused learning and practice.
                  </div>
                </div>
              </div>

              <!-- Accordion -->
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                          data-bs-target="#faqQuestion5" aria-expanded="false" aria-controls="faqQuestion5">
                    Do you provide official certification and training materials?
                  </button>
                </h2>
                <div id="faqQuestion5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Yes, Tara Solutions provides official course materials, live instructor sessions, and practice
                    assessments in collaboration with recognized certification bodies. Upon successful completion, you'll
                    receive an accredited certificate that's valid worldwide.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="d-flex flex-column gap-5">
            <!-- Service Widget -->
            <div class="service-widget">
              <h4 class="mb-4">Service List</h4>

              <ul class="service-list">
                <li v-for="(service, index) in services" :key="index">
                  <div class="service-item">
                    {{ truncateTitle(service.Certificaciones) }}
                  </div>
                  <div class="service-description">
                    {{ service['Perfil de salida'] }}
                  </div>
                </li>
              </ul>
            </div>

            <!-- Booking Widget -->
            <div class="service-widget booking-widget">
              <h4 class="mb-4">Book your seat</h4>
              <form @submit.prevent="submitForm">
                <div class="mb-3">
                  <input 
                    type="text" 
                    class="form-control booking-input" 
                    placeholder="Full Name" 
                    v-model="formData.fullName" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <input 
                    type="email" 
                    class="form-control booking-input" 
                    placeholder="Email" 
                    v-model="formData.email" 
                    required
                  >
                </div>
                <div class="mb-3">
                  <select 
                    class="form-select booking-select" 
                    v-model="formData.selectedProgram" 
                    required
                  >
                    <option value="" disabled>Select Program</option>
                    <option 
                      v-for="(service, index) in services" 
                      :key="index" 
                      :value="service.Certificaciones"
                    >
                      {{ service.Certificaciones }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <textarea 
                    class="form-control booking-input" 
                    placeholder="Message" 
                    rows="4" 
                    v-model="formData.message" 
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-booking w-100">Send Response</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<style scoped>
.service-list {
  max-height: 250px;
  overflow-y: auto;
}

.service-list li {
  border: 1px solid rgba(254, 254, 254, 0.20);
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 12px;
  background-color: transparent;
  transition: all 0.3s ease;
}

.service-list li:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #C8C8CD;
}

.service-description {
  white-space: pre-line;
  padding: 12px 0 0 0;
  font-size: 0.9em;
  color: #C8C8CD;
}

/* Booking Widget Styles */
.booking-widget {
  background-color: #1A1A1A;
  padding: 40px 36px;
  border-radius: 10px;
  width: 100%;
}

.booking-widget h4 {
  color: #FEFEFE;
  margin-bottom: 24px;
}

.booking-input,
.booking-select {
  background-color: transparent;
  border: 1px solid rgba(254, 254, 254, 0.20);
  border-radius: 8px;
  color: #C8C8CD;
  padding: 12px 20px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.booking-input::placeholder {
  color: #C8C8CD;
  opacity: 0.7;
}

.booking-input:focus,
.booking-select:focus {
  background-color: transparent;
  border-color: #ECC80B;
  color: #C8C8CD;
  box-shadow: 0 0 0 0.2rem rgba(236, 200, 11, 0.15);
  outline: none;
}

/* Custom Select Dropdown Styling */
.booking-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23C8C8CD' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 12px;
  cursor: pointer;
}

.booking-select option {
  background-color: #1A1A1A;
  color: #C8C8CD;
  padding: 10px;
}

.booking-select:hover {
  border-color: #ECC80B;
}

/* Button Styling */
.btn-booking {
  background-color: #ECC80B;
  border: 1px solid #ECC80B;
  color: #0E0E0E;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-booking:hover {
  background-color: #ECB50B;
  border-color: #ECB50B;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(236, 200, 11, 0.3);
}

.btn-booking:focus {
  outline: none;
  box-shadow: 0 0 0 0.2rem rgba(236, 200, 11, 0.25);
}

/* Scrollbar Styling for Service List */
.service-list::-webkit-scrollbar {
  width: 6px;
}

.service-list::-webkit-scrollbar-track {
  background: rgba(254, 254, 254, 0.05);
  border-radius: 10px;
}

.service-list::-webkit-scrollbar-thumb {
  background: rgba(236, 200, 11, 0.5);
  border-radius: 10px;
}

.service-list::-webkit-scrollbar-thumb:hover {
  background: rgba(236, 200, 11, 0.7);
}
</style>