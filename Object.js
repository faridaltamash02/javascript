const object1 = {
    "Corresponding": {
        "c1": {
            "title": "The Last Dance",
            "ttv": "12"
        },
        "c2": {
            "title": "Atlas",
            "ttv": "7"
        },
        "c3": {
            "title": "Aquaman",
            "ttv": "5"
        }
    },
    "WholeSale": {
        "w1": {
            "title": "The Death and Return of Superman",
            "ttv": "10"
        },
        "w2": {
            "title": "Lost Kingdom",
            "ttv": "18"
        },
        "w3": {
            "title": "Dune",
            "ttv": "4"
        }
    }
};

const object2 = {
    "Corresponding": {
        "c1": {
            "title": "The Last Dance",
            "ttv": "12"
        },
        "c2": {
            "title": "Atlas",
            "ttv": "7"
        },
        "c3": {
            "title": "Aquaman",
            "ttv": "5"
        }
    },
}

//This code snippet processes the object2 object and transforms it into an array of objects, where each object represents a key-value pair from the original object.
//Object.entries(object1): This part retrieves all the key-value pairs from the object1 object as an array of arrays. Each inner array represents a category ("Corresponding" or "WholeSale") and its corresponding nested object.

const OneParentkey = Object.entries(object2).map(([key, val]) => ({
    id: key,
    ...val
})

)
//.flatMap(([key, val]) => ...): This part iterates over each category array obtained in the previous step using the flatMap function. flatMap is used here to flatten the nested structure, as we'll see in the next step. For each category array, it destructures it into key (category name) and val (nested object containing movies).
//Object.entries(val).map(([id, innerVal]) => ...): Inside the flatMap function, this part further iterates over each movie within the current category using Object.entries and map. It destructures each movie entry into id (movie key like "c1", "w2" etc.) and innerVal (object containing movie title and ttv).
const test = Object.entries(object1).flatMap(([key, val]) =>
    Object.entries(val).map(([id, innerVal]) => ({
        id,
        category: key,
        ...innerVal
    }))
)

const transFormedData = Object.entries(object1.WholeSale).map(([key, value]) => ({
    id: key,
    ...value,
}));
console.log(OneParentkey)

console.log(test)

