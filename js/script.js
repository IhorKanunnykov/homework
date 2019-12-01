(function(){
    'use strict';

    async function getUsers(){
//_________________________________________________________________
        let user = await fetch('https://jsonplaceholder.typicode.com/users')
            let users = await user.json(); 
            //console.log(users);
            //console.log(users[1].name)
//__________________________________________________________________

        let modal = document.querySelector('.modal');
        let close = document.querySelector('.close');
        let userInfo = document.querySelector('.userInfo');
        let userId = document.querySelector('.table');


//__________________________________________________________________

        
        function usersToTable(users){
            return `<tr>
                <td class="name">Name</td>
                <td>Username</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Website</td>
            </tr>`+users.reduce((html, user)=> html +`
             <tr >
                <td class="userId" data-id="${ user.id }">${ user.name }</td>
                <td>${ user.username }</td>
                <td>${ user.email }</td>
                <td>${ user.phone }</td>
                <td>${ user.website }</td>
                
            </tr> 


            `, '');
        }
        userId.innerHTML = usersToTable(users);


//__________________________________________________________________

  
        userId.addEventListener('click',onSelectUser);

        function onSelectUser(event){
            event.preventDefault();
            const name = event.target.getAttribute('data-id');
            //console.log(users[name-1]);
            const selectedUser = users[name-1]
            //console.log(selectedUser);

            function selectedUserToModal(selectedUser){
               return `<p>
               <h3>${selectedUser.name}</h3>
               <h3>Adress:</h3>
               City: ${selectedUser.address.city}; <br>
               Street: ${selectedUser.address.street}; <br>
               Suite: ${selectedUser.address.suite};  <br>
               zipcode: ${selectedUser.address.zipcode};<br>
               <h3>Company:</h3>
               name: ${selectedUser.company.name};<br>
               bs: ${selectedUser.company.bs};<br>
               catchPhrase: ${selectedUser.company.catchPhrase};<br>
                 </p>`
            }

            //selectedUserToTable(selectedUser);
            userInfo.innerHTML = selectedUserToModal(selectedUser);
            modal.setAttribute('style','display:block;');

           
        }
        
        close.addEventListener('click',()=>{
            modal.setAttribute('style','display:none;');
        });
         
    
    }
    getUsers();
    })();
    //fetch('https://jsonplaceholder.typicode.com/users')
    //        .then(response => response.json())
     //       .then(json => /*console.log*/(json))
