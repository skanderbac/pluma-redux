// User accounts info is here
// email and full name ect 
// any changes needed about this section do it here

import { Divider, FormControl, Grid, Input, TextField } from '@material-ui/core'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile,updateProfile  } from '../../redux/actions/userActions'
import { USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_REQUEST ,
  USER_UPDATE_SUCCESS ,
 USER_UPDATE_FAIL,
 USER_UPDATE_RESET,

   } from "../../redux/actions/types";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import {userState} from '../../Atoms/Atoms'
  import { makeStyles } from "@material-ui/core/styles";
import {signIn} from "../../redux/actions/authActions";
  const useStyles = makeStyles((theme) => ({
    txtInput: {
      "& label.Mui-focused": {
        color: "#6A7BFF",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#C4C4C4",
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#C4C4C4",
        },
      },
    },
  }));


function AccountInfoSection({dispatcher,form,history}) {
    const classes = useStyles();

  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [message, setMessage] = useState(null)
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)

  const  success = userUpdateProfile
  const dispatch = useDispatch()
 
  const userDetails = useSelector((state) => state.userDetails)
 //const { user } = userDetails
    const { user } = {
      firstname: 'maysa',
        lastname: 'maysa'
    }

  const userUpdate = useSelector((state) => state.userUpdate)
  /*const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate*/

   // const [user, setUser] = useRecoilState(userState);
  // const [user, setUser] = useState(props.form);

  const [isFocused, setIsFocused] = React.useState({one:false,two:false});
/*useEffect(() => {
  setUser(props.user);
}, [props.user]);*/
useEffect(() => {
  if (success) {
    history.replace('/profile')
  } else {
    if (!user || !user.name || success) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET })
     
    } else {
      setfirstname(user.firstname)
      setlastname(user.lastname)
    }
  }
}, [dispatch, history,  user, success])
/*const submitHandler = (e) => {
  e.preventDefault()
   dispatch(updateUserProfile({ id: user._id, firstname,lastname}))
  
}*/

const handleSubmit = (e) => {

    e.preventDefault();
    var loginFormData = new FormData();
    loginFormData.append("firstname",firstname);
    loginFormData.append("lastname",lastname);
    dispatch(updateProfile({firstname: firstname, lastname: lastname}));
};


    return (
        <Grid md={6} xs={12} style={{padding:'10px',display:'flex',flexDirection:'column',justifyContent:'space-around',height:'350px',marginRight:'15px'}}>
         <section >
            <span className='boldText' style={{textTransform:'uppercase',fontSize:'25px'}}>account information</span>
        </section>
        <FormControl className={classes.margin}>
        <span style={{color:isFocused.one?'#6A7BFF':'#8a8a8a'}}>First Name</span>
        <Input
          onFocus={()=>setIsFocused({...isFocused,one:true})}
          onBlur={()=>setIsFocused({...isFocused,one:false})}
       //   onChange={(e)=>setUser({...user,firstname:e.target.value})}
          defaultValue={form.firstname}
          onChange={(e)=>setfirstname(e.target.value)}
        />
      </FormControl>   

      <FormControl className={classes.margin}>
        <span style={{color:isFocused.two?'#6A7BFF':'#8a8a8a'}}>Last Name</span>
        <Input
          onFocus={()=>setIsFocused({...isFocused,two:true})}
          onBlur={()=>setIsFocused({...isFocused,two:false})}
       //   onChange={(e)=>setUser({...user,firstname:e.target.value})}
          defaultValue={form.lastname}
          onChange={(e)=>setlastname(e.target.value)}
        />
      </FormControl>
     
 
        <Divider />
        <div className="btn-group" display="flex">
            <button type="submit" className="btn btn-dark"
                    onClick={(e) => handleSubmit(e)}
            >Update</button>
          </div>
        </Grid>
    )
}

export default AccountInfoSection
