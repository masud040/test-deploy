"use client";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductDetails from "./ProductDetails";
import ProductDiscussion from "./ProductDiscussion";
import ProductRatingReviewSection from "./ProductRatingReview";
export default function ProductDescription({ product }) {
  return (
    <div className="my-8">
      <Tabs selectedTabClassName="active-tab">
        <TabList className="flex items-center duration-300 gap-3 md:gap-12 lg:gap-[72px] title-semibold mb-10">
          <Tab className="p-0">Details</Tab>
          <Tab className="p-0">Review & Rating</Tab>
          <Tab className="p-0">Discussion</Tab>
        </TabList>

        <TabPanel>
          <ProductDetails
            brand={product?.brand}
            description={product?.description}
            details={product?.details}
          />
        </TabPanel>
        <TabPanel>
          <ProductRatingReviewSection
            reviews={product?.reviews}
            rating={product?.rating}
          />
        </TabPanel>
        <TabPanel>
          <ProductDiscussion discussions={product?.discussion} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
