const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(element, alert) {

      if(Array.isArray(element)){
        element.forEach((el)=> alert(el))
        return element
      } else {
        Object.values(element).forEach((el)=> alert(el))
        return element
      }

    },

    map: function(element, alert) {

      if(Array.isArray(element)){
        return element.map((el)=> alert(el))
      } else {
        return Object.values(element).map((el)=> alert(el))
      }
    },

    reduce: function(element, callback, stPoint = 0) {
      return element.reduce(callback, stPoint)

    },

    find: function(element, func) {
      return element.find(func)
    },


    filter: function(element, func) {

      return element.filter(func)

    },
    filter: function(element, func) {

      return element.filter(func)

    },

    size: function(elements) {

      if(Array.isArray(elements)){
        return elements.length
      } else {
        return Object.keys(elements).length
      }

    },
    first: function(elements, elementsToGet) {
      if(elementsToGet){
        return elements.splice(0,3)
      } else{
        return elements[0]
      }
    },

   last: function(elements, elementsToGet){
     if(elementsToGet){
       return elements.slice(1).slice(-3)
     } else{
       return elements.slice(-1)[0]
     }
   },

    compact: function(elements){
       return elements.filter(Boolean)

   },



   sortBy: function(elements){





 },

 flatten: function(elements){
   return elements.flatten(func)


},

uniq: function(elements, elementsToGet){


},
keys: function(obj){
return Object.keys(obj)

},

values: function(obj){
return Object.values(obj)

},
Functions: function(elements, elementsToGet){


},
  }
})()

fi.libraryMethod()
