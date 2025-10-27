<script setup>
import { ref, onMounted } from 'vue'
import servicesDataRaw from '@/assets/data/executive.json'

// Nuxt sometimes imports JSON as a `default` property
const rawData = servicesDataRaw.default || servicesDataRaw

const services = ref([])
const expanded = ref(new Set())
const currentItem = ref(null)
const allCourses = ref([])

// Form data
const formData = ref({
  fullName: '',
  email: '',
  selectedCourse: '',
  message: ''
})

onMounted(() => {
  try {
    const categories = rawData?.['Ruta de Competencias Digitales']
    if (!categories || typeof categories !== 'object') {
      console.warn('⚠️ No valid data found in services.json:', rawData)
      services.value = []
      return
    }

    // transform JSON → [{ category, items }]
    const result = Object.entries(categories).map(([category, items]) => ({
      category,
      items: Array.isArray(items) ? items : [],
    }))

    services.value = result
    allCourses.value = result.flatMap(service => service.items)
    console.log('✅ Services loaded:', result)
  } catch (error) {
    console.error('❌ Error loading services.json:', error)
  }
})

// toggle expand/collapse
const toggleCategory = (category) => {
  if (expanded.value.has(category)) expanded.value.delete(category)
  else expanded.value.add(category)
}

const showDetails = (item) => {
  currentItem.value = item
}

const closeDialog = () => {
  currentItem.value = null
}

const truncate = (text, length = 60) =>
  text?.length > length ? text.slice(0, length) + '…' : text

const submitForm = () => {
  console.log('Form submitted:', formData.value)
  // Add actual submission logic here if needed, e.g., API call
  formData.value = { fullName: '', email: '', selectedCourse: '', message: '' } // Reset form
}
</script>

<template>
  <div class="service-details-wrapper">
    <div class="divider"></div>

    <div class="container">
      <div class="row g-4 g-xxl-5">
        <!-- Service Details Content -->
        <div class="col-12 col-lg-8">
          <div class="service-details-content">
            <img class="rounded-lg" src="@/assets/img/bg-img/36.jpg" alt="Executive Programs">
            <h2>Executive Programs</h2>
            <p>Our <strong>Executive Programs</strong> are tailored for business leaders, managers, and professionals who aspire to sharpen their strategic thinking, leadership capabilities, and decision-making skills. These programs are designed to bridge the gap between theory and practice, empowering executives to lead with confidence in dynamic global markets.</p>

            <p>At Tara Solutions, we collaborate with industry experts and global institutions to deliver transformative learning experiences. Each program blends academic insight with real-world business scenarios, helping participants develop practical skills that drive innovation and organizational growth.</p>

            <ul class="list-unstyled">
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Gain cutting-edge insights into leadership, strategy, and business transformation.
              </li>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Learn from experienced mentors and industry leaders through interactive sessions.
              </li>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                Strengthen your ability to navigate complex challenges and lead high-impact teams.
              </li>
            </ul>

            <div class="row g-4">
              <div class="col-6">
                <img src="@/assets/img/bg-img/37.jpg" alt="Leadership Development Program">
              </div>
              <div class="col-6">
                <img src="@/assets/img/bg-img/38.jpg" alt="Executive Strategy Workshop">
              </div>
            </div>

            <p>Whether you are an aspiring leader or an experienced executive, our programs provide a platform to refine your skills, expand your network, and achieve lasting impact. With Tara Solutions, you don't just learn — you evolve into a visionary leader ready for the future of business.</p>
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

        <!-- Sidebar: Service List & Book My Seat -->
        <div class="col-12 col-lg-4">
          <div class="d-flex flex-column gap-5">
            <!-- Service Widget -->
            <div class="service-widget">
              <h4 class="mb-4">Service List</h4>

              <ul class="service-list">
                <li v-for="(service, idx) in services" :key="idx">
                  <div class="category-title">{{ service.category }}</div>

                  <ul class="nested-list">
                    <li
                      v-for="(item, i) in service.items"
                      :key="i"
                      class="nested-item"
                    >
                      <div class="nested-content">
                        <div class="nested-title">{{ truncate(item.name) }}</div>
                        <button class="btn-detail" @click="showDetails(item)">
                          <span class="material-symbols-outlined">arrow_forward</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>

              <div v-if="!services.length" class="text-muted small mt-3">
                ⚠️ No data found — check your <code>services.json</code> path or structure.
              </div>
            </div>

            <!-- Book My Seat Widget -->
            <div class="service-widget booking-widget">
              <h4 class="mb-4">Book My Seat</h4>
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
                    placeholder="Email Address" 
                    v-model="formData.email"
                    required
                  >
                </div>
                <div class="mb-3">
                  <select 
                    class="form-select booking-select" 
                    v-model="formData.selectedCourse"
                    required
                  >
                    <option value="" disabled>Select Course</option>
                    <option 
                      v-for="(course, index) in allCourses" 
                      :key="index" 
                      :value="course.name"
                    >
                      {{ course.name }}
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
                <button type="submit" class="btn btn-booking w-100">Submit Response</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Course Details Dialog -->
    <div v-if="currentItem" class="modal fade show d-block" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ currentItem.name }}</h5>
            <button type="button" class="btn-close" @click="closeDialog" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>{{ currentItem.description || 'Descripción no disponible' }}</p>
            <div v-if="currentItem.career?.length" class="career-list">
              <strong>Perfiles:</strong>
              <ul>
                <li v-for="(role, j) in currentItem.career" :key="j">{{ role }}</li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeDialog">Close</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="currentItem" class="modal-backdrop fade show" @click="closeDialog"></div>
  </div>
