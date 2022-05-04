import { useEffect } from 'react'

export const useCopyCode = ({ SetShowAlert }) => {
  useEffect(() => {
    const highlights = document.getElementsByTagName('pre')

    for (const iterator of highlights) {
      const copy = document.createElement('button')
      copy.innerHTML =
        '<svg height="24px" width="24px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="copy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-copy fa-w-14 fa-2x"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM352 32.491a15.88 15.88 0 0 1 7.431 4.195l51.882 51.883A15.885 15.885 0 0 1 415.508 96H352V32.491zM288 464c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V144c0-8.822 7.178-16 16-16h80v240c0 26.51 21.49 48 48 48h112v48zm128-96c0 8.822-7.178 16-16 16H176c-8.822 0-16-7.178-16-16V48c0-8.822 7.178-16 16-16h144v72c0 13.2 10.8 24 24 24h72v240z" class=""></path></svg>'
      copy.className = 'btn-clip'
      copy.addEventListener('click', handleCopyClick)
      iterator.prepend(copy)
    }
  })
  // COPY IN CLIPBOARD
  function handleCopyClick(event) {
    const { children } = event.target.parentElement.parentElement
    const { innerText } = children[1]
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(innerText)
    SetShowAlert(true)
    setTimeout(() => {
      SetShowAlert(false)
    }, 2800)
  }
}
