import { reactive } from 'vue'

function calculateSizes(screen: number): string {
  if (screen >= 1700) return 'xl'
  if (screen >= 1200) return 'lg'
  if (screen >= 992) return 'md'
  if (screen >= 768) return 'sm'
  return 'xs'
}

const screen = reactive({
  width: window.innerWidth,
  size: calculateSizes(window.innerWidth),
})

window.addEventListener('resize', () => {
  screen.width = window.innerWidth
  screen.size = calculateSizes(window.innerWidth)
})

export default screen
