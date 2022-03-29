const resetScreenSize = (width = 1920, height = 1080, timer = 600) => {
  function init() {
    const el = document.getElementById('app')
    const hScale = window.innerHeight / height
    const wScale = window.innerWidth / width
    // console.log(window.innerHeight, window.innerWidth)
    el.style.transform = `scaleX(${wScale}) scaleY(${hScale})`
    el.style.marginLeft = `${-((width - window.innerWidth) / 2)}px`
    el.style.marginTop = `${-((height - window.innerHeight) / 2)}px`
  }

  let lazyFun

  window.onresize = () => {
    clearTimeout(lazyFun)
    lazyFun = setTimeout(() => {
      init()
    }, timer)
  }
  init()
}
// export default resetScreenSize
export { resetScreenSize }
