import { sleep } from "@/utils";
import { registerUserUrl } from '@/constants/constants';
import { ResponseError } from "@/types/ResponseError";

export const registerUser = async (name: string, email: string, password: string, phoneNumber: string) => {
  console.info('Trying to register a user');
  const res = await postToRegisterUser(name, email, password, phoneNumber);
  console.info('Registered a user');
  return res;
}

const postToRegisterUser = async (name: string, email: string, password: string, phoneNumber: string) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      phoneNumber: phoneNumber
    }),
  };
  console.log('meta', import.meta.env);
  console.log('process', process.env);
  let res: Response;
  try {
    res = await fetch(registerUserUrl, requestOptions);
  } catch (error) {
    console.log('Error');
    throw new Error('An unexpected error occurred');
  }

  if (!res.ok) {
    console.log('ResponseError');
    throw new ResponseError("Failed to register!", res);
  }
  return res;
}
