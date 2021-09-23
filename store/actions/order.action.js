import { URL_API } from '../../constants/database';

export const GET_ORDERS = 'GET_ORDERS';
export const REMOVE_ORDER = 'REMOVE_ITEM';


export const getOrders = () => {
  return async dispatch => {
    try {


          const response = await fetch(`${URL_API}/order.json`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })

          const items = await response.json()       
         dispatch({type: GET_ORDERS, payload: items})
    } catch (error) {
      console.log(error.message);
    }
  }
}


export const delterOrder = (id) => {
  console.log(id);
  return async dispatch => {
    try{
      await fetch(`${URL_API}/order/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      dispatch({type: REMOVE_ORDER, order: id})

    } catch(error){
      console.log(error.message)
    }
  }
}
