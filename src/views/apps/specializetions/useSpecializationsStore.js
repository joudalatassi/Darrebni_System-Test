import { defineStore } from 'pinia'
import axios from '@axios'

export const useSpecializationsStore = defineStore('useSpecializationsStore', {
  actions: {
    // 👉 Fetch trainer data
    fetchSpecialization(params) { return axios.get('/apps/trainer/List', { params }) },

       // 👉 fetch all Specialization
       fetchAllSpecializetion() {
        console.log("fetchAllSpecializetion");
        return new Promise((resolve, reject) => {
          axios.get(`/specializetion/index/`).then(response => resolve(response)).catch(error => reject(error))
        })
      },

    // 👉 Add Specialization
    addSpecialization(SpecializationData) {
      console.log("اسم الاختصاص المضاف:" + SpecializationData.name)
      return new Promise((resolve, reject) => {
        axios.post('/specializetion/store', {
          name: SpecializationData.name,
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single Specialization
    fetchSpecializetion(id) {
      return new Promise((resolve, reject) => {
        axios.get(`/specializetion/index/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },

    // 👉 Delete Specialization
    deleteSpecializetion(id) {
      return new Promise((resolve, reject) => {
        axios.delete(`/specializetion/delete/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
