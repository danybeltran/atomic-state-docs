import { useEffect } from 'react'

export const useCopyCode = () => {
  useEffect(() => {
    const highlights = document.getElementsByTagName('pre')

    for (const iterator of highlights) {
      const copy = document.createElement('button')
      copy.innerHTML = 'Copy'
      copy.className = 'btn-clip'
      copy.addEventListener('click', handleCopyClick)
      iterator.prepend(copy)
    }
  })
  // COPY IN CLIPBOARD
  function handleCopyClick(event) {
    const { children } = event.target.parentElement
    const { innerText } = children[1]
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(innerText)
    alert('It was copied to the clipboard')
  }
}
