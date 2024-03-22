
<script setup lang="ts">
import { onMounted, ref } from "vue"
import { requiredValidator } from '@validators'

import { useSpecializationsStore } from "@/views/apps/specializetions/useSpecializationsStore"

const store = useSpecializationsStore()
const specArray = ref([]);
onMounted(() => {
 specArray.value = store.fetchAllSpecializetion()

})
// لتجريب الجدول
// let specArray =[{ name:"dmdjdn", id:11}, { name:"dmdjdn", id:11}]

const isDialogVisible = ref(false)
const Name = ref('')

const sendSpec = () => {
  store.addSpecialization({ name: Name.value })
  isDialogVisible.value = false
}
</script>

<template>
  <h1 class="mb-3">
    الاختصاصات
  </h1>

  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    
    <template #activator="{ props }">
      <VBtn
        v-bind="props"
        class="mb-8"
      >
        <span>إضافة اختصاص</span>
        <!--
          <IconBtn>
          <VIcon icon="tabler-circle-plus" />
          </IconBtn> 
        -->
      </VBtn>
    </template>

    <!-- Dialog close btn -->
    <DialogCloseBtn @click="isDialogVisible = !isDialogVisible" />

    <!-- Dialog Content -->
    <VCard title="إضافة اختصاص">
      <VCardText>
        <VRow>
          <VCol cols="12">
            <AppTextField
              v-model="Name"
              :rules="[requiredValidator]"
              label="اسم الاختصاص"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardText class="d-flex justify-end flex-wrap gap-3">
        <VBtn
          variant="tonal"
          color="secondary"
          @click="isDialogVisible = false"
        >
          إغلاق
        </VBtn>
        <VBtn @click="sendSpec">
          حفظ 
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
  <VTable class="text-no-wrap" >
    <thead>
      <tr>
        <th class="text-uppercase">
          الاختصاصات
        </th>
        <th class="text-uppercase text-center">
          id
        </th>
      </tr>
    </thead>

    <tbody v-for="item in specArray">
      <tr>
        <td>{{item.name}}</td>
        <td class="text-center">{{ item.id }}</td>
      </tr>
    </tbody>
  </VTable>
</template>

