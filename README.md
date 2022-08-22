CODING ADVENTURE

¿Cuándo tengo que usar useCallback()?
Cuando queremos memoizar el valor. Por ejemplo, en el caso de que haya un componente hijo que se esté renderizando múltiples veces sin necesidad, memoizando con la useCallback evitamos esto. Es la forma de evitar bucles infinitos generados por los cambios de estado "retroalimentados".
