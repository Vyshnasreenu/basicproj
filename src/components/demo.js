const Myfunction = (arrObj) => {
    for (const key in arrObj) {
        console.log(arrObj[key].value)
    }
}

const array = [{ value: 34, label: 54 }, { 3: 45, 4: 56 }, { 5: 67, 8: 34 }]
Myfunction(array)