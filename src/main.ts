import * as monaco from 'monaco-editor'
import initialCode from './initialCode'

const logsEl = document.getElementById('logs')!
const runBtn = document.getElementById('run-btn')!
const clearBtn = document.getElementById('clear-btn')!
const editorContainer = document.getElementById('editor')!

clearBtn.addEventListener('click', () => clearLogs())

function clearLogs() {
  logsEl.innerHTML = ''
}

function log(data: any) {
  const log = document.createElement('pre')

  if (typeof data === 'string') {
    log.innerText = data
    logsEl.appendChild(log)
  } else {
    log.innerText = JSON.stringify(data, null, 2)
    logsEl.appendChild(log)
  }

  logsEl.scrollTop = logsEl.scrollHeight
}

console.log = log

// Define the MonacoEnvironment object
self.MonacoEnvironment = {
  getWorkerUrl: function () {
    return '../node_modules/monaco-editor/min/vs/base/worker/workerMain.js'
  },
}

const result = document.createElement('div')
result.className = 'preview'
editorContainer.insertAdjacentElement('afterend', result)

if (editorContainer) {
  const editor = monaco.editor.create(editorContainer, {
    value: initialCode,
    language: 'html',
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
    fontSize: 12,
  })

  function saveContent() {
    const content = editor.getValue()
    result.innerHTML = content
    const userJsCode = result.getElementsByTagName('script')[0].innerText
    eval(userJsCode)
  }

  saveContent()

  runBtn.addEventListener('click', () => saveContent())
}
