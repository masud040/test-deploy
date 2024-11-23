"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductDetails from "./ProductDetails";
import ProductDiscussion from "./ProductDiscussion";
import ProductRatingReview from "./ProductRatingReview";
export default function ProductDescription({ product }) {
  return (
    <div className="my-8">
      <Tabs selectedTabClassName="active-tab">
        <TabList className="flex items-center duration-300 border-none gap-3 md:gap-12 lg:gap-[72px] title-semibold mb-10">
          <Tab className="p-0">Details</Tab>
          <Tab className="p-0">Review & Rating</Tab>
          <Tab className="p-0">Discussion</Tab>
        </TabList>

        <TabPanel>
          <ProductDetails />
        </TabPanel>
        <TabPanel>
          <ProductRatingReview
            reviews={product.reviews}
            rating={product.rating}
          />
        </TabPanel>
        <TabPanel>
          <ProductDiscussion />
        </TabPanel>
      </Tabs>
    </div>
  );
}
