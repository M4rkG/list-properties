import { apiURL } from "../constants";

export function getProperties(params) {
  const url = new URL(`${apiURL}/properties`);
  const searchParams = new URLSearchParams(params).toString();

  return fetch(`${url}${searchParams ? `?${searchParams}` : ''}`);
}
