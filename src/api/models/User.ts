export default interface User {
    username: string,
    role: string,
    isItMap: {
      newValue: number,
      oldValue: string
    },
    active: boolean
}
