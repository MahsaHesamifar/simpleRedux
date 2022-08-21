import axios from "axios";

const fetchUsersRequest = () => {
  return { type: "FETCH_USERS_REQUEST" };
};
const fetchUsersSuccess = (users) => {
  return { type: "FETCH_USERS_SUCCESS", payload: users };
};
const fetchUsersFailure = (error) => {
  return { type: "FETCH_USERS_FAILURE", payload: error };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.data;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