</template>

<style scoped>
/* Service List Styling */
.service-list {
  max-height: 250px;
  overflow-y: auto;
  padding: 0;
  list-style: none;
  margin-bottom: 0;
}

.service-list > li {
  border: 1px solid rgba(254, 254, 254, 0.20);
  border-radius: 8px;
  margin-bottom: 12px;
  padding: 12px;
  background-color: transparent;
  transition: all 0.3s ease;
}

.service-list > li:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.category-title {
  font-weight: bold;
  color: #FEFEFE;
  margin-bottom: 12px;
  font-size: 14px;
}

/* Nested List Styling */
.nested-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nested-item {
  border: 1px solid rgba(254, 254, 254, 0.15);
  border-radius: 6px;
  padding: 10px;
  background-color: rgba(26, 26, 26, 0.3);
  transition: all 0.3s ease;
}

.nested-item:hover {
  background-color: rgba(236, 200, 11, 0.1);
  border-color: rgba(236, 200, 11, 0.3);
}

.nested-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.nested-title {
  color: #C8C8CD;
  font-size: 13px;
  flex: 1;
}

.btn-detail {
  background: transparent;
  border: none;
  color: #C8C8CD;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.btn-detail:hover {
  background-color: #ECC80B;
  color: #0E0E0E;
}

.btn-detail .material-symbols-outlined {
  font-size: 18px;
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
  width: 100%;
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

/* Modal Styling */
.modal-content {
  background-color: #1A1A1A;
  color: #C8C8CD;
  border: 1px solid rgba(254, 254, 254, 0.20);
}

.modal-header {
  border-bottom: 1px solid rgba(254, 254, 254, 0.20);
}

.modal-title {
  color: #FEFEFE;
}

.modal-footer {
  border-top: 1px solid rgba(254, 254, 254, 0.20);
}

.btn-close {
  filter: invert(1);
}

.btn-secondary {
  background-color: #C8C8CD;
  border-color: #C8C8CD;
  color: #0E0E0E;
}

.btn-secondary:hover {
  background-color: #FEFEFE;
  border-color: #FEFEFE;
}

.career-list {
  margin-top: 16px;
}

.career-list ul {
  padding-left: 20px;
  margin-top: 8px;
}

.career-list li {
  margin-bottom: 4px;
}
</style>