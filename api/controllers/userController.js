'use strict';

<<<<<<< HEAD

var mongoose = require('mongoose'),
    User = mongoose.model('User');
const { query } = require('express');
var jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

/*
exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
*/

exports.createUser = async function (req, res) {
  try{
                  var userparams = req.body;
          const { username, email, password: plainTextPassword } = req.body        
          console.log(userparams.username);
=======

var mongoose = require('mongoose'),
    User = mongoose.model('User');
const { query } = require('express');
var jwt = require('jsonwebtoken');


const bcrypt = require('bcryptjs')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'



/*
exports.list_all_tasks = function (req, res) {
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};
*/

exports.createUser = function (req, res) {
  try{
                  var userparams = req.body;
                  console.log(userparams.username);
>>>>>>> 44adbf661738fc1272bd3711a5de79b5a10899bf
                  if (userparams.username == "") {
                    res.send("username cannot be empty");
                    return;
                  }

                  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userparams.email)) {
                    res.send(" invalid email id");
                  }
                  if (!/^[A-Za-z]\w{8,16}$/.test(userparams.password)) {
                    res.send("invalid password,try another");
                    return;
                  }
                  
<<<<<<< HEAD
                  const password = await bcrypt.hash(plainTextPassword, 10)


                const new_user =new User({
                  username,
                  email,
                  password
                })
                await new_user.save();
                console.log('User created successfully: ',new_user)
        }
=======
                //changed 
                userparams.password=await bcrypt.hash(userparams.password,10)


                  var new_user = new User(req.body);
                  console.log(new_user);
                  new_user.save(function (err, user) {
                    
                    res.send("user created successfully");
                  });}
>>>>>>> 44adbf661738fc1272bd3711a5de79b5a10899bf
  //changed
  catch(error){
    if(error.code === 11000){
      return res.json({status:"error",error:'Email Id already in Use'})
    }
    throw error;
  }
<<<<<<< HEAD
  res.json({status:"ok"})
};

exports.loginUser = async function (req, res) 
{
             const { email, password } = req.body
	            const user = await User.findOne({ email }).lean()

                  if (!user) 
                  {
                    return res.json({ status: 'error', error: 'Invalid username/password' })
                  }

	      if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

              const token = jwt.sign(
                {
                  id: user._id,
                  email: user.email
                },
                JWT_SECRET
              )
=======
};

exports.loginUser = function (req, res) {
  const { username, password } = req.body
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)
>>>>>>> 44adbf661738fc1272bd3711a5de79b5a10899bf

		return res.json({ status: 'ok', data: token })
	}

<<<<<<< HEAD
	res.json({ status: 'error', error: 'Invalid username/password' })
};
  
  
  
  // const { email, password } = req.body
	// const user = User.findOne({ email })

	// if (!user) {
	// 	return res.json({ status: 'error', error: 'Invalid username/password' })
	// }
  // res.json("Yes")
	// // if ( bcrypt.compare(password, user.password)) {

	// 	const token = jwt.sign(
	// 		{
	// 			id: user._id,
	// 			username: user.username
	// 		},
	// 		JWT_SECRET
 	//)

	// 	return res.json({ status: 'ok', data: token })
	// }

   // res.json({ status: 'error', error: 'Invalid username/password' })


=======
    res.json({ status: 'error', error: 'Invalid username/password' })

};
>>>>>>> 44adbf661738fc1272bd3711a5de79b5a10899bf

exports.users= function (req, res) {
  var searchKeys=req.body.searchKeys;
  var searchValues=req.body.searchValues;
  var selectionKeys=req.body.selectionKeys;
  var input_skip=req.body.skip;
  var input_limit=req.body.limit;
var query={};
var i;
for(i=0;i<searchKeys.length;i++)
{
    query[searchKeys[i]]={
      $regex:searchValues[i]
  }
} console.log(query);
var fields=selectionKeys.join(' ');
  User.find(query,fields,{ skip: input_skip, limit: input_limit},function(err,response){
<<<<<<< HEAD

      if(err){

=======

      if(err){

>>>>>>> 44adbf661738fc1272bd3711a5de79b5a10899bf
          console.log(err);
      }
      else{
          
          console.log("result",response);
          res.send(response);
          
      }
  });
}
  