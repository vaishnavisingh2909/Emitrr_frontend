import { postServerData } from '../helper/helper';
import * as Action from '../redux/result_reducer';

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.error("Error in PushAnswer:", error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.error("Error in updateResult:", error);
  }
};

/** insert user data */
export const usePublishResult = async (resultData) => {
  const { result, username } = resultData;
  try {
    if (result.length === 0 || !username) {
      throw new Error("Invalid data: Result is empty or username is missing");
    }
    const response = await postServerData("http://localhost:8080/api/result", resultData);
    // Handle the response if needed
  } catch (error) {
    console.error("Error in usePublishResult:", error);
    throw error; // Rethrow the error for higher-level error handling
  }
};
