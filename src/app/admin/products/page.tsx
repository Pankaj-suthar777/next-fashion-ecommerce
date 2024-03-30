import { BreadcrumbDemo } from "@/components/BreadcrumbComponent";
import NavbarSearch from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ProductTable from "./_component/ProductTable";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { InputWithLabel } from "@/components/InputWithLabel";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FileInput from "./_component/FileInput";

const page = () => {
  return (
    <div className="w-screen flex flex-col justify-center mb-[100px] items-center">
      <div className="xl:w-[80%] xl:px-0 px-12 mb-8">
        <NavbarSearch type="home" />
        <Drawer dismissible={false}>
          <div className="flex flex-col gap-y-8 mt-10 ">
            <BreadcrumbDemo
              items={[{ href: "/admin/products", name: "Products" }]}
            />
          </div>
          <div className="mt-[50px]">
            <div className="flex justify-between mb-[50px] items-center">
              <h1 className="text-3xl font-normal">Products</h1>
              <DrawerTrigger className="px-4 py-2 flex gap-2 items-center bg-black text-white rounded-md">
                <i className="ri-add-line text-lg"></i>Add Product
              </DrawerTrigger>
            </div>
            <ProductTable />
          </div>

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
                        className="mt-3"
                        placeholder="Enter description here."
                        id="Description"
                      />
                    </div>

                    <div className="mt-4 w-full">
                      <InputWithLabel
                        LabelStyle="text-black"
                        InputStyle=""
                        id="Brand"
                        label="Brand"
                        placeholder="Enter brand name"
                        type="text"
                      />
                    </div>
                    <div className="mt-4 w-full flex gap-4">
                      <InputWithLabel
                        LabelStyle="text-black"
                        InputStyle=""
                        id="price"
                        label="Price"
                        placeholder="Enter price"
                        type="number"
                      />
                      <InputWithLabel
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
                    <FileInput />
                    <div className="mt-5 flex items-center gap-5">
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
              {/* <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription> */}
            </DrawerHeader>
            <DrawerFooter className="flex justify-center flex-row">
              <span className="px-4 py-2 flex gap-2 items-center border bg-black text-white w-[200px] rounded-md justify-center">
                Submit
              </span>
              <DrawerClose>
                <span className="px-4 py-2 flex gap-2 items-center border border-black text-black w-[200px] rounded-md justify-center">
                  Cancel
                </span>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default page;
