(function(){
    'use strict';

    async function getUsers(){
//_____________________________SERVER ACCESS____________________________________

        let user = await fetch ('https://jsonplaceholder.typicode.com/users')
            let users = await user.json (); 
            //console.log(users);
            //console.log(users[1].name)

//_____________________________SELECTORS_____________________________________

        let modal = document.querySelector ('.modal');
        let close = document.querySelector ('.close');
        let userInfo = document.querySelector ('.userInfo');
        let userId = document.querySelector ('.table');
        let sortName = document.querySelector ('.nameSort');
        

//______________________________USERS IN TABLE____________________________________

        
        function usersToTable (users) {
            return users.reduce ((html, user) => html +`
             <tr >
                <td class="userId" data-name="${ user.name }" data-id="${ user.id }"> ${ user.name } </td>
                <td class-"notGenereteEvent" data-name="${ user.username }"> ${ user.username } </td>
                <td class-"notGenereteEvent" data-name="${ user.email }"> ${ user.email } </td>
                <td class-"notGenereteEvent" > ${ user.phone } </td>
                <td class-"notGenereteEvent" data-name="${ user.website }"> ${ user.website } </td>
                
            </tr> 
            `, '');
        }

        userId.innerHTML = usersToTable (users);

//_____________________________________SORT______________________

		sortName.addEventListener ('click', onSelectName);

		function onSelectName (event){
			const headName = event.target.getAttribute ('data-name');
			const dataUsers = users.find (item => item.name === headName)

			clickHandlerName (dataUsers)
			userId.innerHTML = clickHandlerName (users);

			function clickHandlerName () {
				const compare = (a, b) => {
					const elemA = a.name
                    const elemB = b.name

                    let comparison = 0
                    if (elemA > elemB) {
                    	comparison = 1
                    } else if (elemA < elemB) {
                    	comparison = -1
                    }
                    return comparison
				}
				users.sort (compare)
				return usersToTable (users)
			}
		}
		
//_________________________________MODAL____________________________

	
        userId.addEventListener ('click', onSelectUser);

        function onSelectUser(event) {
            event.preventDefault ();
            const name = event.target.getAttribute ('data-id');
            //console.log(users[name-1]);
            const selectedUser = users[name-1]
            //console.log(selectedUser);
            console.log(event)

            function selectedUserToModal (selectedUser) {
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
            userInfo.innerHTML = selectedUserToModal (selectedUser);
            modal.setAttribute('style', 'display:block;');

           
        }
        
        close.addEventListener ('click',() => {
            modal.setAttribute ('style', 'display:none;');
        });
         
    
    }
    getUsers();

    })();
