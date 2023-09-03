to dockerize the application enter into the node directory and follow this commands

docker network create mynetwork 
docker build -t myoperations .
docker run -d --name myMongoDB -p 27017:27017  --network=mynetwork mongo    
docker run -d --name myNodeApp -p 3000:3000 --network=mynetwork myoperations 

for db I used the existing image  but for the application I have Dockerfile.
my user model is'
{
  "firstName": "Somefirstname",
  "lastName": "Somelastname",
  "email": "somemail@example.com",
  "age": 30
}

here is the instruction for requests
create user
http://localhost:3000/saveUser (the user data is in the request body in json)
get user
http://localhost:3000/getUserById?id=<someidforuser>
update user
http://localhost:3000/updateUser?id=<someidforuser>  (user data is in the request body in json)
delete user
http://localhost:3000/deleteUser?id=<someidforuser>

