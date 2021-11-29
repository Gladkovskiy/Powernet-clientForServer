export const delay = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1500)
  })
