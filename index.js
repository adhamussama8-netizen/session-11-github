
const user=[{
 
    name:"adham ussama",
    password:1234


},
]

function createUser(){
 
    let newName =prompt(" enter user name")
    let newpassword =+prompt(" enter user password")


const newUser ={
    name:newName,
    password:newpassword,

}


user.push(newUser)

showUser()
}
 
function showUser (){
 
    console.clear()
     for (let index = 0; index < user.length; index++) {

        console.log(`${index +1}- ${user[index].name} => ${user[index].password}`)
        
     }


}
showUser()

function deleteUser(){
 
    const itemIndex=prompt(" enter user number")-1
    user.splice(itemIndex,1)

    showUser()
}


function updateUser(){

     const itemIndex =prompt(" enter User numebr")-1
 
     const newName=prompt("enter new name")
     const newpassword=prompt("enter new password")
 
      const newUser={
  
        name:newName,
        price:newpassword

      };

      
      user.splice(itemIndex,1,newUser)
 
      showUser()

}