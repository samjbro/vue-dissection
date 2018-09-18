const defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
}


export function mergeOptions (parent, child, vm) {
  const options = {}
  let key
   for (key in parent) {
     mergeField(key)
   }
   for (key in child) {
     mergeField(key)
   }

   function mergeField (key) {
     options[key] = defaultStrat(parent[key], child[key])
   }

   return options
 }