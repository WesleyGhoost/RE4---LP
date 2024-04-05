document.addEventListener('DOMContentLoaded', function () {
    const standardButton = document.getElementById('standard')
    const goldButton = document.getElementById('gold')
    const separateWaysButton = document.getElementById('separate')

    const ps5Button = document.getElementById('ps5')
    const ps4Button = document.getElementById('ps4')
    const xboxButton = document.getElementById('xbox')
    const steamButton = document.getElementById('steam')
    const upgradeButton = document.getElementById('upgrade_button')

    const editionDigital = document.getElementById('edition_digital')
    const editionTitle = document.getElementById('edition_title')
    const editionImg = document.getElementById('edition_img')
    const editionContents = document.getElementById('edition_contents')
    const editionExtras = document.getElementById('edition_extras-details')
    const editionUpgrade = document.getElementById('edition_upgrade')
    const editionRewards = document.getElementById('edition_early-rewards')

    const store = document.getElementById("store")
    const storeLink = document.getElementById("store_link")

    const contentList = document.getElementById('content_list')
    const contentTitle = document.getElementById('content_title')
    const contentButtonSeparate = document.getElementById('content_button-separate')
    const contentButtonPackage = document.getElementById('content_button-package')

    const extrasDetailsFirstP = document.getElementById('extras-details_first-modified-para')
    const extrasDetailsSecondP = document.getElementById('extras-details_second-modified-para')
    const extrasDetailsThirdP = document.getElementById('extras-details_third-modified-para')

    const secondItem = document.createElement('li')
    const thirdItem = document.createElement('li')
    const secondItemText = document.createTextNode('Separate Ways')
    const thirdItemText = document.createTextNode('Extra DLC Pack')
    secondItem.appendChild(secondItemText)
    thirdItem.appendChild(thirdItemText)

    const handlePS5Button = () => {
        ps5Button.style.backgroundColor = 'rgb(186, 0, 0)'
        ps4Button.style.backgroundColor = 'black'
        xboxButton.style.backgroundColor = 'black'
        steamButton.style.backgroundColor = 'black'
        editionImg.src = "./imgs/standard_img-ps5.jpg"
        editionContents.style.height = 'auto'
        editionUpgrade.style.display = "flex"
        editionRewards.style.display = "flex"
        store.innerHTML = "Playstation Store"
        storeLink.style.backgroundColor = "rgb(0, 76, 255)"
        storeLink.href = "https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RMAINGAME0000"

        if (goldButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/ge_img-ps5.jpg"
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4GOLDEDITION00'
            contentList.appendChild(secondItem)
            contentList.appendChild(thirdItem)
            contentButtonSeparate.style.display = 'flex'
            contentButtonPackage.style.display = 'flex'
            editionExtras.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'block'
            extrasDetailsFirstP.innerHTML = 'Observação: você deve estar conectado à PlayStation™Network para resgatar conteúdos.'
            extrasDetailsSecondP.style.display = 'block'
            extrasDetailsSecondP.innerHTML = 'A compra de conteúdo lhe dará a licença para ele das versões PlayStation 5 e PlayStation 4.'
            extrasDetailsThirdP.style.display = 'block'
            extrasDetailsThirdP.innerHTML = 'Comprar conteúdo para a versão do PlayStation®4 e atualizar o jogo para a versão do PlayStation®5 exigirá que você baixe novamente esse conteúdo com a mesma conta da PlayStation™Network.'

            if (window.screen.width >= 1024) {
                upgradeButton.style.bottom = '40px'
            } else {
                upgradeButton.style.bottom = ''
            }
        }

        else if (standardButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/standard_img-ps5.jpg"
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDXEDITION000'
            contentList.removeChild(secondItem)
            editionExtras.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'none'
            extrasDetailsSecondP.style.display = 'none'
            extrasDetailsThirdP.style.display = 'none'

            if (window.screen.width >= 1024) {
                upgradeButton.style.bottom = '20px'
            } else {
                upgradeButton.style.bottom = ''
            }
        }

        else if (separateWaysButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/separate-ways_img.jpg"
            editionRewards.style.display = "none"
            editionTitle.innerHTML = "Separate Ways"
            editionUpgrade.style.display = 'none'
            editionExtras.style.display = 'none'
            contentTitle.style.display = 'none'
            contentList.style.display = 'none'
        }
    }

    const handlePS4Button = () => {
        ps4Button.style.backgroundColor = 'rgb(186, 0, 0)'
        ps5Button.style.backgroundColor = 'black'
        xboxButton.style.backgroundColor = 'black'
        steamButton.style.backgroundColor = 'black'
        editionImg.src = "./imgs/standard_img-ps4.jpg"
        editionContents.style.height = 'auto'
        editionUpgrade.style.display = "flex"
        editionRewards.style.display = "flex"
        store.innerHTML = "Playstation Store"
        storeLink.style.backgroundColor = "rgb(0, 76, 255)"
        storeLink.href = "https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RMAINGAME0000"

        if (goldButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/ge_img-ps4.jpg"
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4GOLDEDITION00'
            contentList.appendChild(secondItem)
            contentList.appendChild(thirdItem)
            extrasDetailsFirstP.style.display = 'block'
            extrasDetailsFirstP.innerHTML = 'Nota: É preciso estar conectado à PlayStation™Network para resgatar o conteúdo do Pacote de DLC Extra.'
            extrasDetailsSecondP.style.display = 'block'
            extrasDetailsSecondP.innerHTML = 'A compra de conteúdo lhe dará a licença para ele das versões PlayStation 5 e PlayStation 4.'
            extrasDetailsThirdP.style.display = 'block'
            extrasDetailsThirdP.innerHTML = 'Comprar conteúdo para a versão do PlayStation®4 e atualizar o jogo para a versão do PlayStation®5 exigirá que você baixe novamente esse conteúdo com a mesma conta da PlayStation™Network.'

            if (window.screen.width >= 1024) {
                upgradeButton.style.bottom = '40px'
            } else {
                upgradeButton.style.bottom = ''
            }
        }

        else if (standardButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/standard_img-ps4.jpg"
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDXEDITION000'
            contentList.removeChild(secondItem)
            editionExtras.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'none'
            extrasDetailsSecondP.style.display = 'none'
            extrasDetailsThirdP.style.display = 'none'

            if (window.screen.width >= 1024) {
                upgradeButton.style.bottom = '20px'
            } else {
                upgradeButton.style.bottom = ''
            }
        }

        else if (separateWaysButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/separate-ways_img.jpg"
            editionRewards.style.display = "none"
            editionTitle.innerHTML = "Separate Ways"
            editionUpgrade.style.display = 'none'
            editionExtras.style.display = 'none'
            contentTitle.style.display = 'none'
            contentList.style.display = 'none'
        }
    }

    const handleXboxButton = () => {
        xboxButton.style.backgroundColor = 'rgb(186, 0, 0)'
        ps4Button.style.backgroundColor = 'black'
        ps5Button.style.backgroundColor = 'black'
        steamButton.style.backgroundColor = 'black'
        editionContents.style.height = '70%'
        editionImg.src = "./imgs/standard_img-xboxxs.jpg"
        editionUpgrade.style.display = "none"
        editionRewards.style.display = "none"
        store.innerHTML = "Xbox Games Store"
        storeLink.style.backgroundColor = "green"
        storeLink.href = "https://www.xbox.com/pt-br/games/store/resident-evil-4/9N7JCPPCPN37/"

        if (goldButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/ge_img-xboxxs.jpg"
            editionContents.style.height = '75%'
            storeLink.href = 'https://www.xbox.com/pt-BR/games/store/resident-evil-4-gold-edition/9P2G4PSMPBR7/'
            contentList.appendChild(secondItem)
            contentList.appendChild(thirdItem)
            editionExtras.style.display = 'flex'
            extrasDetailsFirstP.innerHTML = 'Nota: É preciso estar conectado à Xbox Live para resgatar conteúdos'
            extrasDetailsSecondP.style.display = 'none'
            extrasDetailsThirdP.style.display = 'none'
        }

        else if (standardButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/standard_img-xboxxs.jpg"
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDXEDITION000'
            contentList.removeChild(secondItem)
            editionExtras.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'none'
            extrasDetailsSecondP.style.display = 'none'
            extrasDetailsThirdP.style.display = 'none'
        }

        else if (separateWaysButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/separate-ways_img.jpg"
            editionRewards.style.display = "none"
            editionTitle.innerHTML = "Separate Ways"
            editionUpgrade.style.display = 'none'
            editionExtras.style.display = 'none'
            editionExtras.style.display = 'none'
            contentTitle.style.display = 'none'
            contentList.style.display = 'none'
        }
    }

    const handleSteamButton = () => {
        steamButton.style.backgroundColor = 'rgb(186, 0, 0)'
        ps4Button.style.backgroundColor = 'black'
        ps5Button.style.backgroundColor = 'black'
        xboxButton.style.backgroundColor = 'black'
        editionContents.style.height = '70%'
        editionImg.src = "./imgs/standard_img-steam.jpg"
        editionUpgrade.style.display = "none"
        editionRewards.style.display = "none"
        store.innerHTML = "Steam"
        storeLink.style.backgroundColor = "grey"
        storeLink.href = "https://store.steampowered.com/agecheck/app/2050650/"

        if (goldButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/ge_img-steam.jpg"
            editionContents.style.height = '75%'
            storeLink.href = 'https://store.steampowered.com/agecheck/app/2050650/'
            contentList.appendChild(secondItem)
            contentList.appendChild(thirdItem)
            editionExtras.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'none'
            extrasDetailsSecondP.style.display = 'none'
            extrasDetailsThirdP.style.display = 'none'
        }

        else if (standardButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/standard_img-steam.jpg"
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDXEDITION000'
            contentList.removeChild(secondItem)
            editionExtras.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'none'
            extrasDetailsSecondP.style.display = 'none'
            extrasDetailsThirdP.style.display = 'none'
        }

        else if (separateWaysButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/separate-ways_img.jpg"
            editionRewards.style.display = "none"
            editionTitle.innerHTML = "Separate Ways"
            editionUpgrade.style.display = 'none'
            editionExtras.style.display = 'none'
            contentTitle.style.display = 'none'
            contentList.style.display = 'none'
        }
    }

    const handleStandardButton = () => {
        goldButton.style.backgroundColor = 'black'
        standardButton.style.backgroundColor = 'rgb(186, 0, 0)'
        separateWaysButton.style.backgroundColor = 'black'
        editionTitle.innerHTML = "Edição Padrão"
        contentTitle.style.display = 'block'
        contentTitle.innerHTML = "[Edição Padrão Conteúdos incluídos]"
        contentList.style.display = 'block'
        editionExtras.style.display = 'flex'
        contentButtonSeparate.style.display = 'none'
        contentButtonPackage.style.display = 'none'
        extrasDetailsFirstP.style.display = 'none'
        extrasDetailsSecondP.style.display = 'none'
        extrasDetailsThirdP.style.display = 'none'

        if (ps5Button.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/standard_img-ps5.jpg"
            editionRewards.style.display = "flex"
            editionDigital.style.height = 'auto'
            editionUpgrade.style.display = 'flex'
            editionContents.style.display = 'flex'
            contentTitle.style.display = 'flex'
            contentList.style.display = 'flex'
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RMAINGAME0000'
            contentList.removeChild(secondItem)
            contentList.removeChild(thirdItem)

            if (window.screen.width >= 1024) {
                upgradeButton.style.bottom = '20px'
            } else {
                upgradeButton.style.bottom = ''
            }
        }

        else if (ps4Button.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/standard_img-ps4.jpg"
            editionRewards.style.display = "flex"
            editionDigital.style.height = 'auto'
            editionUpgrade.style.display = 'flex'
            editionContents.style.display = 'flex'
            contentTitle.style.display = 'flex'
            contentList.style.display = 'flex'
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RMAINGAME0000'
            contentList.removeChild(secondItem)
            contentList.removeChild(thirdItem)

            if (window.screen.width >= 1024) {
                upgradeButton.style.bottom = '20px'
            } else {
                upgradeButton.style.bottom = ''
            }
        }

        else if (xboxButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/standard_img-xboxxs.jpg"
            editionRewards.style.display = "none"
            editionDigital.style.height = 'auto'
            editionExtras.style.display = 'flex'
            editionContents.style.height = '70%'
            editionContents.style.display = 'flex'
            contentTitle.style.display = 'flex'
            contentList.style.display = 'flex'
            storeLink.href = 'https://www.xbox.com/pt-br/games/store/resident-evil-4/9N7JCPPCPN37/'
            contentList.removeChild(secondItem)
            contentList.removeChild(thirdItem)
        }

        else if (steamButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/standard_img-steam.jpg"
            editionRewards.style.display = "none"
            editionDigital.style.height = 'auto'
            editionExtras.style.display = 'flex'
            editionContents.style.height = '70%'
            editionContents.style.display = 'flex'
            contentTitle.style.display = 'flex'
            contentList.style.display = 'flex'
            storeLink.href = 'https://store.steampowered.com/agecheck/app/2050650/'
            contentList.removeChild(secondItem)
            contentList.removeChild(thirdItem)
        }
    }

    const handleGoldButton = () => {
        goldButton.style.backgroundColor = 'rgb(186, 0, 0)'
        standardButton.style.backgroundColor = 'black'
        separateWaysButton.style.backgroundColor = 'black'
        editionTitle.innerHTML = "Gold Edition"
        contentTitle.style.display = 'block'
        contentTitle.innerHTML = "[Conteúdo incluso na Gold Edition]"
        contentList.style.display = 'block'
        contentButtonSeparate.style.display = 'flex'
        contentButtonPackage.style.display = 'flex'

        if (ps5Button.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/ge_img-ps5.jpg"
            editionRewards.style.display = "flex"
            editionDigital.style.height = 'auto'
            editionUpgrade.style.display = 'flex'
            editionExtras.style.display = 'flex'
            editionContents.style.display = 'flex'
            contentTitle.style.display = 'flex'
            contentList.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'block'
            extrasDetailsFirstP.innerHTML = 'Nota: É preciso estar conectado à PlayStation™Network para resgatar o conteúdo do Pacote de DLC Extra.'
            extrasDetailsSecondP.style.display = 'block'
            extrasDetailsSecondP.innerHTML = 'A compra de conteúdo lhe dará a licença para ele das versões PlayStation 5 e PlayStation 4.'
            extrasDetailsThirdP.style.display = 'block'
            extrasDetailsThirdP.innerHTML = 'Comprar conteúdo para a versão do PlayStation®4 e atualizar o jogo para a versão do PlayStation®5 exigirá que você baixe novamente esse conteúdo com a mesma conta da PlayStation™Network.'
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4GOLDEDITION00'
            contentList.appendChild(secondItem)
            contentList.appendChild(thirdItem)

            if (window.screen.width >= 1024) {
                upgradeButton.style.bottom = '40px'
            } else {
                upgradeButton.style.bottom = ''
            }
        }

        else if (ps4Button.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/ge_img-ps4.jpg"
            editionRewards.style.display = 'flex'
            editionDigital.style.height = 'auto'
            editionUpgrade.style.display = 'flex'
            editionExtras.style.display = 'flex'
            editionContents.style.display = 'flex'
            contentTitle.style.display = 'flex'
            contentList.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'block'
            extrasDetailsFirstP.innerHTML = 'Nota: É preciso estar conectado à PlayStation™Network para resgatar o conteúdo do Pacote de DLC Extra.'
            extrasDetailsSecondP.style.display = 'block'
            extrasDetailsSecondP.innerHTML = 'A compra de conteúdo lhe dará a licença para ele das versões PlayStation 5 e PlayStation 4.'
            extrasDetailsThirdP.style.display = 'block'
            extrasDetailsThirdP.innerHTML = 'Comprar conteúdo para a versão do PlayStation®4 e atualizar o jogo para a versão do PlayStation®5 exigirá que você baixe novamente esse conteúdo com a mesma conta da PlayStation™Network.'
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4GOLDEDITION00'

            if (contentList.contains(secondItem) || contentList.contains(thirdItem)) {
                contentList.removeChild(secondItem)
                contentList.removeChild(thirdItem)
            } else {
                contentList.appendChild(secondItem)
                contentList.appendChild(thirdItem)
            }

            if (window.screen.width >= 1024) {
                upgradeButton.style.bottom = '40px'
            } else {
                upgradeButton.style.bottom = ''
            }
        }

        else if (xboxButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/ge_img-xboxxs.jpg"
            editionRewards.style.display = "none"
            editionDigital.style.height = 'auto'
            editionExtras.style.display = 'flex'
            editionContents.style.height = '75%'
            editionContents.style.display = 'flex'
            contentTitle.style.display = 'flex'
            contentList.style.display = 'flex'
            extrasDetailsFirstP.innerHTML = 'Nota: É preciso estar conectado à Xbox Live para resgatar conteúdos'
            extrasDetailsSecondP.style.display = 'none'
            extrasDetailsThirdP.style.display = 'none'
            storeLink.href = 'https://www.xbox.com/pt-BR/games/store/resident-evil-4-gold-edition/9P2G4PSMPBR7/'

            if (contentList.contains(secondItem) || contentList.contains(thirdItem)) {
                contentList.removeChild(secondItem)
                contentList.removeChild(thirdItem)
            } else {
                contentList.appendChild(secondItem)
                contentList.appendChild(thirdItem)
            }
        }

        else if (steamButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            editionImg.src = "./imgs/ge_img-steam.jpg"
            editionRewards.style.display = "none"
            editionDigital.style.height = 'auto'
            editionExtras.style.display = 'flex'
            editionContents.style.height = '75%'
            editionContents.style.display = 'flex'
            contentTitle.style.display = 'flex'
            contentList.style.display = 'flex'
            extrasDetailsFirstP.style.display = 'none'
            extrasDetailsSecondP.style.display = 'none'
            extrasDetailsThirdP.style.display = 'none'
            storeLink.href = 'https://store.steampowered.com/agecheck/app/2050650/'

            if (contentList.contains(secondItem) || contentList.contains(thirdItem)) {
                contentList.removeChild(secondItem)
                contentList.removeChild(thirdItem)
            } else {
                contentList.appendChild(secondItem)
                contentList.appendChild(thirdItem)
            }
        }
    }

    const handleSeparateWaysButton = () => {
        goldButton.style.backgroundColor = 'black'
        standardButton.style.backgroundColor = 'black'
        separateWaysButton.style.backgroundColor = 'rgb(186, 0, 0)'
        editionImg.src = "./imgs/separate-ways_img.jpg"
        editionRewards.style.display = "none"
        editionTitle.innerHTML = "Separate Ways"
        editionDigital.style.height = '100%'
        editionUpgrade.style.display = 'none'
        editionExtras.style.display = 'none'
        editionContents.style.display = 'none'
        contentTitle.style.display = 'none'
        contentList.style.display = 'none'

        if (ps5Button.style.backgroundColor == 'rgb(186, 0, 0)') {
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDLC000000001'
        }

        else if (ps4Button.style.backgroundColor == 'rgb(186, 0, 0)') {
            storeLink.href = 'https://store.playstation.com/pt-br/product/UP0102-PPSA07411_00-RE4RDLC000000001'
        }

        else if (xboxButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            storeLink.href = 'https://www.xbox.com/pt-br/games/store/resident-evil-4-caminhos-distintos/9pd2m9470n1p'
        }

        else if (steamButton.style.backgroundColor == 'rgb(186, 0, 0)') {
            storeLink.href = 'https://store.steampowered.com/agecheck/app/2109300/'
        }
    }

    editionUpgrade.addEventListener('click', function () {
        "https://www.playstation.com/ja-jp/support/games/upgrade-ps4-game-to-ps5-version/"
    })

    ps5Button.addEventListener('click', handlePS5Button)
    ps4Button.addEventListener('click', handlePS4Button)
    xboxButton.addEventListener('click', handleXboxButton)
    steamButton.addEventListener('click', handleSteamButton)
    standardButton.addEventListener('click', handleStandardButton)
    goldButton.addEventListener('click', handleGoldButton)
    separateWaysButton.addEventListener('click', handleSeparateWaysButton)
})