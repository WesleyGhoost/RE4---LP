const scrollTop = document.getElementById('scroll-top')
const scrollTopics = document.getElementById('scroll-topics')
const scrollTrailer = document.getElementById('scroll-trailer')
const scrollAbout = document.getElementById('scroll-about')
const scrollCharacter = document.getElementById('scroll-character')
const scrollLocation = document.getElementById('scroll-location')
const scrollGameplay = document.getElementById('scroll-gameplay')
const scrollDLC = document.getElementById('scroll-dlc')
const scrollProduct = document.getElementById('scroll-product')

const scrollSeparateWays = document.getElementById('scroll-separate_ways')
const scrollMercenaries = document.getElementById('scroll-mercenaries')
const scrollVr = document.getElementById('scroll-vr')

const scrollTopicProduct = document.getElementById('scroll_topic-product')
const scrollTopicMercenaries = document.getElementById('scroll_topic-mercenaries')
const scrollTopicVr = document.getElementById('scroll_topic-vr-mode')

const scrollProductSeparateWays = document.getElementById('content_button-separate')

scrollTop.addEventListener('click', () => {
    document.getElementById('intro').scrollIntoView({ behavior: 'smooth' })
})

scrollTopics.addEventListener('click', () => {
    document.getElementById('topics').scrollIntoView({ behavior: 'smooth' })
})

scrollTrailer.addEventListener('click', () => {
    document.getElementById('trailer').scrollIntoView({ behavior: 'smooth' })
})

scrollAbout.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
})

scrollCharacter.addEventListener('click', () => {
    document.getElementById('character').scrollIntoView({ behavior: 'smooth' })
})

scrollLocation.addEventListener('click', () => {
    document.getElementById('location').scrollIntoView({ behavior: 'smooth' })
})

scrollGameplay.addEventListener('click', () => {
    document.getElementById('gameplay').scrollIntoView({ behavior: 'smooth' })
})

scrollDLC.addEventListener('click', () => {
    document.getElementById('dlc').scrollIntoView({ behavior: 'smooth' })
})

scrollProduct.addEventListener('click', () => {
    document.getElementById('product').scrollIntoView({ behavior: 'smooth' })
})

scrollSeparateWays.addEventListener('click', () => {
    document.getElementById('separate-ways').scrollIntoView({ behavior: 'smooth' })
})

scrollMercenaries.addEventListener('click', () => {
    document.getElementById('mercenaries').scrollIntoView({ behavior: 'smooth' })
})

scrollVr.addEventListener('click', () => {
    document.getElementById('vr-mode').scrollIntoView({ behavior: 'smooth' })
})

scrollTopicProduct.addEventListener('click', () => {
    document.getElementById('product').scrollIntoView({ behavior: 'smooth' })
})

scrollTopicMercenaries.addEventListener('click', () => {
    document.getElementById('mercenaries').scrollIntoView({ behavior: 'smooth' })
})

scrollTopicVr.addEventListener('click', () => {
    document.getElementById('vr-mode').scrollIntoView({ behavior: 'smooth' })
})

scrollProductSeparateWays.addEventListener('click', () => {
    document.getElementById('separate-ways').scrollIntoView({ behavior: 'smooth' })
})