const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        "Halo perkenalkan nama saya Greed, siapa nama kamu?",
        `Halo ${data?.nama}, berapa usiamu?`,
        `ohhh ${data?.usia} ya, hobby kamu apa?`,
        `sama dong hobby ku juga ${data?.hobby}, sudah makan belum?`,
        `ohhh ${data?.makan} ya, udahan ya!`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    init++
    if (init === 1) {
        setTimeout(botDelay({ nama: jawaban.value }))
    } else if (init === 2) {
        setTimeout(botDelay({ usia: jawaban.value }))
    } else if (init === 3) {
        setTimeout(botDelay({ hobby: jawaban.value }))
    } else if (init === 4) {
        setTimeout(botDelay({ makan: jawaban.value }))
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({ userData: userData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1500])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `yaudah ${userData[0]} dadah ya!`
    jawaban.value = "OKE SIP!"
}

function botEnd() {
    window.location.reload()
}