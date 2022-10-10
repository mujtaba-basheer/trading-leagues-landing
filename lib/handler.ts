import {
  FormEvent,
  FormEventHandler,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { ApiResponseType, PopupProps } from "../types";

export const submitHandler = async (
  event: FormEvent<HTMLFormElement>,
  formIndex: number,
  callback: Dispatch<SetStateAction<PopupProps>>
) => {
  event.preventDefault();
  callback({
    mobile: "",
    wailist_no: 0,
    open_modal: false,
    // @ts-ignore
    loading: [0, 1, 2].map((x) => x === formIndex),
    status: ["", "", ""],
  });

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
      if (resp.status === "success") {
        const { waitlist } = resp;
        callback({
          mobile: inputEl.value,
          wailist_no: waitlist,
          open_modal: true,
          loading: [false, false, false],
          // @ts-ignore
          status: [0, 1, 2].map((x) => (x === formIndex ? "success" : "")),
        });
        (event.target as HTMLFormElement).reset();
      } else {
        (event.target as HTMLFormElement).reset();
        callback({
          mobile: "",
          wailist_no: 0,
          open_modal: false,
          loading: [false, false, false],
          // @ts-ignore
          status: [0, 1, 2].map((x) => (x === formIndex ? "failure" : "")),
        });

        setTimeout(() => {
          callback({
            mobile: "",
            wailist_no: 0,
            open_modal: false,
            loading: [false, false, false],
            // @ts-ignore
            status: ["", "", ""],
          });
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  }
};
