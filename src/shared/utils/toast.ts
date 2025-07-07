import { toast } from "sonner";

const toastError = (message: string) => {
  toast.error(message, {
    style: {
      background: "#fff0f0",
      color: "#e60000",
      border: "1px solid #ffe0e1",
    },
  });
};

const toastSuccess = (message: string) => {
  toast.success(message, {
    style: {
      background: "#ecfdf3",
      color: "#bffcd9",
      border: "1px solid #008a2e",
    },
  });
};

export { toastError, toastSuccess };
