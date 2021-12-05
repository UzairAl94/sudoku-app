import ToastService from "services/toast";

export const throwErrorToast = (e: any) => {
  const text = e.statusText || e.errors[0];
  ToastService.error({ text });
};

export const throwSuccessToast = (text: string) => {
  ToastService.success({ text });
};
