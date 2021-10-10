export default (context) => {
  // console.log(context.store.state)
  // console.log('asdf ghjkl')
  if (context.store.state.user.name){
    return context.redirect('/')
  }
}
