import { captureException } from "@sentry/browser";

export default function logError(err: any) {
  if (process.env.NODE_ENV === "development") {
    console.error(err);
  } else {
    captureException(err);
  }
}
