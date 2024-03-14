const express=require('express');
const router=express.Router();
const {body,validationResult}=require('express-validator');
const PostJob = require('../models/PostJob');
const Admin = require('../models/Admin');
router.post('/register',async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({error:errors.array()});
    }
    try{
        let admin=await Admin.findOne({aemail:req.body.aemail});
        if(admin){
            return res.status(400).send("Admin With this Email Id Already exist")
        }
        admin=await Admin.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            aemail: req.body.aemail,
            username: req.body.username,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
            phoneNumber:req.body.phoneNumber,
            role: req.body.role,
            department: req.body.department
        });
        res.json(admin);
    }catch(error){
        console.log(error)
    }
})

// // route 3:Authenticate the admin Login:POST "localhost:5000/api/adminAuth/adminlogin"  required registeration 
router.post('/login', [body('aemail', "Enter a valid Email").isEmail(),
body('password', 'Password cannot be blank').exists()], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const { aemail, password } = req.body;
    try {
        //Checking admin Already present or not
        let admin = await Admin.findOne({ aemail: req.body.aemail });
        //checking is admin  registered or not 
        if (!admin) {
            return res.status(400).json({ error: "Please Try to Login with Valid Credentials " });
        }
        //         const salt = await bcrypt.genSalt(10);
        //         // const securePassword = await bcrypt.hash(admin.password, salt);
        //         // console.log(email,password,admin.password)
        //         // let passwordComapare=await bcrypt.compare(securePassword,password);
        let passwordComapare = password === admin.password ? "True" : "false";
        if (!passwordComapare) {
            return res.status(400).json({ error: "Please Try to Login with Valid Credentials 2" });
            // return res.status(400).json({ error: "Invalid Password" });
        }
        //         const data = {
        //             admin: {
        //                 id: admin.id
        //             }
        //         }
        //         const authtoken = jwt.sign(data, JWT_SECRET);
        //         // res.json(authtoken);
        res.json("Logged In");

        //         res.json({ authtoken: authtoken, desc: "logged In" });
    } catch (error) {
        console.log(error);
    }
});
router.post('/postjob', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try{    
        //Making profile If it not Already Exist
        let postjob=await PostJob.findOne({jobTitle:req.body.jobTitle,company:req.body.comapany,location:req.body.location});
        if(postjob){
            res.status(400).send("This JOB is Already posted");
        }
        postjob = await PostJob.create({
            jobTitle:req.body.jobTitle ,
            location: req.body.location,
            company: req.body.company,
            jobDescription: req.body.jobDescription
        });
        res.json(postjob)
    } catch (error) {
        console.log(error);
    }
});
module.exports=router;