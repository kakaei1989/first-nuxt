export default function (ctx, inject) {
  inject('payam','Salam')
  inject('alexis','texas')
  inject('message',(message)=>console.log(message))
}
