{fetch("https://dummyjson.com/carts")
.then (res =>res.json())
.then (json=>console.log(json));
}
console.log("hiii");