<h1>Readme</h1>

<h3>General info</h3>

Konsta Raitanen's repository containing everything related to the Back-end course hosted by LUT.
</br>
<h3>The project</h3>

My project is deployed to https://young-fortress-23489.herokuapp.com/. By visiting that address, you can see that the project is running.
The contents of the project are in main.

You can do GET requests to https://young-fortress-23489.herokuapp.com/posts/ with or without an id. For example, with an id of "6037431e723995002298c51f" you will be shown Leo Mäkinen's student information. Without id, you will be shown the info of all students.

You can also do a POST, DELETE, and PATCH requests. 

With POST, you can submit a new student. You need to input a name, email and university. The system will automatically submit a default status of "studies ongoing" and a registration date, which is the date at that the time of the request.

Making a DELETE request with an id deletes the student with that id.

With PATCH, it is possible to update student's information. It works like a POST request, but input of the student is needed. 


</br>

<h3>Other content</h3>

"excercises" -folder contains the material I created while following the course materials and tutorials.</br>

"video-and-diary" -folder contains my learning diary and the video showing my project running.
