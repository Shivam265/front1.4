// function is passed as a another function argument//
function greet(name,callback){
  const greeting = "hello" + name
  callback(greeting)

}
function displayGreeting(message){
  console.log(message);
}

greet("rogit",displayGreeting)

// callback hell | pyramid of doom//

getUser(function(user){
  ggtPosts(user.id,function(post){
    displayUserinfoAndPost(user,post,function(){
      console.log("user info and posts succsefully  displayed")
    })
  })
})






