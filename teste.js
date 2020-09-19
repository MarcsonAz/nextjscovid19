const data = [
    {
      "country": "Angola",
      "date": "2020-09-26T13:38:13"
    },
    {
      "country": "Angola",
      "date": "2020-10-26T13:38:13"
    },
    {
      "country": "Algeria",
      "date": "2020-08-26T13:38:13"
    },
    {
      "country": "Andorra",
      "date": "2020-08-26T13:38:13"
    },
    {
      "country": "Angola",
      "date": "2020-08-26T13:38:13"
    }
  ]

  // criar o objeto com chave obj.country e valor obj
  // a, cada loop, 
  // checar se existe chave no objeto com nome obj.country
  let newObj = {}
  data.map((obj,i) => {
    if(i===0) newObj[obj.country] = obj
    if(newObj.hasOwnProperty(obj.country)) {
        if(newObj[obj.country].date < obj.date) { // qual data mais recente
            newObj[obj.country] = obj
        }

    }else {
            newObj[obj.country] = obj
    }  
    })

function toArray(obj) {
    let newArray = []
    for(let i in obj){
        newArray.push(obj[i])
    }
    return newArray
}    

const saida = toArray(newObj)
console.log(saida)

