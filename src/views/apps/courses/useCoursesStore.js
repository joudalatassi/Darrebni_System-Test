import { defineStore } from 'pinia'
import axios from '@axios'

export const useCoursesStore = defineStore('useCoursesStore', {
  actions: {
    // 👉 Fetch trainer data
    fetchCourse(params) { return axios.get('/apps/trainer/List', { params }) },

       // 👉 fetch all Specialization
       fetchAllCourses() {
        console.log("fetchAllCourses");
        return new Promise((resolve, reject) => {
          axios.get(`/course/`).then(response => resolve(response)).catch(error => reject(error))
        })
      },

    // 👉 Add Specialization
    addCourse(CourseData) {
      console.log("اسم المسار المضاف:" + CourseData.name)
      return new Promise((resolve, reject) => {
        axios.post('/course/', {
          name: CourseData.name,
          prefix:CourseData.prefix
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single Specialization
    fetchCourse(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/course/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 Delete Specialization
    deleteCourse(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`/course/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
