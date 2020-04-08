const parseResult = findings => {
    const uniqueKeys = Array.from(new Set(findings))

    return uniqueKeys.reduce((acc, curr) => {
        const occurances = () => findings.filter(item => item === curr).length

        return {
            ...acc,
            [`${curr}`]: occurances()
        }
    }, {})
}