export const findObjectInArrayById = (id, array) => {
    const element = array.find(object => object.id === id);
    const elementIndex = array.indexOf(element);

    return {
        element,
        elementIndex
    }
};

export const updateObjectInArrayById = (id, array, newObject) => {
    const objectInfo = findObjectInArrayById(id, array);
    const objectId = objectInfo.elementIndex;

    if (objectId !== -1) {
        array[objectId] = newObject;
    }

    return array;
};

export const deleteObjectInArrayById = (id, array) => {
    return array.filter(object => object.id !== id);
};

export const addObjectToArray = (object, array) => {
    return [...array, object];
}