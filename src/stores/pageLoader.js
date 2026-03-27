import { ref } from 'vue'

export const pageLoader = ref({
  active: false,
  icon: '',
})

export const showPageLoader = (icon = '') => {
  pageLoader.value = {
    active: true,
    icon,
  }
}

export const hidePageLoader = () => {
  pageLoader.value = {
    ...pageLoader.value,
    active: false,
  }
}
