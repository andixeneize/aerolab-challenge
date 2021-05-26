import { toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

const endpoint = 'https://coding-challenge-api.aerolab.co';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk3MDIwNTliNzc4MTAwMjA5YzVhOTMiLCJpYXQiOjE2MjA1MDkxODl9.DNIrc_F8WVOpcmoiLjagZReDTRwnIfZSzE_o1kaJqY4';
 
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const REDEEM_PRODUCT = "REDEEM_PRODUCT";


export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: { user }
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});


export const fetchUser = () => async (dispatch, getState) => {
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token  
  }};

  const user = await fetch(
    endpoint + '/user/me',
    requestOptions)
  .then(res => res.json())
  dispatch(fetchUserSuccess(user))
} 

export const fetchProducts = () => async (dispatch, getState) => {
  const requestOptions = {
    method: 'GET',
    headers: { 
      "access-control-allow-origin" : "*",
      'Content-Type': 'application/json',
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token  
  }};

  const products = await fetch(
    endpoint + '/products',
    requestOptions)
  .then(res => res.json())
  dispatch(fetchProductsSuccess(products))
}


export const redeemProduct = (product) => async (dispatch, getState) => {
  let user = getState().user;

  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json', 
      'Authorization': 'Bearer ' + token  
    },
    body: JSON.stringify({ productId: product._id })
  };
  
  await fetch(
    endpoint + '/redeem',
    requestOptions)
  .then(res => {
    res.json();
    toast.success('Product redeemed!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
  });

  let newUser = {
    points: (user.points - product.cost),
    name: user.name
  }; 
  dispatch(fetchUserSuccess(newUser));
} 


