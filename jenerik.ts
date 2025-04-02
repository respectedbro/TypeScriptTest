function entity<T>(args: T): T {
    return args
}

entity<number>(1)

entity<string>('foo')

const entity2 = <T>(args: T): T => {
    return args
}

entity2<number>(1)

entity2<string>('foo')

class Channel<T> {
    private name: T

    constructor(name: T) {
        this.name = name
    }

    getName(): T {
        return this.name
    }
}

new Channel<string>('RED GROUP')
new Channel<number>(1)

interface  IPair<K, V> {
    key: K,
    value: V
}

const pair1:IPair<string, number> = {
    key: 'sd',
    value: 45
}
const pair2:IPair<string, string> = {
    key: 'sd',
    value: '45'
}

 type TypeLength = {
    length:number
 }

function getNameLength<T extends TypeLength>(entity: T):number {
return entity.length
}

getNameLength('sdasfas')
getNameLength([1,2,3,4,5])