import React from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import "swagger-ui-react/swagger-ui.css";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

const APIPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">API Reference</h1>
          <p className="mt-2 text-gray-600">
            Interactive API documentation with live examples and specifications.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <SwaggerUI url="/openapi.yaml" />
        </div>
      </div>
    </Layout>
  );
};

export default APIPage;
