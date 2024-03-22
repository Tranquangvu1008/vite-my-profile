
export function statusPriority(status: string) {
    switch (status) {
        case 'CORRECT':
            return 1;
        case 'PARTIALLY_CORRECT':
            return 2;
        case 'INCORRECT':
            return 3;
        default:
            return 4;
    }
}

export function fakeApi(data: unknown) {
    return new Promise((resolve) => {
        // setTimeout(() => {
        resolve(data)
        // }, 1000)
    })
}