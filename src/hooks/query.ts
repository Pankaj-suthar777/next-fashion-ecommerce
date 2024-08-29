import { toast } from "@/components/ui/use-toast";
import { catchAsyncError } from "@/utils/catchError";
import axios from "axios";
import { useQuery } from "react-query";

const fetchCategories = async (): Promise<any> => {
  const { data } = await axios.get("/api/get-categories");
  return data.categories;
};

export const useFetchLatestAudios = () => {
  return useQuery(["get-categories"], {
    queryFn: () => fetchCategories(),
    onError(err) {
      const errorMessage = catchAsyncError(err);
      toast({
        variant: "destructive",
        title: errorMessage || "something went wrong",
      });
    },
  });
};
