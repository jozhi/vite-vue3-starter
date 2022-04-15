// eslint-disable-next-line consistent-return
const getParam = (name: String, href: String = window.location.href) => {
  const after = href.split('?')[1]
  if (after) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
    const r = after.match(reg)
    if (r != null) {
      return decodeURIComponent(r[2])
    }
    return null
  }
}

export default getParam
