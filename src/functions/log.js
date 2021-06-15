const fs = require('fs')

function log(message, where = 'BOT', who = "") {
    let now = new Date()
    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }
    const date = now.toLocaleString('ru', options)
    const logString = `[${date}] (${where}) (${who}) ${message}`

    console.log(logString)
}

exports.log = log