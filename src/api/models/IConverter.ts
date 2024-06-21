export default interface IConverter<T> {
    toFireStore: (obj: unknown) => T,
    fromFirestore: (snapshot: unknown, options: unknown) => T
}
