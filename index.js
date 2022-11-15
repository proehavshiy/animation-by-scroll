// task:  animate by scroll

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('.block.animate img').classList.add('toLeft')
      } else {
        document.querySelector('.block.animate img').classList.remove('toLeft')
      }
    })
}, {
  threshold: [.5]
})

animationObserver.observe(document.querySelector('.block.animate'));

