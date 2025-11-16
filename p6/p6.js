const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loader = document.getElementById("loader")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Halo perkenalkan nama saya Greed, siapa nama kamu?",
        `Halo ${data?.nama}, berapa usiamu?`,
        `ohhh ${data?.usia} ya, hobby kamu apa?`,
        `sama dong hobby ku juga ${data?.hobby}, sudah makan belum?`,
        `ohhh ${data?.makan} ya oke, kita udahan ya!`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert ("silahkan diisi jangan dibiarkan kosong 😊")
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
    loader.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loader.style.display = "none"
        container[0].style.filter = "none"
    }, [1500])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `yaudah ${userData[0]} dadah ya!`
    jawaban.value = "OKE SIP!"
}

function botEnd() {
    alert(`Makasi ${userData[0]} sudah berkunjung ke halaman web ini sampai jumpa lagi`)
    window.location.reload()
}