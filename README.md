CODING ADVENTURE

¿Cuándo tengo que usar useCallback()?
Por ejemplo cuando uso un useEffect, y esa función la tengo que meter en un array de dependencias y necesito que no sea redefinida (solo que se redefina en caso de que cambie), para asegurarme de que esto ocurra, utilizamos el useCallback y memoizamos (solo se ejecuta una primera vez, no se ejecutará otra vez hasta que no haya un cambio).
