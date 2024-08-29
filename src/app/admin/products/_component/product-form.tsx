"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InputWithLabel from "@/components/layout/input-with-label";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FileInput from "./file-input";
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
  setSelectedProduct,
}: {
  open: boolean;
  setOpen: Function;
  selectedProduct: ProductDetails | undefined;
  setSelectedProduct: Function;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<any[]>([]);
  const [uplodedImage, setUploadedImage] = useState<any[]>(
    selectedProduct?.image || []
  );

  const router = useRouter();
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
    if (selectedProduct?.image) {
      setUploadedImage(selectedProduct?.image);
    }
  }, [selectedProduct]);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    try {
      setIsLoading(true);
      const formData = new FormData();

      // Append images to formData
      images.forEach((image) => formData.append("image", image));

      // Check if there are images to upload
      // if (images.length > 0 || uplodedImage.length > 1) {
      // Upload new images
      const uploadImagePromises = images.map(async (image) => {
        const imageUploadRes = await axios.post(
          "/api/product/upload-image",
          formData
        );
        return imageUploadRes.data.image.secure_url;
      });

      // Wait for all images to be uploaded
      if (uplodedImage?.length > 0) {
        productDetails.image = [
          ...uplodedImage,
          ...(await Promise.all(uploadImagePromises)),
        ];
      } else {
        productDetails.image = [...(await Promise.all(uploadImagePromises))];
      }
      // }

      // Create or update product
      const res = !selectedProduct
        ? await axios.post("/api/product/new", productDetails)
        : await axios.put(
            `/api/product/${selectedProduct?._id}`,
            productDetails
          );

      // Show success message
      if (res.status === 201) {
        toast({
          className: "bg-[#32de84] text-black",
          title: !selectedProduct
            ? "Product Created Successfully"
            : "Product Updated Successfully",
        });
      }
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.message,
      });
    } finally {
      resetFormState();
    }
  };

  const resetFormState = () => {
    setIsLoading(false);
    setOpen(false);
    router.refresh();
    setProductDetails({
      name: "",
      description: "",
      brand: "",
      price: 0,
      category: "",
      countInStock: 0,
    });
    setImages([]);
  };

  const onFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...selectedFiles]);
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  const removeImage = (imageToRemove: any) => {
    setImages((prevImages) =>
      prevImages.filter((image) => image !== imageToRemove)
    );
  };

  const handleRemoveUploadedImage = (index: number) => {
    setUploadedImage((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  return (
    <Drawer dismissible={false} open={open}>
      <form ref={formRef} onSubmit={handleSubmit}>
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
                          <SelectItem value="Sweatshirt">Sweatshirt</SelectItem>
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
                    {uplodedImage?.map((image, index) => (
                      <div className="p-4 relative" key={index}>
                        <img
                          src={image}
                          className="max-h-40 object-cover"
                          alt="Uploaded Profile"
                        />
                        <i
                          className="ri-delete-bin-6-line absolute cursor-pointer z-88 bg-black text-white top-4 p-1 right-4 text-md rounded-sm"
                          onClick={() => handleRemoveUploadedImage(index)}
                        ></i>
                      </div>
                    ))}

                    {images.map((image, index) => (
                      <div className="p-4 relative" key={index}>
                        <img
                          src={URL.createObjectURL(image)}
                          className="max-h-40 object-cover"
                          alt="Uploaded Profile"
                        />
                        <i
                          className="ri-delete-bin-6-line absolute cursor-pointer z-88 bg-black text-white top-4 p-1 right-4 text-md rounded-sm"
                          onClick={() => removeImage(image)}
                        ></i>
                      </div>
                    ))}
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
                  ? images
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
            <DrawerClose
              onClick={() => {
                setOpen(false);
                setSelectedProduct(null);
                setImages([]);
                setUploadedImage([]);
              }}
            >
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
