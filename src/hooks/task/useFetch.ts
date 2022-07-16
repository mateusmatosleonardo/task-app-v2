import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

// * um tipo do typescript que determinamos como desconhecido
// * <T = unknown>

// ! hook que faz requests

const api = axios.create({
  baseURL: 'http://10.0.0.115:5000'
});

export const useFetch = () => {
  const getMsgInitial = useCallback(async () => {
    const response = await api.get('/');

    const msg = response.data;

    return msg;
  }, [api]);

  return getMsgInitial;
}