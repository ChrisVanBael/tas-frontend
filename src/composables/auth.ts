import { sleep } from "@/utils";
import { tasBffUrl } from '@/constants/constants';
import { ResponseError } from "@/types/ResponseError";

export const login = async (email: string, password: string) => {
  console.info(`Trying to login for ${email}`);
  await postToLogin(email, password);
  await sleep(2000);
}

const postToLogin = async (email: string, password: string) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ email: email, password: password }),
  };
  console.log('meta', import.meta.env);
  console.log('process', process.env);
  let res: Response;
  try {
    res = await fetch(`${tasBffUrl}/login`, requestOptions);
  } catch (error) {
    console.log(error)
    throw new Error('An unexpected error occurred');
  }

  if (!res.ok) {
    throw new ResponseError("Failed to login!", res);
  }

}

export const useFetch = async (requestURI: string): Promise<any> => {
  const res = await fetch(requestURI);
  if (!res.ok) {
      throw new Error('Failed to fetch data');
  }
}
