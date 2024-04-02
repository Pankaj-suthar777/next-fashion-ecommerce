"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InputWithLabel } from "@/components/InputWithLabel";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FileInput from "./FileInput";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Loader from "@/components/Loader";
import { ProductDetails } from "@/interfaces/Product";
const ProductForm = ({
  open,
  setOpen,
  selectedProduct,
}: {
  open: boolean;
  setOpen: Function;
  selectedProduct: ProductDetails | undefined;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [productDetails, setProductDetails] = useState<ProductDetails>({
    name: selectedProduct?.name || "",
    description: selectedProduct?.description || "",
    brand: selectedProduct?.brand || "",
    price: selectedProduct?.price || 0,
    category: selectedProduct?.category || "",
    countInStock: selectedProduct?.countInStock || 0,
  });

  useEffect(() => {
    setProductDetails({
      name: selectedProduct?.name || "",
      description: selectedProduct?.description || "",
      brand: selectedProduct?.brand || "",
      price: selectedProduct?.price || 0,
      category: selectedProduct?.category || "",
      countInStock: selectedProduct?.countInStock || 0,
    });
  }, [selectedProduct]);
  const [image, setImage] = useState<File | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: any) => {
    if (formRef.current) {
      e.preventDefault();
      submitHandler(e);
    }
  };
  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    try {
      setIsLoading(true);
      const formData = new FormData();
      if (selectedProduct === undefined && !image) {
        toast({ variant: "destructive", title: "Please add a image" });
        return;
      }
      if (
        !productDetails.brand ||
        !productDetails.category ||
        !productDetails.countInStock ||
        !productDetails.description ||
        !productDetails.name ||
        !productDetails.price ||
        !productDetails.category
      ) {
        toast({ variant: "destructive", title: "Please fill all the fileds" });
        return;
      }
      if (image) {
        formData.append("image", image);
        const imageUploadRes = await axios.post(
          "/api/product/upload-image",
          formData
        );
        productDetails.image = imageUploadRes.data.image.secure_url;
      }
      let res;
      if (selectedProduct === undefined) {
        res = await axios.post("/api/product/new", productDetails);
        if (res.status === 201) {
          toast({
            className: "bg-[#32de84] text-black",
            title: "Prodct Created Successfully",
          });
        }
      } else {
        res = await axios.put(
          `/api/product/${selectedProduct?._id}`,
          productDetails
        );

        if (res.status === 201) {
          toast({
            className: "bg-[#32de84] text-black",
            title: "Prodct Updated Successfully",
          });
        }
      }
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  const onFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        setImage(e.target.files[0]);
      }
    } catch (error: any) {}
  };

  return (
    <Drawer dismissible={false} open={open}>
      <form ref={formRef} onSubmit={submitHandler}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-2xl text-center">
              Add Product Details
            </DrawerTitle>
            <div className="flex flex-col items-center">
              <Tabs
                defaultValue="ProductDetails"
                className="lg:w-[50%] w-full mt-5"
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="ProductDetails">
                    Product Details
                  </TabsTrigger>
                  <TabsTrigger value="Gallary">Gallary</TabsTrigger>
                </TabsList>
                <TabsContent value="ProductDetails">
                  <div className="mt-5 w-full">
                    <InputWithLabel
                      value={productDetails.name}
                      onChange={(e) => {
                        setProductDetails((pre) => ({
                          ...pre,
                          name: e.target.value,
                        }));
                      }}
                      LabelStyle="text-black"
                      InputStyle=""
                      id="name"
                      label="Product Name"
                      placeholder="Enter product name"
                      type="text"
                    />
                  </div>
                  <div className="mt-4 w-full">
                    <Label htmlFor="Description">Description</Label>
                    <Textarea
                      value={productDetails.description}
                      onChange={(e) => {
                        setProductDetails((pre) => ({
                          ...pre,
                          description: e.target.value,
                        }));
                      }}
                      className="mt-3"
                      placeholder="Enter description here."
                      id="Description"
                    />
                  </div>

                  <div className="mt-4 w-full flex gap-4">
                    <InputWithLabel
                      value={productDetails.brand}
                      onChange={(e) => {
                        setProductDetails((pre) => ({
                          ...pre,
                          brand: e.target.value,
                        }));
                      }}
                      LabelStyle="text-black"
                      InputStyle=""
                      id="Brand"
                      label="Brand"
                      placeholder="Enter brand name"
                      type="text"
                    />
                    <div className="grid w-full items-center gap-4">
                      <Label htmlFor="cate" className={`text-black`}>
                        Category
                      </Label>
                      <Select
                        onValueChange={(e: any) => {
                          setProductDetails((prev) => ({
                            ...prev,
                            category: e,
                          }));
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent className="outline-none focus:outline-none">
                          <SelectItem value="tshirt">Tshirt</SelectItem>
                          <SelectItem value="shirt">Shirt</SelectItem>
                          <SelectItem value="dress">Dress</SelectItem>
                          <SelectItem value="jeans">Jeans</SelectItem>
                          <SelectItem value="shoes">Shoes</SelectItem>
                          <SelectItem value="bag">Bags</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="mt-4 w-full flex gap-4">
                    <InputWithLabel
                      value={productDetails.price}
                      onChange={(e) => {
                        setProductDetails((pre) => ({
                          ...pre,
                          price: e.target.value,
                        }));
                      }}
                      LabelStyle="text-black"
                      InputStyle=""
                      id="price"
                      label="Price"
                      placeholder="Enter price"
                      type="number"
                    />
                    <InputWithLabel
                      value={productDetails.countInStock}
                      onChange={(e) => {
                        setProductDetails((pre) => ({
                          ...pre,
                          countInStock: e.target.value,
                        }));
                      }}
                      LabelStyle="text-black"
                      InputStyle=""
                      id="cis"
                      label="Count In Stock"
                      placeholder="Enter stock"
                      type="number"
                    />
                  </div>
                </TabsContent>
                <TabsContent value="Gallary">
                  <FileInput onChange={onFileSelect} />
                  <div className="mt-5 flex items-center gap-5 w-full overflow-auto">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaotkjBRAH59vIByI_-EZLKrQOdWN_cVKZdYJgFTVN1PuyjPKorv904sNSb6rkTFqOe8&usqp=CAU"
                      className="h-32 w-40"
                    />
                    <img
                      src="https://as2.ftcdn.net/v2/jpg/04/88/59/15/1000_F_488591500_JzHOtRMEaPZZUxGLSOyh83T97OwVG3CE.jpg"
                      className="h-32 w-40"
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNqtpAjEli4jPhVf2YT239y2Rhq_-6YLPf-1lwS2JLQ&s"
                      className="h-32 w-40"
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </DrawerHeader>
          <DrawerFooter className="flex justify-center flex-row">
            <span
              onClick={handleSubmit}
              className={`px-4 py-2 flex gap-2 items-center border bg-black text-white sm:w-[200px] w-[150px] rounded-md justify-center cursor-pointer ${
                selectedProduct === undefined
                  ? image
                  : true &&
                    productDetails.name &&
                    productDetails.brand &&
                    productDetails.category &&
                    productDetails.countInStock &&
                    productDetails.description &&
                    productDetails.name &&
                    productDetails.price &&
                    productDetails.category
                  ? ""
                  : "bg-gray-500"
              }`}
            >
              {isLoading && <Loader />} Submit
            </span>
            <DrawerClose onClick={() => setOpen(false)}>
              <span className="px-4 py-2 flex gap-2 items-center border border-black text-black sm:w-[200px] w-[150px] rounded-md justify-center">
                Cancel
              </span>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </form>
    </Drawer>
  );
};

export default ProductForm;
