import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import Role from '../../../common/Role';
import activationController from '../../../controllers/clientControllers/authorization/activationController';
import checkTokenExp from '../../../services/accessToken/checkTokenExp';
import getTokenData from '../../../services/accessToken/getTokenData';
import { setUserId, setUserName } from '../../../slices/UserSlice';

function Activation() {
  const [status, setStatus] = useState(0);
  const dispatch = useDispatch();
  const { token } = useParams();
  useEffect(() => {
    if (status === 0) {
      if (checkTokenExp(token)) {
        const { id, name } = getTokenData(token);
        activationController(id, name, Role.CLIENT).then((res) => {
          if (res.status === 200) {
            localStorage.setItem('token', res.data.token);
            dispatch(setUserId(id));
            dispatch(setUserName(name));
          }
          setStatus(res.status);
        });
      } else {
        setStatus(400);
      }
    }
  });

  return (
    <>
      {status === 0 && <p>Waiting</p>}
      {status === 200 && <Redirect to={{ pathname: '/client/profile' }} />}
      {status === (400 && 500) && <p>Activation failed</p>}
    </>
  );
}

export default Activation;
