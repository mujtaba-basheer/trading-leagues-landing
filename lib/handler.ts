import { FormEvent, FormEventHandler } from "react";
import { ApiResponseType } from "../types";

const submitHandler: FormEventHandler<HTMLFormElement> = async (
  event: FormEvent<HTMLFormElement>
) => {
  event.preventDefault();
  const inputEl: HTMLInputElement | null = (
    event.target as HTMLFormElement
  ).querySelector('input[type="text"]');

  if (inputEl) {
    try {
      const qs = window.location.search;
      const sp = new URLSearchParams(qs);

      sp.append("mobile", inputEl.value);

      const headers = new Headers();
      headers.append("Content-Type", "application/x-www-form-urlencoded");
      const req = await fetch("https://tl.raintech.ai/users/waitlist", {
        method: "POST",
        // @ts-ignore
        body: sp.toString(),
        headers,
      });

      const resp: ApiResponseType = (await req.json()) as ApiResponseType;
      console.log(resp);
      if (resp.status === "success") {
        (event.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error(error);
    }
  }
};

export default submitHandler;
