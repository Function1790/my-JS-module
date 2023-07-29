const fs = require('fs')

async function readFile(path) {
    return await new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            resolve(data)
        })
    })
}

async function renderFile(path, replaceItems = {}) {
    var content = await readFile(path)
    for (i in replaceItems) {
        content = content.replace(`{{${i}}}`, replaceItems[i])
    }
    return content
}
