import { useContext } from "react";
import { FeedbackItemsContext } from "../components/contexts/FeedbackItemsContextProvider";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "useFeedbackItems must be used within a FeedbackItemsContextProvider"
    );
  }
  return context;
}
