const shorten = (title) => {
    const splitedTitle = title.split(" ");
    const newSplited = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newSplited
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => id === item.id)
    return result
}

const quantityCounter = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id)
    if (index === -1) {
        return false
    } else {
        return state.selectedItems[index].quantity
    }
}


export {shorten, isInCart, quantityCounter};